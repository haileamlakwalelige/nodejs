const IncomingForm = require('formidable');
var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'haileamlakwaleligne3910@gmail.com',
        pass:'0939100302'
    }
});

var mailOptions={
    from:'haileamlakwaleligne3910@gmail.com',
    to:'haileamlakwaleligne39@gmail.com',
    subject:'sending Email using Node.js',
    html:'<h1>Welcome </h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: '+info.response);
    }
});