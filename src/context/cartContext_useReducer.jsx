import { useReducer } from "react";
import { createContext, useState } from "react";

// 1. Crear un Context para administrar el carro de compras
const cartContext = createContext([]);

/* 
ADD_ITEM
REMOVE_ITEM
CLEAR_CART */

/* function addProduct(newProduct) {
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
} */

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newState = structuredClone(state);
      const newProduct = structuredClone(action.payload);
      const isInCart = newState.some((item) => item.id === newProduct.id);

      if (isInCart) {
        const index = newState.findIndex((item) => item.id === newProduct.id);
        newState[index].quantity += 1;
        return newState;
      } else {
        newProduct.quantity = 0;
        newState.push(newProduct);
        return newState;
      }
    }
    case "REMOVE_ITEM": {
      break;
    }
    case "CLEAR_CART": {
      break;
    }
  }
}

export function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  console.log(state);
  const [cart, setCart] = useState([]);

  function addProduct(newProduct) {
    dispatch({ type: "ADD_ITEM", payload: newProduct });
  }

  function countItems() {
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
