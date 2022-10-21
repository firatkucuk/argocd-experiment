const http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('Hello World v12'); // Write a response to the client
  res.end(); // End the response
}).listen(8080); // Server listens on port 8080
