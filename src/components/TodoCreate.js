import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const InsertFormPositioner = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  margin-bottom: 100px;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 32px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue("");
    nextId.current += 1;
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input
            placeholder="할 일 작성 후, [Enter]키 누르세요!"
            autoFocus
            onChange={onChange}
            value={value}
          />
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
}

export default React.memo(TodoCreate);
