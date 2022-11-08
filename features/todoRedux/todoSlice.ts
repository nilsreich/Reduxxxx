import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TodoState = [
  {
    value: string;
    id: number;
    done: boolean;
  }
];

const initialState: TodoState = [
  {
    value: 'Sachen machen',
    id: Math.random(),
    done: false,
  },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (draft, action: PayloadAction<string>) => {
      draft.push({ id: Math.random(), done: false, value: action.payload });
    },
    removeItem: (draft, action: PayloadAction<number>) => {
      const index = draft.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) draft.splice(index, 1);
    },
    toggleItem: (draft, action: PayloadAction<number>) => {
      const index = draft.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) draft[index].done = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, toggleItem } = todoSlice.actions;

export default todoSlice.reducer;
