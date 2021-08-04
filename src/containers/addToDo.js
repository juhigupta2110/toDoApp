import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

class AddToDo extends Component {
  state = {
    text: '',
  };

  addTask = text => {
    this.props.dispatch({type: 'ADD_TODO', text});
    this.setState({text: ''});
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
        }}>
        <TextInput
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Eg. create a new painting"
          style={{
            height: 50,
            flex: 1,
            padding: 5,
            backgroundColor: '#eaeaea',
            borderWidth: 1,
            borderColor: '#f2f2e1',
          }}
        />
        <TouchableOpacity onPress={() => this.addTask(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              justifyContent: 'center',
            }}>
            <Icon
              name="md-add"
              size={30}
              style={{color: '#de9595', padding: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  todos: state.toDos,
});

export default connect(mapStateToProps)(AddToDo);
