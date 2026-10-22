const logger = require('../../utils/logger');
const db = require('../../config/database');
const { taskQueue } = require('../../config/queue');

/**
 * OrchestratorAgent - Central coordinator for the content production pipeline.
 *
 * Responsible for daily planning, topic-to-agent assignment, and quality
 * evaluation of produced content across five scoring dimensions.
 */
class OrchestratorAgent {
  /**
   * @param {object} [options]
   * @param {number} [options.qualityThreshold=85] Minimum acceptable quality score
   * @param {number} [options.dailyTarget=15] Target number of content pieces per day
   */
  constructor(options = {}) {
    this.qualityThreshold = options.qualityThreshold ?? 85;
    this.dailyTarget = options.dailyTarget ?? 15;
    this.agents = {
      content: { name: 'ContentAgent', categories: ['ebook', 'template', 'guide', 'article'] },
      design: { name: 'DesignAgent', categories: ['graphic', 'mockup', 'ui-kit', 'icon'] },
      marketing: { name: 'MarketingAgent', categories: ['social-media', 'ad-copy', 'email', 'landing-page'] },
    };

    logger.info('OrchestratorAgent initialized', {
      qualityThreshold: this.qualityThreshold,
      dailyTarget: this.dailyTarget,
    });
  }

  // ---------------------------------------------------------------------------
  // Daily Planning
  // ---------------------------------------------------------------------------

  /**
   * Fetch pending topics from the database, assign each to the appropriate
   * agent, and enqueue them for processing.
   *
   * @returns {Promise<object[]>} The list of assigned queue records
   */
  async dailyPlanning() {
    try {
      logger.info('Starting daily planning', { dailyTarget: this.dailyTarget });

      // 1. Fetch pending topics up to the daily target
      const result = await db.query(
        `SELECT id, topic, category, priority
         FROM content_queue
         WHERE status = 'pending'
         ORDER BY priority DESC, created_at ASC
         LIMIT $1`,
        [this.dailyTarget]
      );

      const pendingTopics = result.rows;
      logger.info(`Found ${pendingTopics.length} pending topics`);

      // 2. Assign each topic to the appropriate agent
      const assignments = [];
      for (const topic of pendingTopics) {
        const agent = this.assignToAgent(topic);
        if (agent) {
          // Update the DB record with the assignment
          await db.query(
            `UPDATE content_queue
             SET assigned_to = $1, status = 'assigned', updated_at = NOW()
             WHERE id = $2`,
            [agent.name, topic.id]
          );

          // Add to the BullMQ job queue
          await taskQueue.add('produce-content', {
            topicId: topic.id,
            topic: topic.topic,
            category: topic.category,
            agent: agent.name,
          });

          assignments.push({
            topicId: topic.id,
            topic: topic.topic,
            agent: agent.name,
          });

          logger.info(`Assigned topic "${topic.topic}" to ${agent.name}`);
        }
      }

      logger.info(`Daily planning complete – ${assignments.length} topics assigned`);
      return assignments;
    } catch (error) {
      logger.error('Daily planning failed', { error: error.message });
      throw error;
    }
  }

  // ---------------------------------------------------------------------------
  // Agent Assignment
  // ---------------------------------------------------------------------------

  /**
   * Determine the best agent for a given topic based on its category.
   *
   * @param {object} topic - Must contain at least a `category` property
   * @returns {{ name: string, categories: string[] } | null}
   */
  assignToAgent(topic) {
    if (!topic || !topic.category) {
      logger.warn('assignToAgent called without a valid topic or category');
      return null;
    }

    const category = topic.category.toLowerCase();

    for (const agent of Object.values(this.agents)) {
      if (agent.categories.includes(category)) {
        return agent;
      }
    }

    // Default fallback – route to the content agent for uncategorised topics
    logger.warn(`No specific agent for category "${category}", falling back to ContentAgent`);
    return this.agents.content;
  }

  // ---------------------------------------------------------------------------
  // Quality Check
  // ---------------------------------------------------------------------------

  /**
   * Evaluate content quality across five dimensions and return an overall score.
   *
   * @param {object} content - The content object to evaluate
   * @returns {object} Scoring breakdown with `overall` (0-100) and per-dimension scores
   */
  qualityCheck(content) {
    if (!content) {
      return { overall: 0, passed: false, dimensions: {} };
    }

    const dimensions = {
      contentDepth: this.scoreContentDepth(content),
      screenshotQuality: this.scoreScreenshotQuality(content),
      formatting: this.scoreFormatting(content),
      originality: this.scoreOriginality(content),
      value: this.scoreValue(content),
    };

    // Weighted average – contentDepth and value carry more weight
    const weights = {
      contentDepth: 0.25,
      screenshotQuality: 0.15,
      formatting: 0.15,
      originality: 0.20,
      value: 0.25,
    };

    const overall = Math.round(
      dimensions.contentDepth * weights.contentDepth +
      dimensions.screenshotQuality * weights.screenshotQuality +
      dimensions.formatting * weights.formatting +
      dimensions.originality * weights.originality +
      dimensions.value * weights.value
    );

    const passed = overall >= this.qualityThreshold;

    logger.info('Quality check complete', { overall, passed, dimensions });

    return { overall, passed, dimensions };
  }

  // ---------------------------------------------------------------------------
  // Individual Scoring Methods
  // ---------------------------------------------------------------------------

