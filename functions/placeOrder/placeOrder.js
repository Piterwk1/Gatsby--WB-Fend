const nodemailer = require(`nodemailer`);

// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: 587,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'mollie61@ethereal.email',
    pass: 'dT25su6j8bWRZMtM8t',
  },
});

exports.handler = async (event, context) => {
  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: 'order@example.com',
    subject: 'New order',
    html: '<p>Your new pizza order is here!</p>',
  });
  console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
