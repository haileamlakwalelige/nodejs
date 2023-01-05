// this will write something we want to the file

var fs=require('fs');

fs.writeFile('myfile.txt','Hello content', function(err){
    if(err) throw err;
    console.log('Saved');
});