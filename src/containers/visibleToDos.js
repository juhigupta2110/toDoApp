import React from 'react';
import {View, Text} from 'react-native';

import ToDoList from '../components/toDoList';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  todos: state.toDos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
