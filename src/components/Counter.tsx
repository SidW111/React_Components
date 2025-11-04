import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <div className="">
        <p className="flex justify-center px-2 py-2 ">{count}</p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-4 py-1 border border- border-black rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="px-4 py-1 border border-1 border-black rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="px-4 py-1 border border-1 border-black rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
