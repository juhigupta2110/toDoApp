import React from 'react';
import ToDoApp from './src/toDoApp';
import store from './src/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );
  }
}
