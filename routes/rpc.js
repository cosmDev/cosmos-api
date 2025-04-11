const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cosmosConfig = require('../cosmos.config.js');
const router = express.Router();

const cosmosProxy = createProxyMiddleware({
    changeOrigin: true, // needed for virtual hosted sites
    router: function (req) {
      const chain = req.params.chain;
      // Find the chain configuration
      const chainConfig = cosmosConfig.find(c => c.slot === chain);
      if (chainConfig) {
          return chainConfig.rpcURL;
      }
    }
}); 

router.use('/:chain', cosmosProxy);
module.exports = router;