import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface Todo{
  title:string,
  isDone:boolean,
}

interface TodoSlice {
  todos:Array<Todo>;
}

const initialState: TodoSlice = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {   
    addATodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addATodo } = todoSlice.actions;


export const selectTodos = (state: RootState) => state.counter.value;

export default todoSlice.reducer;
