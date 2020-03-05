import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "./TodoContext";

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  cursor: pointer;

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

  input {
    width: 100%;
    box-sizing: border-box;
    font-size: 130%;
  }
`;

function TodoItem({ id, done, text, edit }) {
  const [mode, setMode] = useState("list");
  const [word, setWord] = useState(text);
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id
    });
  const onModify = () =>
    dispatch({
      type: "MODIFY",
      id,
      word
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id
    });
  return (
    <TodoItemBlock>
      {mode === "list" ? (
        <>
          <Text onClick={onToggle} done={done}>
            {text}
          </Text>
          <Modify onClick={() => setMode("edit")}>
            <button className="modify">수정</button>
          </Modify>
          <Remove onClick={onRemove}>
            <button className="delete">삭제</button>
          </Remove>
        </>
      ) : (
        <>
          <input
            ref={input => input && input.focus()}
            value={word}
            onChange={e => setWord(e.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                onModify();
                setMode("list");
              }
            }}
          />
        </>
      )}
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
