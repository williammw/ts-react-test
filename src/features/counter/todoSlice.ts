import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface TodoSlice {
  value: number;
}

const initialState: TodoSlice = {
  value: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {   
    addATodo: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addATodo } = todoSlice.actions;


export const selectTodos = (state: RootState) => state.counter.value;

export default todoSlice.reducer;
