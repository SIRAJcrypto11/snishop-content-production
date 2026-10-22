#!/usr/bin/env node

/**
 * start-agents.js - Starts all agents and begins the daily planning loop.
 *
 * Initializes the orchestrator, content agents, design agents, marketing agents,
 * and distribution manager. Then starts the daily planning cycle.
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const logger = require('../src/utils/logger');
const OrchestratorAgent = require('../src/agents/orchestrator/OrchestratorAgent');
const AITechContentAgent = require('../src/agents/content/AITechContentAgent');
const BusinessContentAgent = require('../src/agents/content/BusinessContentAgent');
const SNISHOPContentAgent = require('../src/agents/content/SNISHOPContentAgent');
const PDFGenerator = require('../src/agents/design/PDFGenerator');
const ExcelGenerator = require('../src/agents/design/ExcelGenerator');
const MarketingAgent = require('../src/agents/marketing/MarketingAgent');
const DistributionManager = require('../src/distribution/DistributionManager');

async function startAgents() {
  logger.info('Starting all agents...');

  // Initialize all agents
  const agents = {
    orchestrator: new OrchestratorAgent(),
    aiTechContent: new AITechContentAgent(),
    businessContent: new BusinessContentAgent(),
    snishopContent: new SNISHOPContentAgent(),
    pdfGenerator: new PDFGenerator(),
    excelGenerator: new ExcelGenerator(),
    marketing: new MarketingAgent(),
    distribution: new DistributionManager(),
  };

  logger.info('All agents initialized', {
    agents: Object.keys(agents),
  });

  // Start daily planning
  logger.info('Starting daily planning cycle...');

  const planningInterval = parseInt(process.env.PLANNING_INTERVAL_MS, 10) || 3600000; // Default: 1 hour

  async function runPlanningCycle() {
    try {
      logger.info('Running planning cycle...');
      const assignments = await agents.orchestrator.dailyPlanning();
      logger.info(`Planning cycle complete. ${assignments.length} topics assigned.`);
    } catch (error) {
      logger.error('Planning cycle failed', { error: error.message });
    }
  }

  // Run immediately, then on interval
  await runPlanningCycle();
  setInterval(runPlanningCycle, planningInterval);

  logger.info(`Planning cycle scheduled every ${planningInterval / 1000} seconds`);
  logger.info('Agent system is running. Press Ctrl+C to stop.');

  // Graceful shutdown
  process.on('SIGINT', () => {
    logger.info('Shutting down agents...');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    logger.info('Shutting down agents...');
    process.exit(0);
  });
}

startAgents().catch((error) => {
  logger.error('Failed to start agents', { error: error.message });
  process.exit(1);
});
