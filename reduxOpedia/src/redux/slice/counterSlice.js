import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, multiplyBy: 0 };

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
      console.log(action);
      state.count * action.payload;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, multiplier, decrementMultiplier } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
