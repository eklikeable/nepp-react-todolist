import React from 'react';
import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
import { useTodoState } from '../contexts/todos';

function TodoBody() {
  const state = useTodoState();

  return (
    <BodyBox>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </BodyBox>
  );
}

export default TodoBody;

const BodyBox = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  /* user-select: none; */
`;
