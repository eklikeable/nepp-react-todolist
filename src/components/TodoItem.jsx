import React from 'react';
import { BsCheckCircle, BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useTodoDispatch } from '../contexts/todos';

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();
  const { id, text, done } = todo;

  function handleRemove() {
    dispatch({ type: 'REMOVE_TODO', id });
  }
  function handleToggle() {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  return (
    <TodoItemBox $done={done}>
      <CheckBox $done={done} onClick={handleToggle} />
      <span>{text}</span>
      <TrashBox onClick={handleRemove} />
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
    text-decoration: ${(props) => props.$done && 'line-through'};
  }
`;

const CheckBox = styled(BsCheckCircle)`
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.$done && 'dodgerblue'};
`;

const TrashBox = styled(BsFillTrashFill)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
