var http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Prueba del banco\n')

}).listen(1337, "localhost")

console.log('Server running at http://localhost:1337/')