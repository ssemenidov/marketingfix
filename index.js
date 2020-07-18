const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.post("/send", (req, res) => {
  console.log(req.body);
  send(req.body);
});
async function send(data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    auth: {
      user: "ivanov.aleskey@bk.ru",
      pass: "FuY9#D6f&",
    },
  });
  let info = await transporter.sendMail({
    from: '"Machine" <ivanov.aleskey@bk.ru>',
    to: "zippy-studio@mail.ru",
    subject: "Активность на сайте",
    text: "Номер телефона: " + data.tel,
  });
}

// main().catch(console.error);
