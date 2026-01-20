import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// EMAIL FUNCTION
async function sendEmail(payment) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Watch Expressions" <sales@watchexpressions.com>`,
    to: "sales@watchexpressions.com",
    subject: "💰 New Crypto Payment Received",
    text: `
A new crypto payment has been completed.

Order ID: ${payment.order_id}
Amount: ${payment.price_amount} ${payment.price_currency}
Crypto Paid: ${payment.pay_amount} ${payment.pay_currency}
Status: ${payment.payment_status}
    `,
  });
}

// CREATE INVOICE
app.post("/create-invoice", async (req, res) => {
  const amount = Number(req.body.amount);
  const description = req.body.description || "Watch purchase";

  try {
    const response = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAYMENTS_API_KEY,
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: "usd",
        order_description: description,
        success_url: "https://luxuryreplica.onrender.com/cart",
        cancel_url: "https://luxuryreplica.onrender.com/cart",
      }),
    });

    const data = await response.json();

    if (!data.invoice_url) {
      return res.status(400).json(data);
    }

    res.json({ invoice_url: data.invoice_url });
  } catch {
    res.status(500).json({ error: "Invoice creation failed" });
  }
});

// NOWPAYMENTS IPN
app.post("/nowpayments/ipn", async (req, res) => {
  try {
    const signature = req.headers["x-nowpayments-sig"];
    const payload = JSON.stringify(req.body);

    const expected = crypto
      .createHmac("sha512", process.env.NOWPAYMENTS_IPN_SECRET)
      .update(payload)
      .digest("hex");

    if (signature !== expected) {
      return res.status(401).send("Invalid signature");
    }

    if (req.body.payment_status === "finished") {
      await sendEmail(req.body);
    }

    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.listen(4000, () =>
  console.log("Backend running on http://localhost:4000")
);
