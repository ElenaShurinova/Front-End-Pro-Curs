import { createSlice } from '@reduxjs/toolkit';

// Создание слайса для работы с задачами
export const todosSlice = createSlice({
  name: 'todos',  // Префикс для типов экшенов
  initialState: {
    todos: [],  // Пустой массив дел по умолчанию
    filter: null,   // Фильтр: null - все задачи (или другое значение, в зависимости от логики)
  
  },
  reducers: {
    // Экшен для добавления нового дела
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

   

    // Экшен для изменения статуса дела (например, пометить как завершённое)
    dropTodo: (state, action) => {
      state.todos  = state.todos.filter(el => el !== action.payload);
     
    },
     // Экшен для фильтрации списка дел
     setFilter: (state, action) => {
      state.filter = action.payload;  // Установка фильтра (0 - все задачи, 1 - активные, 2 - завершённые)
    },

    
  },
});

// Экспорт экшенов для использования в компонентах
export const { addTodo,dropTodo } = todosSlice.actions;

// Экспорт редьюсера для подключения в хранилище
export default todosSlice.reducer;