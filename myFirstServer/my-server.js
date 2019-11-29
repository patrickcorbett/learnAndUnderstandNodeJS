// get the standard http module
var http = require('http');
// get the events module 
var EventEmitter = require('events');
// get the util module 
var util = require('util');
// get the util module 
var url = require('url');

// create a server
function Server() {
    EventEmitter.call(this),
    this.reqCount =0;
    this.port = 8080;
    this.start = function() {
        // add an event listener
        this.on('http-request', function(count) {
            console.log(`'${count}' HTTP requests have been handled!`);
        });

        this.on('started', function(count) {
            console.log(`Server started on ${this.port}`);
        });

        this.on('stopped', function(count) {
            console.log(`Server on ${this.port} stopped`);
        });

        this.server = http.createServer((req, res) => {

            console.log(`http request recieved:'${req.url}'`);

            res.writeHead(200, {'Content-Type': 'text/plain'});

            if (req.url == '/favicon.ico') {
                res.end();
                return;
            }

            var queryData = url.parse(req.url).query;
            if (!queryData) {
                res.write(`${++this.reqCount} HTTP requests have been handled!`);
                res.end();

                // fire event
                this.emit('http-request', this.reqCount);
            }

            if (queryData === 'stop') {
                this.stop();
            }

        }).listen(this.port);

        // fire event
        this.emit('started');
    }

    this.stop = function() {
        this.server.close();
        // fire event
        this.emit('stopped');
    }
}

util.inherits(Server, EventEmitter);

module.exports = Server;