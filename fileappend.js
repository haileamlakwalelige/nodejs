//this will append the specified file into the file already existed 
// if there is no file exit it will create by it self

var fs=require('fs');

fs.appendFile('kingo.txt','Hello content!',function(err){
    if(err)throw err;
    console.log('Saved!');
});
