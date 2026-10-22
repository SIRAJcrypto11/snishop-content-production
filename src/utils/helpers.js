const crypto = require('crypto');

/**
 * Format a number as Indonesian Rupiah (IDR).
 *
 * @param {number} amount
 * @returns {string} Formatted string, e.g. "Rp 1.500.000"
 */
function formatCurrency(amount) {
  if (amount == null || isNaN(amount)) return 'Rp 0';
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

/**
 * Convert arbitrary text into a URL-safe slug.
 *
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Generate a new UUID v4.
 *
 * @returns {string}
 */
function generateId() {
  return crypto.randomUUID();
}

/**
 * Return a promise that resolves after `ms` milliseconds.
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  formatCurrency,
  slugify,
  generateId,
  sleep,
};
