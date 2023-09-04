import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import sessionContext from "../../context/sessionContext";

function CartContainer() {
  const { cart, removeProduct, clearCart } = useContext(cartContext);
  const { getAuthToken } = useContext(sessionContext);

  async function handleSubmit() {
    const buyOrderData = {
      items: cart,
      date: new Date(),
    };

    const body = JSON.stringify(buyOrderData);

    const response = await fetch("http://localhost:3001/api/data", {
      method: "POST",
      mode: "cors",
      body: body,
      headers: {
        Authorization: "Bearer " + getAuthToken(),
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito vacío</h1>
        <Link to="/store">Ir al store</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Tu carro de compras</h1>
      {cart.map((item) => (
        <div
          style={{
            border: "solid 1px pink",
            margin: "20px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          key={item.id}
        >
          <h2>{item.title}</h2>
          <button onClick={() => removeProduct(item.id)}>X</button>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          textAlign: "center",
          margin: "10px auto",
        }}
      >
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={handleSubmit}>Confirmar Compra</button>
      </div>
    </div>
  );
}

export default CartContainer;
