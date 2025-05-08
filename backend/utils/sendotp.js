const nodemailer = require('nodemailer');

exports.sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: '"Event App" <no-reply@eventapp.com>',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  });
};
