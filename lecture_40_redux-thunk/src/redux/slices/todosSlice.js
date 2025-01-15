import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos');
  const todos = await response.json();
  return todos.todos;
})

// Новый асинхронный экшен для получения списка продуктов
export const fetchProducts = createAsyncThunk('todos/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const products = await response.json();
  return products.products; // Возвращаем список продуктов
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    products: [], // Новый стейт для продуктов
    filters: null,
    status: 'idle',
    error: ''
  },
  reducers: {
    addTodo: (state, action) => {
      const newId = state.todos.reduce( (acc, val) => { return acc.id > val.id ? acc.id : val.id}, 0 ) + 1;
      const newTodo = { id: newId, todo: action.payload };
      state.todos.push(newTodo);
    },
    dropTodo: (state, action) => {
      state.todos = state.todos.filter(el => el.id !== action.payload)
    },
    applyFilters: () => {},
    clearFilters: () => {}
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = 'idle'
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        console.log(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload
        console.log(state);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'idle'
      })
  }
});

export const { addTodo, dropTodo } = todosSlice.actions;
export default todosSlice.reducer;


// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (dummy, thunkApi) => {
//   const response = await fetch('https://dummyjson.com/todos');
//   const todos = await response.json();
//   todos.todos.forEach( (todo, idx) => {
//     if (idx % 2 !== 0) {
//       thunkApi.dispatch(addTodo(todo.todo))
//     }
//   });
// })

// Async action with arguments
// export const fetchTodoById = createAsyncThunk('todos/fetchTodoById', async (todoId) => {
//   const response = await fetch('https://dummyjson.com/todos/' + todoId);
//   const todoData = await response.json();
//   return todoData;
// });