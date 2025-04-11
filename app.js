const express = require('express')
var cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const path = require('path');
const port = 3000


var homeRouter = require('./routes/home')
var rpcRouter = require('./routes/rpc')
var lcdRouter = require('./routes/lcd')

app.use(cors())

app.use('/', homeRouter);
app.use('/rpc', rpcRouter);
app.use('/lcd', lcdRouter);

// Define a route to serve the HTML file
app.get('/test', (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
