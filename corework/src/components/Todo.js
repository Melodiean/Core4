import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "rgba(0, 0, 255, 0.862)" }}>Add To List</p>

      <input
        type="text"
        className="inpuT"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Todor({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="tbutton"
          onClick={() => completeTodo(index)}
          style={{
            backgroundColor: todo.isCompleted ? "rgba(0, 0, 255, 0.262)" : "",
          }}
        >
          Done
        </button>
        <button className="tbutton" onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

function Todo() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="appT">
      <h1>A Simple ToDo</h1>
      <div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todor
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Todo;
