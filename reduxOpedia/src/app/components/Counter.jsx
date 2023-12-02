import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiplier,
  decrementMultiplier,
} from "../../redux/slice/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);

  const [inputNum, setInputNum] = useState(10);
  const dispatch = useDispatch();
  return (
    <div className="mt-2 pt-3 pl-2 text-center">
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="flex flex-row justify-center align-baseline">
        <div className="p-4 justify-center">
          <div className=" p-4">
            <button
              className="rounded-2xl bg-blue-400 mr-4"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            <button
              className="rounded-2xl bg-red-400"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 justify-center">
          <input
            className="justify-center"
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}
          />
          <div className=" p-4">
            <button
              className="rounded-2xl bg-blue-400 mr-4"
              onClick={() => dispatch(multiplier(inputNum))}
            >
              Multiply
            </button>
            <button
              className="rounded-2xl bg-red-400"
              onClick={() => dispatch(decrementMultiplier(inputNum))}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
