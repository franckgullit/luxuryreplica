import { useEffect, useState } from "react";
import "./Checkout.scss";

function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("card");

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const totalPrice = cartItems.reduce((total, item) => {
        const price =
            typeof item.price === "string"
                ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
                : Number(item.price);

        return total + price * item.quantity;
    }, 0);

    const handleWhatsApp = () => {
        const items = cartItems
            .map((item) => `${item.quantity}x ${item.title}`)
            .join(", ");

        const message = encodeURIComponent(
            `Hello, I want to place an order.\n\nItems: ${items}\nTotal: $${totalPrice.toLocaleString()}`
        );

        const phone = "15852822451";

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">

                {/* LEFT SIDE */}
                <div className="checkout-left">
                    <h1>Checkout</h1>

                    <h2>Select Payment Method</h2>

                    <div className="payment-list">
                        <label className={`payment-option ${paymentMethod === "paypal" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === "paypal"}
                                onChange={() => setPaymentMethod("paypal")}
                            />
                            <div>
                                <h3>PayPal</h3>
                                <p>Checkout quickly using your PayPal account.</p>
                            </div>
                        </label>

                        <label className={`payment-option ${paymentMethod === "bank" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === "bank"}
                                onChange={() => setPaymentMethod("bank")}
                            />
                            <div>
                                <h3>Bank Transfer</h3>
                                <p>Contact us directly to complete your order.</p>
                            </div>
                        </label>

                        <label className={`payment-option ${paymentMethod === "crypto" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === "crypto"}
                                onChange={() => setPaymentMethod("crypto")}
                            />
                            <div>
                                <h3>Pay With Crypto</h3>
                                <p>Checkout quickly using your PayPal account.</p>
                            </div>
                        </label>

                    </div>

                    {paymentMethod === "paypal" && (
                        <>
                            <div className="bank-details">
                                <h3>Contact us to complete your payment with PayPal</h3>

                                <p>
                                    Please contact customer support to finalize your order with PayPal.
                                </p>

                                <div className="contact-buttons">
                                    <button className="whatsapp-btn" onClick={handleWhatsApp}>
                                        Contact us on WhatsApp
                                    </button>

                                    <button
                                        className="email-btn"
                                        onClick={() => window.location = `mailto:sales@watchexpressions.com?subject=Bank Transfer Order&body=Hello,%0A%0AI want to complete my order via PayPal.%0A%0AItems: ${cartItems.map(item => `${item.quantity}x ${item.title}`).join(", ")}%0ATotal: $${totalPrice.toLocaleString()}%0A%0AThank you.`}
                                    >
                                        Contact us via Email
                                    </button>
                                </div>
                            </div></>

                    )}

                    {paymentMethod === "bank" && (
                        <div className="bank-details">
                            <h3>Contact us to complete payment</h3>

                            <p>
                                Our bank transfer system is currently being updated.
                                Please contact customer support to finalize your order.
                            </p>

                            <div className="contact-buttons">
                                <button className="whatsapp-btn" onClick={handleWhatsApp}>
                                    Contact us on WhatsApp
                                </button>

                                <button
                                    className="email-btn"
                                    onClick={() => window.location = `mailto:sales@watchexpressions.com?subject=Bank Transfer Order&body=Hello,%0A%0AI want to complete my order via bank transfer.%0A%0AItems: ${cartItems.map(item => `${item.quantity}x ${item.title}`).join(", ")}%0ATotal: $${totalPrice.toLocaleString()}%0A%0AThank you.`}
                                >
                                    Contact us via Email
                                </button>
                            </div>

                        </div>
                    )}

                    {paymentMethod === "crypto" && (
                        <div className="bank-details">
                            <h3>Pay With Crypto</h3>

                            <p>
                                Prefer to pay with cryptocurrency? Contact us to complete your payment securely using one of our supported crypto options.
                            </p>

                            <div className="contact-buttons">
                                <button className="whatsapp-btn" onClick={handleWhatsApp}>
                                    Contact us on WhatsApp
                                </button>

                                <button
                                    className="email-btn"
                                    onClick={() => window.location = `mailto:sales@watchexpressions.com?subject=Bank Transfer Order&body=Hello,%0A%0AI want to complete my order via Cryptocurrency.%0A%0AItems: ${cartItems.map(item => `${item.quantity}x ${item.title}`).join(", ")}%0ATotal: $${totalPrice.toLocaleString()}%0A%0AThank you.`}
                                >
                                    Contact us via Email
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT SIDE */}
                <div className="checkout-right">
                    <h2>Your Order</h2>

                    {cartItems.map((item) => (
                        <div key={item.watchId} className="summary-item">

                            <img src={item.image} alt={item.title} />

                            <div>
                                <p>{item.title}</p>
                                <span>
                                    {item.quantity} × ${Number(item.price).toLocaleString()}
                                </span>
                            </div>

                        </div>
                    ))}

                    <div className="total">
                        <h3>Total</h3>
                        <h3>${totalPrice.toLocaleString()}</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Checkout;
