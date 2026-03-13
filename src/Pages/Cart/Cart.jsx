import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);

        const handleCartUpdate = () => {
            const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(updatedCart);
        };

        window.addEventListener("cartUpdated", handleCartUpdate);

        return () =>
            window.removeEventListener("cartUpdated", handleCartUpdate);
    }, []);

    const handleRemove = (watchId) => {
        const updatedCart = cartItems.filter(
            (item) => item.watchId !== watchId
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const handleQuantityChange = (watchId, amount) => {
        const updatedCart = cartItems.map((item) =>
            item.watchId === watchId
                ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                : item
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const price =
            typeof item.price === "string"
                ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
                : Number(item.price);

        return total + price * item.quantity;
    }, 0);

    return (
        <div className="cart">
            <div className="cart__container">

                <h1>Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="empty">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart__items">

                            {cartItems.map((item) => (
                                <div key={item.watchId} className="cart__item">

                                    <img src={item.image} alt={item.title} />

                                    <div className="cart__details">

                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>

                                        <div className="quantity">

                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(item.watchId, -1)
                                                }
                                            >
                                                -
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(item.watchId, 1)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            className="remove"
                                            onClick={() => handleRemove(item.watchId)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="cart__summary">
                            <h2>Total: ${totalPrice.toLocaleString()}</h2>

                            <button
                                className="checkout"
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to Checkout
                            </button>

                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default Cart;