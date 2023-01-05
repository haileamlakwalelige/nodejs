var fs=require('fs');

fs.appendFile('kingo.txt','Hello content!',function(err){
    if(err)throw err;
    console.log('Saved!');
});
