import { useReducer } from "react";
import { CountAction, STATE } from "../../types/counter";

const initiatState: STATE = {
  count: 0,
  value: 1
};

enum CountActionType {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  CHANGE_VALUE = "CHANGE_VALUE",
  RESET = "RESET"
}

const reducer = (state: STATE, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionType.INCREASE: {
      return {
        ...state,
        count: state.count + state.value
      };
    }
    case CountActionType.DECREASE: {
      return {
        ...state,
        count: state.count - state.value
      };
    }
    case CountActionType.CHANGE_VALUE: {
      return {
        ...state,
        value: payload
      };
    }
    case CountActionType.RESET: {
      return initiatState;
    }
    default:
      return state;
  }
};
export default function Counter3() {
  const [state, dispatch] = useReducer(reducer, initiatState);

  const inputHandler = (val: number) => {
    console.log(val);
    dispatch({
      type: CountActionType.CHANGE_VALUE,
      payload: +val
    });
  };
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
              dispatch({ type: CountActionType.DECREASE, payload: 1 })
            }
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch({ type: CountActionType.INCREASE, payload: 1 })
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
            onChange={(e) => inputHandler(+e.target.value)}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => dispatch({ type: CountActionType.RESET, payload: 1 })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
