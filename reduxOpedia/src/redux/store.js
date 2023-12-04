import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";
import {
  increment,
  decrement,
  multiplier,
  decrementMultiplier,
} from "./slice/counterSlice";

import { destinationClicked, resetDestination } from "./slice/destinationSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

export {
  increment,
  decrement,
  multiplier,
  decrementMultiplier,
  destinationClicked,
  resetDestination,
};
