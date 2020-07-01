const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listen 3000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.post("/send", (req, res) => {
  console.log(req.body);
  send(req.body);
});
async function send(data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b892ad9e900e33",
      pass: "dfc1e39d54600c",
    },
  });
  console.log("1");

  let info = await transporter.sendMail({
    from: '"Serge" <smtp.mailtrap.io>',
    to: "23sergey03@gmail.com",
    subject: "Телефоный номер с Сайта",
    text: data.tel,
  });
  console.log("2");
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
