import React from "react";
import styled from "styled-components";

const TodoTitleBlock = styled.div`
  .todoTitle {
    margin: 0 auto;
    color: #607d8b;
    font-size: 300%;
    font-weight: bold;
  }

  margin-top: 96px;
  display: flex;
`;

const TodoTemplateBlock = styled.div`
  width: 608px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return (
    <>
      <TodoTitleBlock>
        <div className="todoTitle">Todos</div>
      </TodoTitleBlock>
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
    </>
  );
}

export default TodoTemplate;
