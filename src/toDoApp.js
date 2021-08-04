import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddToDo from './containers/addToDo';
import VisibleToDos from './containers/visibleToDos';

class ToDoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
        <View>
          <VisibleToDos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default ToDoApp;
