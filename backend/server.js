import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-invoice", async (req, res) => {
  const amount = Number(req.body.amount);
  const description = req.body.description || "Watch purchase";

  try {
    const response = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAYMENTS_API_KEY
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: "usd",
        order_description: description,
        success_url: "https://watchexpressions.com/cart",
        cancel_url: "https://watchexpressions.com/cart"
      })
    });

    const data = await response.json();

    if (!data.invoice_url) {
      console.error("NOWPayments error:", data);
      return res.status(400).json(data);
    }

    res.json({ invoice_url: data.invoice_url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Invoice creation failed" });
  }
});

app.listen(4000, () =>
  console.log("Backend running on http://localhost:4000")
);


