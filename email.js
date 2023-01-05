var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    server:'gmail',
    auth:{
    user:'haileamlakwaleligne3910@gmail.com',
    pass:'0939100302'
    }
});

var mailOptions={
    from:'haileamlakwaleligne3910@gmail.com',
    to:'haileamlakwaleligne39@gmail.com',
    subject:'Send email using Node.js',
    text:'Hello there is Haileamlak Waleligne'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: "+info.response);
        
    }
});