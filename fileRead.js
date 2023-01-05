// this will read a file from the folder

var fs=require('fs');

fs.readFile('Haila.txt',function(err){
     if(err) throw err;
     console.log('Read File');
})