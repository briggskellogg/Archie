const express = require('express');
const lettaService = require('../services/lettaService');
const router = express.Router();

/**
 * GET /api/agents
 * Get list of all available agents
 */
router.get('/agents', async (req, res) => {
  try {
    const agents = await lettaService.listAgents();
    res.json({
      success: true,
      data: agents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * POST /api/agents/:id/configure
 * Configure specific agent settings
 */
router.post('/agents/:id/configure', async (req, res) => {
  try {
    const { id } = req.params;
    const config = req.body;
    
    const agent = await lettaService.configureAgent(id, config);
    res.json({
      success: true,
      data: agent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * POST /api/chat/message
 * Send message to one or more agents
 */
router.post('/chat/message', async (req, res) => {
  try {
    const { message, agentIds, context } = req.body;
    
    if (!message || !agentIds || !Array.isArray(agentIds)) {
      return res.status(400).json({
        success: false,
        error: 'Message and agentIds array are required'
      });
    }

    let result;
    if (agentIds.length === 1) {
      result = await lettaService.sendMessage(agentIds[0], message, context);
    } else {
      result = await lettaService.sendToMultipleAgents(agentIds, message, context);
    }

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * GET /api/health
 * Check Letta server health
 */
router.get('/health', async (req, res) => {
  try {
    const health = await lettaService.healthCheck();
    res.json({
      success: true,
      data: health
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * POST /api/chat/session
 * Start a new chat session
 */
router.post('/chat/session', async (req, res) => {
  try {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    res.json({
      success: true,
      data: {
        sessionId,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
