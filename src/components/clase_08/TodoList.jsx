import { memo, useState, useMemo, useCallback } from "react"; // memo -> HOC -> high order component
import PropTypes from "prop-types";
import ButtonChilds from "../clase_03/UI/Button2";
import "./todolist.css";
import FormAddTodo from "./FormAddTodo";

function TodoList() {
  const [newTaskText, setNewTaskText] = useState("");

  const [tasks, setTasks] = useState([
    { id: 3, text: "Recapitulación de contenido", completed: false },
    {
      id: 2,
      text: "Limpieza de proyecto y revisión de errores",
      completed: false,
    },
  ]);

  // useCallback
  function toggleTaskComplete(id) {
    const taskToEdit = tasks.findIndex((task) => task.id === id);
    const newTask = [...tasks];
    newTask[taskToEdit].completed = !newTask[taskToEdit].completed;
    setTasks(newTask);
  }

  const memoizedToggle = useCallback(toggleTaskComplete, []);

  function RemoveTask(idRemove) {
    setTasks(tasks.filter((task) => task.id !== idRemove));
  }

  function addTask() {
    console.log("agregamos tarea");
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTaskText, completed: false },
    ]);
  }

  function handleInputChange(evt) {
    setNewTaskText(evt.target.value);
  }

  return (
    <div className="tasklist_container" style={{ margin: "25px 50px" }}>
      <h1>TodoList</h1>
      {tasks.length <= 0 ? (
        <h2>Terminaste con tus tareas!👏</h2>
      ) : (
        <ul className="tasklist_list">
          {tasks.map((task) => (
            <div key={task.id} className="tasklist_item">
              <MemoizedTask
                onClick={memoizedToggle}
                text={task.text}
                completed={task.completed}
              />

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
      <FormAddTodo onSubmitTask={addTask} onInputChange={handleInputChange} />
    </div>
  );
}

const MemoizedTask = memo(Task);

function Task({ text, completed = true, onClick }) {
  /* Tarea de uso intensivo del CPU */
  /* Calculos matemáticos, encryp, canvas */
  const memoizedBignumber = useMemo(() => {
    let bignumber = 0;
    for (let i = 0; i < 2000000000; i++) {
      bignumber++;
    }
    return bignumber;
  }, []);

  console.log("Termine de contar", memoizedBignumber);

  return (
    <li onClick={onClick} className={completed ? "completed" : ""}>
      {text}
    </li>
  );
}

Task.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  completed: PropTypes.bool,
};
export default TodoList;
