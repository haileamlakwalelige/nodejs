//this will rename the file name specified 

var fs=require('fs');

fs.rename('kingo.txt','Haila.txt',function(err){
    if(err) throw err;
    console.log('File Renamed!');
});