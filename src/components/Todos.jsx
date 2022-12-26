import styled from 'styled-components';
import { TodoProvider } from '../contexts/todos';
import TodoBody from './TodoBody';
import TodoCreate from './TodoCreate';
import TodoHeader from './TodoHeader';

function Todos() {
  return (
    <TodoProvider>
      <TodoListBox>
        <TodoHeader />
        <TodoBody />
        <TodoCreate />
      </TodoListBox>
    </TodoProvider>
  );
}

export default Todos;

const TodoListBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;

  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;
