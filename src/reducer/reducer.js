import { actionTypes } from "./actionTypes";
import { v4 as uuid } from "uuid";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return [
        ...state,
        {
          id: uuid().slice(0, 10),
          title: action.payload.title,
          completed: false,
        },
      ];

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
