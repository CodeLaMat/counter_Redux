import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    incrementByOne(state, action) {
      state.counter++;
    },
    decrement1ByOne(state, action) {
      state.counter--;
    },
    incrementByFive(state, action) {
      state.counter += action.payload;
    },
    decrement1ByFive(state, action) {
      state.counter -= action.payload;
    },
    reset(state, action) {
      return state.counter;
    },
  },
});

export const actions = counterSlice.actions;
const store = counterSlice({
  reducer: counterSlice.reducer,
});

export default store;
