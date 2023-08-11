import { useState } from "react";

function Counter({ max }) {
  let [count, setCount] = useState(1);
  // Regla del estado: No mutar el estado directamente
  console.log("el comp se actualizó!");

  function handleAdd() {
    //setCount( count + 1);
    if (count === max) return;
    setCount((prevState) => prevState + 1);
  }

  function handleSubstract() {
    if (count === 1) return;
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <button disabled={count === 1} onClick={handleSubstract}>
        -
      </button>
      {count}
      <button disabled={count === max} onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default Counter;
