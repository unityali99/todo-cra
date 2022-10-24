import { actionTypes } from "./actionTypes";
import { v4 as uuid } from "uuid";

const newTodo = (id, title) => {
  return { id, title, completed: false };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return [...state, newTodo(uuid().slice(0, 10), action.payload.title)];

    case actionTypes.TODO_DELETE:
      return state.filter((item) => item.id !== action.payload.id);

    case actionTypes.TODO_COMPLETE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );

    default:
      return state;
  }
};
