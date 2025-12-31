import Cards from "../../Components/Cards/Cards.jsx";
import products from "../../Data/Products.json";
import "./Shop.scss";

 function Shop() {
  return (
    <section className="shop">
      <h1>Shop</h1>

      <div className="shop__grid">
        {products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
