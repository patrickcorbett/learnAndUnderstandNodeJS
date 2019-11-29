var Server = require('./my-server');

var server = new Server();
server.start();
server.on('stopped', function(){
    console.log('Ending the node script');
    process.exit(0);
});
