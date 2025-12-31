import React, { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    q: "Can you send me more pictures of the desired model?",
    a: "Yes. Please contact our customer support and provide the model name. We will gladly share additional photos and details."
  },
  {
    q: "My order was rejected. Do I need to place a new order?",
    a: "In most cases yes. Please reach out to our support team to confirm the reason before placing a new order."
  },
  {
    q: "What payment methods do you accept?",
    a: "We currently accept PayPal, Cryptocurrency, Bank Transfer, and Zelle. After placing your order, our team will provide clear instructions for completing your selected payment method."
  },
  {
    q: "How can I cancel or change my order?",
    a: "Orders can be modified or canceled before shipment. Contact customer service as soon as possible."
  },
  {
    q: "Where can I look for information on the order I placed?",
    a: "Order updates are sent via email. You can also contact us directly for real-time updates."
  },
  {
    q: "Is your website safe?",
    a: "Yes. Our website uses secure encryption and trusted payment providers to protect your information."
  },
  {
    q: "Do you guarantee my privacy?",
    a: "Absolutely. We never share or sell customer data. Your privacy is fully protected."
  },
  {
    q: "What should I do if my credit card payment is incorrect?",
    a: "Please contact your card provider and notify our support team to assist you with alternative payment options."
  },
  {
    q: "How long does it take for the parcel to arrive?",
    a: "Delivery usually takes between 7–14 business days depending on your location."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h1 className="faq__title">FAQ</h1>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq__item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq__question">
              {item.q}
              <span className="faq__icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq__answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
