// this will output the given text and some text imported from the other folder

var http = require('http');
var dt = require('./date');


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('The date and time are currently: '+dt.myDateTime());
    res.end('Hello World from Haila !!!');
}).listen(8080);