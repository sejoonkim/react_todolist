import React, { useState } from "react";
import styled, { css } from "styled-components";

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
  return <Input placeholder="type todo, press enter" autoFocus />;
}

export default React.memo(TodoCreate);
