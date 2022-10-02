const http = require('http');
const { exec } = require('child_process');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    exec('sh odrive4kindle', (err, stdout, stderr) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        res.end(`
        STDOUT:
        ${stdout}
        
        STDERR:
        ${stderr}

        ERROR:
        ${err}
        `);
    });  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});