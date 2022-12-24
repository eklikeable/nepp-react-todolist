function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return [{ id: action.id, text: action.text, done: false }, ...state];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
