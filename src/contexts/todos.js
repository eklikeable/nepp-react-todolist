import { createContext, useContext, useReducer } from 'react';

const initialState = [
  {
    id: 1,
    text: 'Todo List 만들기',
    done: true,
  },
  { id: 2, text: 'useContext 공부하기', done: false },
  { id: 3, text: 'TodoList 리팩터링 하기', done: true },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return [{ id: action.id, text: action.text, done: false }, ...state];
    case 'REMOVE_TODO':
      if (window.confirm('정말로 삭제하시겠습니까?'))
        return state.filter((todo) => todo.id !== action.id);
      break;
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div>{children}</div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw Error('TodoProvider 없음');
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw Error('TodoProvider 없음');
  return context;
}
