"use strict";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "871c4ccfd23d62",
      pass: "6dde7c7b05446b"
    }
  });

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transport.sendMail({
    from: 'rizwandnp266@gmail.com', // sender address
    to: "rizwandnp266@gmail.com", // list of receivers
    
    subject: "Hy ia am finally here", // Subject line
    text: "Hello world", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);


export default main;