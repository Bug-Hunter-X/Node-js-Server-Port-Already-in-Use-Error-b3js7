const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This code will cause an error if the port 3000 is already in use.