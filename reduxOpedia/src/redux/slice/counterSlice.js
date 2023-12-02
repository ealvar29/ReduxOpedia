import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { increment, decrement, multiplier, decrementMultiplier } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
