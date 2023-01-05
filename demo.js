// just write anything after localhost:8080/    then it will print it the web

var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end();

}).listen(8080);
