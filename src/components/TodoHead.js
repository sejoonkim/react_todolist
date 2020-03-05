import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  box-sizing: border-box;

  header {
    background: white;
    border-bottom: 1px solid lightgray;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    width: 980px;
    margin: 0 auto;
  }

  .name {
    float: left;
  }

  .menu {
    float: right;
  }

  .menu-item {
    float: left;
    padding: 8px 10px;
  }

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: 100%;
  }

  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <header>
        <div className="container">
          <h2 className="name">프로그라피 프론트 김세준</h2>
        </div>
      </header>
    </TodoHeadBlock>
  );
}

export default TodoHead;
