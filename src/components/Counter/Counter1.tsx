import { useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(1);
  return (
    <div>
      <div>
        <p>{count}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "18px"
        }}
      >
        <div>
          <button onClick={() => setCount((count) => count - value)}>-</button>
        </div>
        <div>
          <button onClick={() => setCount((count) => count + value)}>+</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "18px",
          marginTop: "10px"
        }}
      >
        <div>
          <span>Increment/Decrement by</span>
        </div>
        <div>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => {
            setCount(0);
            setValue(1);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
