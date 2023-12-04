import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../../redux/slice/destinationSlice";

function ResetApp() {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <button
        className="rounded-2xl bg-orange-500"
        onClick={() => dispatch(resetDestination())}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
