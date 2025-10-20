import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-80 h-80 mx-auto">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-amber-400 p-3 rounded-xs"
        >
          +
        </button>
        <p>{count}</p>
        </div>
    </>
  );
}

export default App;
