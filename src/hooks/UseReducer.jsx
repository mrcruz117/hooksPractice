import React, { useReducer } from "react";
import Todo from "../Todo";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADD_TODO: "add-todo",
  CHANGE_NAME: "change-name",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        name: "",
        todos: [...state.todos, newTodo(action.payload.name)],
      };
    case ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload.name };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        }),
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

const stateObj = {
  count: 0,
  name: "",
  todos: [],
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, stateObj);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  function handleNameChange(event) {
    dispatch({
      type: ACTIONS.CHANGE_NAME,
      payload: { name: event.target.value },
    });
  }
  function handleToggle(id) {
    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id },
    });
  }
  function handleDelete(id) {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: { id },
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: state.name },
    });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>Count: {state.count}</span>
      <button onClick={increment}>+</button>
      {/* <button onClick={reset}>Reset</button> */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.name} onChange={handleNameChange} />
      </form>
      {state.todos.map((todo) => {
        return (
          <Todo
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </div>
  );
}
