var http = require('http');

const port = process.env.PORT || 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis and Heroku DEMO!\n');
}).listen(port, '0.0.0.0');

console.log(`Server running at http://0.0.0.0:${port}/`);
