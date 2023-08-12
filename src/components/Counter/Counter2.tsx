import { useState } from "react";

type STATE = {
  count: number;
  value: number;
};
export default function Counter2() {
  const [state, setState] = useState<STATE>({ count: 0, value: 1 });
  return (
    <div>
      <div>
        <p>{state.count}</p>
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
          <button
            onClick={() =>
              setState((curr) => {
                return { ...curr, count: curr.count - curr.value };
              })
            }
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              setState((curr) => {
                return { ...curr, count: curr.count + curr.value };
              })
            }
          >
            +
          </button>
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
            value={state.value}
            onChange={(e) =>
              setState((curr) => {
                return { ...curr, value: +e.target.value };
              })
            }
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => {
            setState({
              count: 0,
              value: 1
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
