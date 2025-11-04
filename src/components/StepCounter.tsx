import { useState } from "react";

export default function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col gap-3">
      {count}
      <div>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
      </div>
      <button
        onClick={() => {
          setCount((count) => count + step);
        }}
      >
        increment
      </button>
    </div>
  );
}
