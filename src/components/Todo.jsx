import React, { useReducer } from "react";
import { reducer } from "../reducer/reducer";
import Input from "./common/Input";
import TodoList from "./common/TodoList";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="container text-center">
      <Input dispatch={dispatch} />
      <TodoList list={state} dispatch={dispatch} />
    </div>
  );
};

export default Todo;
