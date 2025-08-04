import { createSlice } from "@reduxjs/toolkit";
import { pomodoroTimers } from "../data/data";

const timerSlice = createSlice({
  name: "timer",
  initialState: pomodoroTimers,
  reducers: {
    addTime: (state, action) => {
      return action.payload;
    },
    setRounds: (state, action) => {
      return { ...state, round: action.payload };
    },
  },
});

export default timerSlice;
export const timerAction = timerSlice.actions;
