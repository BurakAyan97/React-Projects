import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>sayı = {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        Arttır
      </button>
      <button onClick={() => numberContext.dispatch("decrement")}>
        Azaltma
      </button>
      <button onClick={() => numberContext.dispatch("reset")}>Sıfırla</button>
    </>
  );
}

export default Calculate;
