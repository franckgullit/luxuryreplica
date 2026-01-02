import { useState, useEffect } from "react";
import "./Cart.scss";

function Cart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(stored);
    }, []);

    const removeItem = (index) => {
        const updated = cart.filter((_, i) => i !== index);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:4000/create-invoice",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ amount: total })
                }
            );

            const data = await response.json();

            if (data.invoice_url) {
                window.open(data.invoice_url, "_blank");
            } else {
                alert("Unable to create payment invoice.");
            }
        } catch (error) {
            alert("Payment error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!cart.length) {
        return (
            <section className="cart cart--empty">
                <h1>Your Cart</h1>
                <p>Your cart is empty.</p>
            </section>
        );
    }

    return (
        <section className="cart">
            <h1>Your Cart</h1>

            {cart.map((item, i) => (
                <div className="cart-item" key={i}>
                    <img src={item.image} alt={item.title} />

                    <div className="cart-item__info">
                        <h3>{item.title}</h3>
                        <p>{item.variantLabel}</p>
                        <p>Qty: {item.quantity}</p>
                        <p className="cart-item__price">
                            ${item.price * item.quantity}
                        </p>
                    </div>

                    <button
                        className="cart-item__remove"
                        onClick={() => removeItem(i)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className="cart-summary">
                <h2>Total: ${total}</h2>

                <button
                    className="cart-checkout"
                    onClick={handleCheckout}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Pay with Crypto"}
                </button>
            </div>
        </section>
    );
}

export default Cart;
