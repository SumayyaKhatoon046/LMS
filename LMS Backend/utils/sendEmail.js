const nodemailer = require("nodemailer");

const sendEmail = async (options) => {

    const transporter = nodemailer.createTransport({

        service: "gmail",

        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }

    });

    const mailOptions = {

        from: process.env.EMAIL,

        to: options.email,

        subject: options.subject,

        text: options.message

    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully");
    console.log(info);

};

module.exports = sendEmail;