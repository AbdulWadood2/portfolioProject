import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(".env");

const applicationProgramInterface = {
  sendMail: async (req, res) => {
    try {
      const { subject, message } = req.body;

      // cheack authentication 😉
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.myEmail,
          pass: process.env.emailPassword,
        },
      });

      // send user message to website owner 😀
      const mailOptions = {
        from: subject,
        to: process.env.myEmail, // Replace with the recipient's email address
        subject: `Client :${subject}`,
        text: message,
      };

      // Send the email
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(StatusCodes.BAD_REQUEST).json({ error });
        } else {
          res
            .status(StatusCodes.ACCEPTED)
            .json({ message: "thanks you for contacting me" });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.BAD_REQUEST).json({
        error,
      });
    }
  },
};

export default applicationProgramInterface;
