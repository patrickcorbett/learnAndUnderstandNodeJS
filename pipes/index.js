var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var readSourceStream = fs.createReadStream(__dirname + '/source.txt');
var writeDestinationStream = fs.createWriteStream(__dirname + '/destination.txt');
var compressedWriteStream = fs.createWriteStream(__dirname + '/compressed.txt.gz');

// read and pipe to copied file
readSourceStream.pipe(writeDestinationStream);

// compress and pipe to gz file
readSourceStream.pipe(gzip).pipe(compressedWriteStream);