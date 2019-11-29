var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {

    console.log(`http request recieved:'${req.url}'`);
    
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // read and pipe to the response
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});

        var obj = {
            firstname : 'John',
            lastname : 'Doe'
        }

        res.end(JSON.stringify(obj));

    }
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080);
