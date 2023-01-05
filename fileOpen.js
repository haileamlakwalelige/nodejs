// this will open a file and have a permission to write anything

var fs=require('fs');


fs.open('myfile.txt','w',function(err,file){
    if(err) throw err;
    console.log('Saved');
})