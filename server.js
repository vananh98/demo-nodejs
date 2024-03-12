const http = require('http');

const hostname = '127.0.0.1';
const port = 8001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const obj = {
        first_name: 'Main',
        last_name: 'Anh'
    }
    res.end(obj.first_name + ' ' + obj.last_name);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});