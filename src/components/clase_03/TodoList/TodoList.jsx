import { useState } from "react";
import PropTypes from "prop-types";
import ButtonChilds from "../UI/Button2";
import "./todolist.css";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 3, text: "Sumar algo de CSS a la app🎨", completed: true },
    { id: 2, text: "2. Reorden de componentes🗂️", completed: true },
    { id: 4, text: "Estilizar componente Task🌈", completed: false },
    { id: 1, text: " Fix imagen_class css🐞", completed: false },
    {
      id: 5,
      text: "Clase de Eventos y Rendering Condicional💻",
      completed: false,
    },
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

  // if con return anticipado/adelantado /early-return
  /* if (tasks.length <= 0)
    return (
      <div className="tasklist_container" style={{ margin: "25px 50px" }}>
        <h1>TodoList</h1>
        <h2>Terminaste con tus tareas!👏</h2>
      </div>
    ); */

  return (
    <div className="tasklist_container" style={{ margin: "25px 50px" }}>
      <h1>TodoList</h1>
      {tasks.length <= 0 ? (
        <h2>Terminaste con tus tareas!👏</h2>
      ) : (
        <ul className="tasklist_list">
          {tasks.map((task) => (
            <div key={task.id} className="tasklist_item">
              <Task
                onClick={() => toggleTaskComplete(task.id)}
                text={task.text}
                completed={task.completed}
              />

              {/* Logic AND */}
              {task.completed && (
                <ButtonChilds
                  color="crimson"
                  onTouch={() => RemoveTask(task.id)}
                >
                  X
                </ButtonChilds>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

function Task({ onClick, text, completed = true }) {
  return (
    <li className={completed ? "completed" : ""} onClick={onClick}>
      {text}
    </li>
  );
}

Task.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  completed: PropTypes.boolean,
};
export default TodoList;
