// this will delete the specified file

var fs=require('fs');

fs.unlink('myfile.txt',function(err){
    if(err) throw err;
    console.log('File Deleted!');
});