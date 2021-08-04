let nextId = 0;
const toDos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: nextId++,
          text: action.text,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );

    default:
      return state;
  }

  return State;
};

export default toDos;
