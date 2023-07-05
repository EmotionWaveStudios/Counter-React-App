import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function decreaseCount() {
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount((count = 0));
  }

  return (
    <>
      <div>
        <button onClick={decreaseCount} className="border-4 p-3">
          Decrease
        </button>
        <span className=" p-3">{count}</span>
        <button onClick={increaseCount} className="border-4 p-3">
          Increase
        </button>
        <button onClick={resetCount} className="border-4 p-3">
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
