import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  let refInterval = useRef(0);
  let refTimerNode = useRef(null);

  function handleStart() {
    refInterval.current = setInterval(() => {
      setTime((prevState) => {
        console.log(refTimerNode.current.children);
        console.log(prevState);
        return prevState + 1;
      });
    }, 1000);
  }

  function handleStop() {
    clearInterval(refInterval.current);
  }

  function handleReset() {
    setTime(0);
  }

  return (
    <section>
      <h1>Timer</h1>
      <div
        ref={refTimerNode}
        style={{ textAlign: "center", margin: "50px 10px" }}
      >
        <h3>segundos: {time}</h3>
        <button onClick={handleStart}>Iniciar</button>
        <button onClick={handleStop}>Detener</button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </section>
  );
}

export default Timer;
