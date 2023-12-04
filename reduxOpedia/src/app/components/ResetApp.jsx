import React from "react";
import { useDispatch } from "react-redux";
import { resetApp } from "../../redux/action/actions";

function ResetApp() {
  const dispatch = useDispatch();
  const resetFunctions = () => {
    dispatch(resetApp());
  };
  return (
    <div className="text-center">
      <button
        className="rounded-2xl bg-orange-500"
        onClick={() => resetFunctions()}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
