import { createContext, useState } from "react";

// 1. Crear un Context para administrar el carro de compras
const cartContext = createContext([]);

// 2. Crear un Provider para el Context
export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  // 3. Crear la funcionalidad para trabajar con el Context dentro del Provider
  function addProduct(newProduct) {
    // A) Shallow Copy -> const newCart = [...cart];
    // A-2) Shallow Copy -> const newCart = cart.map( item => item)

    // B) Deep copy - JSON.stringify
    //const newState = JSON.parse(JSON.stringify(cart));

    // C) Structured Clone
    const newState = structuredClone(cart);

    const isInCart = newState.some((item) => item.id === newProduct.id);
    if (isInCart) {
      const index = newState.findIndex((item) => item.id === newProduct.id);
      newState[index].quantity += 1;
    } else {
      newProduct.quantity = 0;
      newState.push(newProduct);
    }
    setCart(newState);
  }

  function countItems() {
    //  const count = cart.length;
    //const count = cart.reduce((count, item) => count + item.quantity, 0);
    /* for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
      count += cart[i].quantity;
    } */

    let count = 0;
    cart.forEach((item) => (count += item.quantity));
    return count;
  }

  function removeProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{ cart, addProduct, countItems, removeProduct, clearCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;

// 4. Desde CardDetail agregar un producto al carrito
