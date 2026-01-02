import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-invoice", async (req, res) => {
  const { amount } = req.body;

  try {
    const response = await fetch(
      "https://api.nowpayments.io/v1/invoice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NOWPAYMENTS_API_KEY
        },
        body: JSON.stringify({
          price_amount: amount,
          price_currency: "usd",
          pay_currency: "btc",
          order_description: "Watch purchase"
        })
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Payment failed" });
  }
});

app.listen(4000, () =>
  console.log("Server running on port 4000")
);
