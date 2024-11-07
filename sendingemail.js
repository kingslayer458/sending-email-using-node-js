var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mk458557@gmail.com',
    pass: 'ylyb cuyt cqvd zfst'
  }
});

var mailOptions = {
  from: 'mk458557@gmail.com',
  to: 'ktk458557@gmail.com, manojk82580@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy mothafuckaa!'
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});