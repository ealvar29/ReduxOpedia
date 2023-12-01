import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";
function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  return (
    <div className="mt-2 pt-3 pl-2 text-center">
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="flex flex-row justify-center align-baseline">
        <div className="p-4 justify-center">
          <div className="border p-4">
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
      </div>
    </div>
  );
}

export default Counter;
