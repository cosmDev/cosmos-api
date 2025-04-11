var express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cosmosConfig = require('../cosmos.config.js');
var router = express.Router();

const exampleProxy = createProxyMiddleware({
    //target: 'https://rpc-cosmoshub.ecostake.com', // target host with the same base path
    changeOrigin: true, // needed for virtual hosted sites
    router: function (req) {
      // You can use req to determine the target host dynamically
      const chain = req.params.chain;
      // Find the chain configuration
      const chainConfig = cosmosConfig.find(c => c.slot === chain);
      if (chainConfig) {
          // If the chain is found, return the corresponding apiURL
          return chainConfig.apiURL;
      }
      // If the chain is not found, return a default URL or handle the error
      return chainConfig.apiURL;
    }
}); 

router.use('/:chain', exampleProxy )
module.exports = router;