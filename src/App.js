import React from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './Components/TodoList/TodoList';

const App = () => ( 
  <Provider store={store}>
    <h1>Hello World</h1>
    <TodoList /> 
  </Provider>
);


export default App;
