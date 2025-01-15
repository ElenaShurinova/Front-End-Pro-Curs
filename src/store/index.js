import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './reducers/TodoReducer';


const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
});

// if (window.__REDUX_DEVTOOLS_EXTENSION__) {
//     window.__REDUX_DEVTOOLS_EXTENSION__.injectStore(store);
// }

export default store;
