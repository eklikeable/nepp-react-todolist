import React from 'react';
import styled from 'styled-components';

function TodoHeader({ todos }) {
  const date = new Date().toLocaleDateString('ko-KR', {
    dateStyle: 'full',
  });

  const doneCount = todos.filter((todo) => todo.done === true).length;
  const progress = doneCount ? Math.round((doneCount / todos.length) * 100) : 0;

  return (
    <HeaderBox>
      <div>
        <h1>할 일 목록</h1>
        <span>{date}</span>
        <div className='progress'>
          <span> {progress}% 완료</span>
        </div>
      </div>
    </HeaderBox>
  );
}

export default TodoHeader;

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 5px;
    padding-top: 20px;
  }

  .progress {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid dodgerblue;
    border-radius: 30px;
    width: 350px;
    height: 20px;
    font-size: 0.8rem;
    text-align: center;
    position: relative;

    span {
      z-index: 100;
      width: 100%;
      position: absolute;
      left: 0;
      top: -25px;
      color: white;
    }

    &::before {
      content: '';
      display: block;
      height: 100%;
      border-radius: inherit;
      background-color: dodgerblue;
    }
  }
`;
