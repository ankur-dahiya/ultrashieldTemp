const nodemailer = require("nodemailer");

const sendmail = async (req,res,next)=>{
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "dexter.krajcik21@ethereal.email", // generated ethereal user
          pass: "wC2NKty6E4w3NpGyDg", // generated ethereal password
        },
      });
    let info = await transporter.sendMail({
        from : "<ankur@ankur.com>",
        to : "dahiya@dahiya.com",
        subject : "test",
        text : "oiiii",
        html : "<h1>this is heading1</h1>"
    })

    console.log("Message sent with id : "+info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    next();
}



module.exports = sendmail;