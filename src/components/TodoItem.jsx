import React from 'react';
import { BsCheckCircle, BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <TodoItemBox>
      <CheckBox onClick={() => onToggle(todo.id)}>
        <BsCheckCircle
          style={{
            backgroundColor: todo.done && 'dodgerblue',
            borderRadius: '50%',
          }}
        />
      </CheckBox>
      <span style={{ textDecoration: todo.done && 'line-through' }}>
        {todo.text}
      </span>
      <TrashBox onClick={() => onRemove(todo.id)}>
        <BsFillTrashFill />
      </TrashBox>
    </TodoItemBox>
  );
}

export default TodoItem;

const TodoItemBox = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  span {
    width: 250px;
    text-align: left;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
`;

const TrashBox = styled.div`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
