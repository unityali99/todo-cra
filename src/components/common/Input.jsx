import { useState } from "react";
import { actionTypes } from "../../reducer/actionTypes";

const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-group input-group-lg my-5">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        type="text"
        className="form-control"
        placeholder="Add Todo:"
      />
      <div className="input-group-append">
        <button
          disabled={inputValue ? false : true}
          onClick={() =>
            dispatch({
              type: actionTypes.TODO_ADD,
              payload: { title: inputValue },
            })
          }
          className="btn btn-primary px-5"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
