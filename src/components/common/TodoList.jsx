import React from "react";
import { actionTypes } from "../../reducer/actionTypes";

const TodoList = ({ list, dispatch }) => {
  return (
    <React.Fragment>
      <h3 className="text-primary">Todos List ({list.length}):</h3>
      {list.length === 0 ? (
        <div className="alert alert-danger w-50 my-5 mx-auto ">
          there are no defined todos.
        </div>
      ) : (
        list.map((item, index) => (
          <div key={index} className="input-group input-group-lg mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  onClick={() =>
                    dispatch({
                      type: actionTypes.TODO_COMPLETE,
                      payload: { id: item.id },
                    })
                  }
                  style={{ width: "1.2rem", height: "1.2rem" }}
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
            </div>
            <input
              readOnly
              value={item.title}
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
            <div className="input-group-append">
              <button
                onClick={() =>
                  dispatch({
                    type: actionTypes.TODO_DELETE,
                    payload: { id: item.id },
                  })
                }
                className="btn btn-danger px-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default TodoList;
