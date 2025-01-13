import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { todoReducer } from './reducers/todoReducer';
import { themeReducer } from './reducers/themeReducer';


export const store = createStore(
  combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    theme:themeReducer
  })
);