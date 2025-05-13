const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tanath2007@gmail.com",
      pass: "vuaz pakz vaim gomi"
    }
    
  });