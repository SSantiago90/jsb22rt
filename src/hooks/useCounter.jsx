import { useState } from "react";

function useCounter(max) {
  // estado -> 0
  // funcion que modifica el estado +1
  // funcion que modifica el estado -1
  // funcion para reiniciar el contador
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count === max) return;
    setCount((prevState) => prevState + 1);
  }

  function handleSubstract() {
    if (count === 1) return;
    setCount((prevState) => prevState - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return { resetCounter, handleAdd, handleSubstract, count };
}

export default useCounter;
