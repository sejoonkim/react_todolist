import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";
import GetMovieTitle from "./components/GetMovieTitle";
import { Route } from "react-router-dom";

// create global style
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }

`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoHead />
        <Route path="/" exact>
          <TodoTemplate>
            <TodoCreate />
            <TodoList />
          </TodoTemplate>
        </Route>
        <Route path="/movie">
          <GetMovieTitle />
        </Route>
      </TodoProvider>
    </>
  );
}

export default App;
