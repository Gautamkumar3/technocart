// const nodemailer = require("nodemailer");
// require("dotenv").config();

// console.log(process.env.EMAIL);

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: `${process.env.EMAIL}`,
//     password: `${process.env.PASSWORD}`,
//   },
// });
// let response = await transport.sendMail({
//   from: `${process.env.EMAIL}`,
//   to: email,
//   subject: "OTP",
//   text: `Hello ${email}, this is your OTP : ${otp}`,
// });

// const sendEmail = async (email, otp) => {
//   // console.log(email,otp)
//   const details = {
//     from: `${process.env.EMAIL}`,
//     to: email,
//     subject: "OTP",
//     text: `Hello ${email}, this is your OTP : ${otp}`,
//   };

//   transport.sendMail(details, (err, info) => {
//     console.log(details);
//     console.log(info);
//     if (err) console.log("It has an error");
//     else console.log("Email has been sent");
//   });
// module.exports = response;
