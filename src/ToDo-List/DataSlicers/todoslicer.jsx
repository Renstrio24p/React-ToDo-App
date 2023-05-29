import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  // getting todo list
  const localTodoList = window.localStorage.getItem('todoList'); // todoList is a dataset key
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', []);
  return [];
};

const initVal = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initVal,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoArr = JSON.parse(todoList);
        todoArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoArr = JSON.parse(todoList);
        todoArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.Status = action.payload.Status;
            todo.Description = action.payload.Description;
            todo.Assign = action.payload.Assign;
            todo.Title = action.payload.Title;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoArr));
        state.todoList = [...todoArr];
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoArr = JSON.parse(todoList);
        todoArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoArr));
        state.todoList = todoArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;