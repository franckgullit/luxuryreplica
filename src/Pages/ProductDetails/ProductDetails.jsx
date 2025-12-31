import { useParams } from "react-router-dom";
import products from "../../Data/productDetails.json";
import { useState } from "react";
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

  const selectedPrice =
    product.variants.find(v => v.id === selectedVariant)?.price ||
    product.priceRange.min;

  return (
    <section className="product">
      <div className="product__container">

        {/* Gallery */}
        <div className="product__gallery">
          <img src={activeImage} alt={product.title} className="product__main-image" />

          <div className="product__thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={img === activeImage ? "active" : ""}
                alt=""
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

          <label>Movement</label>
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
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          {/* Snipcart Button */}
          <button
            className="product__cart snipcart-add-item"
            disabled={!selectedVariant}
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={selectedPrice}
            data-item-url={`/product/${product.slug}`}
            data-item-image={product.thumbnail}
            data-item-description={product.description?.[0]?.content}
            data-item-quantity={quantity}
            data-item-custom1-name="Movement"
            data-item-custom1-value={
              product.variants.find(v => v.id === selectedVariant)?.label
            }
          >
            Add to cart
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

      {/* Comparison Table */}
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
