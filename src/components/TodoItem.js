import React from "react";
import styled, { css } from "styled-components";

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      text-decoration: line-through;
      color: #ced4da;
    `}
`;

const Modify = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  .modify {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: 80%;
    color: #82b1ff;
  }
  .delete {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: 80%;
    color: #ff80ab;
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <Text done={done}>{text}</Text>
      <Modify>
        <button className="modify">수정</button>
      </Modify>
      <Remove>
        <button className="delete">삭제</button>
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
