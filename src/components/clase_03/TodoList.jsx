import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Aprender VueJS", completed: false },
    { id: 3, text: "Pase al perro", completed: false },
    { id: 4, text: "Dormir", completed: false },
  ]);

  function toggleTaskComplete(id) {
    const taskToEdit = tasks.findIndex((task) => task.id === id);
    const newTask = [...tasks];
    newTask[taskToEdit].completed = !newTask[taskToEdit].completed;
    setTasks(newTask);
  }

  function RemoveTask(idRemove) {
    setTasks(tasks.filter((task) => task.id !== idRemove));
  }

  return (
    <div style={{ margin: "25px 50px" }}>
      <h1>TodoList</h1>
      {tasks.map((task) => (
        <>
          <Task
            onClick={() => toggleTaskComplete(task.id)}
            key={task.id}
            text={task.text}
            completed={task.completed}
          />
          <button onClick={() => RemoveTask(task.id)}>X</button>
        </>
      ))}
    </div>
  );
}

function Task({ onClick, text, completed = true }) {
  return (
    <li onClick={onClick}>
      {text} - completa: {String(completed)}
    </li>
  );
}

export default TodoList;
