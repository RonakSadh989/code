const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('/html/Blueprint/news api/news-home/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error reading file: ${err}`);
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

server.listen(80, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:80');
});

//terminal code : node "c:\html\Blueprint\live_server\script.js"