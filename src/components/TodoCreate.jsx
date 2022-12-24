import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

function TodoCreate({ todos, input, setInput, onCreate }) {
  console.log(todos);
  return (
    <FormBox>
      <form>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onCreate}>등록</button>
      </form>
    </FormBox>
  );
}

export default TodoCreate;

const FormBox = styled.div`
  width: 400px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 350px;
    height: 30px;
    border: 1px solid #ddd;
  }
  button {
    width: 350px;
    margin: 5px 0;
    height: 30px;
    color: white;
    background-color: dodgerblue;
    border: none;
    cursor: pointer;
  }
`;
