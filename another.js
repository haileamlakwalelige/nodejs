var http=require('http');

http.createServer(function(req,res){
    res.write('Hello Kingo');
    res.end();

}).listen(8080);