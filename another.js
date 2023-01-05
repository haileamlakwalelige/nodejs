// this will print "Hello Kingo and please work for me!" text in the web browser

var http=require('http');

http.createServer(function(req,res){
    res.write('Hello Kingo and please work for me!');
    res.end();

}).listen(8080);




