import { Link } from "react-router-dom";
import "./Cards.scss";

function Cards({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <div className="product-card__image">
        {product.badges?.includes("Sale") && (
          <span className="product-card__badge">Sale</span>
        )}
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <h3 className="product-card__title">{product.title}</h3>

      <p className="product-card__price">
        ${product.priceRange.min} – ${product.priceRange.max}
      </p>
    </Link>
  );
}

export default Cards;
