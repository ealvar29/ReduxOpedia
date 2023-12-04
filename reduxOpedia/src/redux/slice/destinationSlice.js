import { createSlice } from "@reduxjs/toolkit";
import { resetApp } from "../action/actions";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "last country in the world to be inhabited by hunans",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      console.log(action);
    },
    resetDestination: (state, action) => {
      state.destinationSelected = null;
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetApp, (state) => {
      state.destinationSelected = null;
    });
  },
});

export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
