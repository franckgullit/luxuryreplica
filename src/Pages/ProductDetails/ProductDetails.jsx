import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../Data/productDetails.json";
import "./ProductDetails.scss";

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [activeImage, setActiveImage] = useState(
    product?.images?.[0] || product?.thumbnail
  );

  if (!product) {
    return <p style={{ padding: "40px" }}>Product not found.</p>;
  }

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a movement option");
      return;
    }

    const variant = product.variants.find(
      v => v.id === selectedVariant
    );

    const cartItem = {
      productId: product.id,
      title: product.title,
      variantId: variant.id,
      variantLabel: variant.label,
      price: variant.price,
      quantity,
      image: product.thumbnail
    };

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingCart.findIndex(
      item =>
        item.productId === cartItem.productId &&
        item.variantId === cartItem.variantId
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to cart ✔");
  };

  return (
    <section className="product">
      <div className="product__container">
        {/* Gallery */}
        <div className="product__gallery">
          <img
            src={activeImage}
            alt={product.title}
            className="product__main-image"
          />

          <div className="product__thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={img === activeImage ? "active" : ""}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product__info">
          <h1>{product.title}</h1>

          <p className="product__price">
            ${product.priceRange.min} – ${product.priceRange.max}
          </p>

          <label>MOVEMENT</label>
          <select
            value={selectedVariant}
            onChange={e => setSelectedVariant(e.target.value)}
          >
            <option value="">Choose an option</option>
            {product.variants.map(v => (
              <option key={v.id} value={v.id}>
                {v.label} – ${v.price}
              </option>
            ))}
          </select>

          {/* Quantity */}
          <div className="product__qty">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          {/* Add to Cart */}
          <button
            className="product__cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="product__description">
        {product.description.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      {/* Comparison */}
      {product.comparison && (
        <div className="product__comparison">
          <table>
            <thead>
              <tr>
                <th></th>
                {product.comparison.columns.map(col => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {product.comparison.rows.map(row => (
                <tr key={row.label}>
                  <td className="label">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
