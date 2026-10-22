/**
 * Simple API key authentication middleware.
 *
 * Checks the `x-api-key` header against the `API_KEY` environment variable.
 * Returns 401 if the key is missing or invalid.
 *
 * When API_KEY is not set the middleware is a no-op (development convenience).
 */
function authMiddleware(req, res, next) {
  const configuredKey = process.env.API_KEY;

  // If no API_KEY is configured, skip authentication (development mode)
  if (!configuredKey) {
    return next();
  }

  const providedKey = req.headers['x-api-key'];

  if (!providedKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Missing x-api-key header',
    });
  }

  if (providedKey !== configuredKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid API key',
    });
  }

  next();
}

module.exports = authMiddleware;
