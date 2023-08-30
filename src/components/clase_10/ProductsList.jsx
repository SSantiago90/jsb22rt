import ProductCard from "./ProductCard";
import "./store.css";

function ProductsList(props) {
  return (
    <section className="products-list">
      <h1>Nuestra Tienda</h1>
      <div className="products-list__list">
        {props.products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
