import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // stateの更新関数を記述する。このreducerの作成により、action creatorも自動で作成される。
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // このpayloadはinputで受け取る値が変わるような場合に使用するもの
    },
  },
});

// action creatorをexportする
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
