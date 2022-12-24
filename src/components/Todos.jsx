import { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoBody from './TodoBody';
import TodoCreate from './TodoCreate';
import TodoHeader from './TodoHeader';

function Todos() {
  const initialState = [
    {
      id: 1,
      text: 'Todo List 만들기',
      done: true,
    },
    { id: 2, text: 'useContext 공부하기', done: false },
  ];
  const nextId = useRef(3);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);

  const onCreate = (e) => {
    e.preventDefault();
    setTodos([{ id: nextId.current, text: input, done: false }, ...todos]);
    setInput('');
    nextId.current++;
  };

  const onRemove = (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const onToggle = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );

  return (
    <>
      <GlobalStyle />
      <TodoList>
        <TodoHeader todos={todos} />
        <TodoBody todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoCreate
          onCreate={onCreate}
          todos={todos}
          input={input}
          setInput={setInput}
        />
      </TodoList>
    </>
  );
}

export default Todos;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 600px;

  border: 1px solid #eee;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;
