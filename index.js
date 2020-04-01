const app = require('./main');
const serverless = require('serverless-http');


module.exports.handler = serverless(app);