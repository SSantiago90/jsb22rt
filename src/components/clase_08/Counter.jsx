import useCounter from "../../hooks/useCounter";

function Counter() {
  const { count, handleAdd, handleSubstract, resetCounter } = useCounter();

  return (
    <div>
      <div>
        <button onClick={handleSubstract}>-</button>
        {count}
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
