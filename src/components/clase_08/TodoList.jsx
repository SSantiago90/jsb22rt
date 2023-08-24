import {
  memo,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from "react"; // memo -> HOC -> high order component
import PropTypes from "prop-types";
import ButtonChilds from "../clase_03/UI/Button2";
import "./todolist.css";
import FormAddTodo from "./FormAddTodo";
import { v4 as uuid } from "uuid";
import sessionContext from "../../context/sessionContext";

function TodoList() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const { logged } = useContext(sessionContext);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      setTasks(data);
    }
    getData();
  }, []);

  // useCallback
  function toggleTaskComplete(id) {
    const taskToEdit = tasks.findIndex((task) => task.id === id);
    const newTask = [...tasks];
    newTask[taskToEdit].completed = !newTask[taskToEdit].completed;
    setTasks(newTask);
  }

  const memoizedToggle = useCallback(toggleTaskComplete, [tasks]);

  if (logged === false) {
    return <h1>No estas logueado</h1>;
  }

  function RemoveTask(idRemove) {
    setTasks(tasks.filter((task) => task.id !== idRemove));
  }

  // Cambio de estado sincrono
  /* function addTask() {
    console.log("agregamos tarea");
    setTasks([...tasks, { id: uuid(), text: newTaskText, completed: false }]);
  } */

  async function addTask() {
    const endpoint = "http://localhost:3001/api/tasks";

    const response = await fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + window.localStorage.getItem("jwt"),
      },
      body: JSON.stringify({ text: newTaskText, completed: false }),
    });

    const data = await response.json();
    const formatedTask = { id: data.id, text: data.text, completed: false };
    setTasks([...tasks, formatedTask]);
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
                id={task.id}
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

function Task({ text, completed = true, onClick, id }) {
  /* Tarea de uso intensivo del CPU */
  /* Calculos matemáticos, encryp, canvas */
  const memoizedBignumber = useMemo(() => {
    let bignumber = 0;
    for (let i = 0; i < 1000000000; i++) {
      bignumber++;
    }
    return bignumber;
  }, []);

  console.log("Termine de contar", memoizedBignumber);

  return (
    <li onClick={() => onClick(id)} className={completed ? "completed" : ""}>
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
