/**
 * Request validation middleware factory.
 *
 * Usage:
 *   const { validate } = require('./validation');
 *   router.post('/', validate({ required: ['title', 'category'], types: { title: 'string' } }), handler);
 */

/**
 * Validate that required fields are present and (optionally) of the correct type.
 *
 * @param {object}   schema
 * @param {string[]} schema.required - Field names that must be present in req.body
 * @param {object}   [schema.types]  - Map of field name to expected JS type string
 * @returns {Function} Express middleware
 */
function validate(schema = {}) {
  return (req, res, next) => {
    const errors = [];
    const body = req.body || {};

    // Check required fields
    for (const field of schema.required || []) {
      if (body[field] === undefined || body[field] === null || body[field] === '') {
        errors.push(`Field "${field}" is required`);
      }
    }

    // Check types (only for fields that are present)
    for (const [field, expectedType] of Object.entries(schema.types || {})) {
      if (body[field] !== undefined && body[field] !== null && typeof body[field] !== expectedType) {
        errors.push(`Field "${field}" must be of type ${expectedType}`);
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors,
      });
    }

    next();
  };
}

module.exports = { validate };
