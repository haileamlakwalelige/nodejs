// this will print "Hello again"  in the web browser

var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text.html'});
    res.write("Hello again");
    res.end();
}).listen(8080);