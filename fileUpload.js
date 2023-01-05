var formidable= require('formidable');
var http=require('http');
var fs=require('fs');


http.createServer(function(req,res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields,files){
            var oldpath=files.filetoupload.filepath;
            var newpath='D:/try/'+files.filetoupload.originalFilename;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('File Uploaded');
                res.end();
                
            });  

        });
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>')
        res.write('<input type="submit">');
        return res.end();
    }
}).listen(8080);

