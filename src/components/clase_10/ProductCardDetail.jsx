import { Link } from "react-router-dom";
import ButtonChilds from "../clase_03/UI/Button2";

function ProductCardDetail({ item, buy }) {
  // SI buy === true
  // * 1. Validar que el usuario inició sesión (context)
  // * 2. Si no inicié sesión, redirigir al login

  return (
    <article className="product-card" key={item.id}>
      <img width="250" src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <strong>Precio: ${item.price}</strong>
      {buy ? (
        <button>Agregar al carrito</button>
      ) : (
        <Link to="buy">
          <ButtonChilds>Comprar</ButtonChilds>
        </Link>
      )}
    </article>
  );
}

export default ProductCardDetail;
