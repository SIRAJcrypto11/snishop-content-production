const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const productsRouter = require('./api/routes/products');
const queueRouter = require('./api/routes/queue');
const agentsRouter = require('./api/routes/agents');
const analyticsRouter = require('./api/routes/analytics');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/queue', queueRouter);
app.use('/api/agents', agentsRouter);
app.use('/api/analytics', analyticsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start orchestrator daily planning on startup (optional)
if (process.env.AUTO_START_PLANNING === 'true') {
  const OrchestratorAgent = require('./agents/orchestrator/OrchestratorAgent');
  const orchestrator = new OrchestratorAgent();
  orchestrator.dailyPlanning().catch(console.error);
}

const server = app.listen(PORT, () => {
  console.log(`Content Production System running on port ${PORT}`);
});

module.exports = { app, server };
