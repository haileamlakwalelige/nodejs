var fs=require('fs');
var rs=fs.createReadStream('./Haila.txt');
rs.on('open',function(){
    console.log("The file is open but i don't care");
});