import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <p>{contador}</p>
      <button onClick={() => setContador(contador - 1)}>
        Click here to decrease
      </button>
    </>
  );
}

export default App;
