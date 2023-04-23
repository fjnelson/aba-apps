import React, { useState, useEffect } from 'react';
import "../../App.css";

function TaskMenu() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    const savedDoneList = JSON.parse(localStorage.getItem("doneList"));
    if (savedTodoList) {
      setTodoList(savedTodoList);
    }
    if (savedDoneList) {
      setDoneList(savedDoneList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("doneList", JSON.stringify(doneList));
  }, [todoList, doneList]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todo.value;
    setTodoList([...todoList, newTodo]);
    event.target.reset();
  };

  const handleMoveToDone = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setDoneList([...doneList, todoList[index]]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index} onClick={() => handleMoveToDone(index)}>{todo}</li>
        ))}
      </ul>
      <hr />
      <h2>Done List</h2>
      <ul>
        {doneList.map((done, index) => (
          <li key={index}>{done}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskMenu;