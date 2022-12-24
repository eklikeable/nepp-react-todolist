import React from 'react';
import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
function TodoBody({ todos, onRemove, onToggle }) {
  return (
    <BodyBox>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
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
