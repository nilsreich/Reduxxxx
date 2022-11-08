import { createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (draft) => {
      draft.count += 1;
    },
    decrease: (draft) => {
      draft.count -= 1;
    },
    random: (draft) => {
      draft.count = Math.random();
    },
  },
});

// Action creators are generated for each case reducer function
export const { increase, decrease, random } = counterSlice.actions;

export default counterSlice.reducer;
