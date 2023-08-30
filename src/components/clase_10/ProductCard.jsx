import { Link } from "react-router-dom";
import ButtonChilds from "../clase_03/UI/Button2";

function ProductCard({ item }) {
  return (
    <article className="product-card" key={item.id}>
      <img width="250" src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <strong>Precio: ${item.price}</strong>

      {/* wrapperea de Link */}
      <Link to={`/store/detail/${item.id}`}>
        <ButtonChilds>Ver detalles</ButtonChilds>
      </Link>
    </article>
  );
}

export default ProductCard;
