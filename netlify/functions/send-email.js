// netlify/functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const { firstName, lastName, email, message, phone } = JSON.parse(event.body);
  const name = `${firstName} ${lastName}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "pranaliausarmal05@gmail.com",
      pass: "raey eftk chfj jkar"
    },
  });

  try {
    await transporter.verify();
    
    const mailOptions = {
      from: name,
      to: "pranaliausarmal511@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