  /**
   * Score content depth (0-100).
   * Evaluates word count, section count, and presence of examples / references.
   */
  scoreContentDepth(content) {
    let score = 0;

    // Word count contribution (up to 40 points)
    const wordCount = (content.body || content.text || '').split(/\s+/).filter(Boolean).length;
    if (wordCount >= 2000) score += 40;
    else if (wordCount >= 1000) score += 30;
    else if (wordCount >= 500) score += 20;
    else if (wordCount >= 200) score += 10;

    // Section / heading count (up to 30 points)
    const headings = (content.body || content.text || '').match(/^#+\s|<h[1-6]/gm);
    const sectionCount = headings ? headings.length : 0;
    if (sectionCount >= 8) score += 30;
    else if (sectionCount >= 5) score += 20;
    else if (sectionCount >= 3) score += 10;

    // Examples & references (up to 30 points)
    const hasExamples = Array.isArray(content.examples) && content.examples.length > 0;
    const hasReferences = Array.isArray(content.references) && content.references.length > 0;
    if (hasExamples && hasReferences) score += 30;
    else if (hasExamples || hasReferences) score += 15;

    return Math.min(score, 100);
  }

  /**
   * Score screenshot quality (0-100).
   * Evaluates resolution, count, and format.
   */
  scoreScreenshotQuality(content) {
    let score = 0;
    const screenshots = content.screenshots || [];

    if (screenshots.length === 0) return 0;

    // Count contribution (up to 30 points)
    if (screenshots.length >= 10) score += 30;
    else if (screenshots.length >= 5) score += 20;
    else if (screenshots.length >= 2) score += 10;

    // Resolution / quality contribution (up to 40 points)
    const avgWidth = screenshots.reduce((sum, s) => sum + (s.width || 0), 0) / screenshots.length;
    if (avgWidth >= 1920) score += 40;
    else if (avgWidth >= 1280) score += 30;
    else if (avgWidth >= 800) score += 20;
    else if (avgWidth >= 400) score += 10;

    // Format – PNG/WebP preferred (up to 30 points)
    const hasHighQualityFormat = screenshots.some(
      (s) => /\.(png|webp|avif)$/i.test(s.path || s.url || '')
    );
    if (hasHighQualityFormat) score += 30;
    else score += 10; // JPG or other

    return Math.min(score, 100);
  }

  /**
   * Score formatting quality (0-100).
   * Evaluates structure, consistency, and readability markers.
   */
  scoreFormatting(content) {
    let score = 0;
    const body = content.body || content.text || '';

    // Has structured headings (up to 30 points)
    const hasHeadings = /^#+\s|<h[1-6]/m.test(body);
    if (hasHeadings) score += 30;

    // Has code blocks or formatted sections (up to 25 points)
    const hasCodeBlocks = /```|<pre>|<code>/m.test(body);
    if (hasCodeBlocks) score += 25;

    // Has lists (up to 20 points)
    const hasLists = /^[-*]\s|^\d+\.\s|<li>/m.test(body);
    if (hasLists) score += 20;

    // Consistent line breaks / paragraphs (up to 25 points)
    const paragraphs = body.split(/\n\n+/).filter((p) => p.trim().length > 0);
    if (paragraphs.length >= 5) score += 25;
    else if (paragraphs.length >= 3) score += 15;
    else if (paragraphs.length >= 1) score += 5;

    return Math.min(score, 100);
  }

  /**
   * Score originality (0-100).
   * Evaluates uniqueness markers and metadata signals.
   */
  scoreOriginality(content) {
    let score = 50; // Baseline – content starts at 50

    // Custom screenshots indicate original work (up to 20 points)
    const hasCustomScreenshots = Array.isArray(content.screenshots) && content.screenshots.length > 0;
    if (hasCustomScreenshots) score += 20;

    // Unique examples or case studies (up to 15 points)
    const hasUniqueExamples = Array.isArray(content.examples) && content.examples.length > 0;
    if (hasUniqueExamples) score += 15;

    // Metadata indicating manual review or customisation
    const metadata = content.metadata || {};
    if (metadata.manuallyReviewed) score += 10;
    if (metadata.customized) score += 5;

    // Penalty for very short content (likely boilerplate)
    const wordCount = (content.body || content.text || '').split(/\s+/).filter(Boolean).length;
    if (wordCount < 100) score -= 20;

    return Math.max(0, Math.min(score, 100));
  }

  /**
   * Score practical value (0-100).
   * Evaluates actionability, completeness, and target-audience alignment.
   */
  scoreValue(content) {
    let score = 0;

    // Has actionable steps or instructions (up to 30 points)
    const body = content.body || content.text || '';
    const hasActionableContent = /step\s*\d|^\d+[\.\)]\s|->|=>/mi.test(body);
    if (hasActionableContent) score += 30;

    // Has downloadable resources or files (up to 25 points)
    const hasResources = Array.isArray(content.files) && content.files.length > 0;
    if (hasResources) score += 25;

    // Target audience is defined (up to 20 points)
    const hasAudience = !!(content.targetAudience || (content.metadata && content.metadata.targetAudience));
    if (hasAudience) score += 20;

    // Has a clear summary or takeaway (up to 25 points)
    const hasSummary = !!(content.summary || content.takeaway || content.conclusion);
    if (hasSummary) score += 25;

    return Math.min(score, 100);
  }
}

module.exports = OrchestratorAgent;
