import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetApp } from "../action/actions";

const initialState = { count: 10, multiplyBy: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiplier: (state, action) => {
      state.count = state.count * Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count = state.count * Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 0;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetApp, (state) => {
      state.count = 10;
    });
  },
});

export const { increment, decrement, multiplier, decrementMultiplier } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
