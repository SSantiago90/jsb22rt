import "./App.css";
import ButtonChilds from "./components/clase_03/UI/Button2";
import BlogContainer from "./components/clase_03/Blog/BlogContainer";
import ImageClass from "./components/clase_02/Image_class";
import Counter from "./components/clase_03/UI/Counter";
import TodoList from "./components/clase_03/TodoList/TodoList";
import { useState } from "react";
import LoginForm from "./components/clase_04/LoginForm";
import Chat from "./components/clase_05/Chat";
import Timer from "./components/clase_05/Timer";

function App() {
  const [hideCounter, setHideCounter] = useState(false);
  const [activePage, setActivePage] = useState("home");

  function handleHideCounter() {
    setHideCounter(!hideCounter);
  }

  function handlePageChange(page) {
    setActivePage(page);
  }

  if (activePage === "blog") {
    return (
      <div>
        <BlogContainer />
        <ButtonChilds
          onTouch={() => {
            handlePageChange("home");
          }}
        >
          Volver
        </ButtonChilds>
      </div>
    );
  }

  if (activePage === "todolist") {
    return (
      <div>
        <TodoList />
        <ButtonChilds
          onTouch={() => {
            handlePageChange("home");
          }}
        >
          Volver
        </ButtonChilds>
      </div>
    );
  }

  if (activePage === "chat") {
    return (
      <div>
        <h1>Chat</h1>
        <Chat></Chat>
        <ButtonChilds
          onTouch={() => {
            handlePageChange("home");
          }}
        >
          Volver
        </ButtonChilds>
      </div>
    );
  }

  if (activePage === "home") {
    return (
      <>
        <nav>
          <ul>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("home");
                }}
              >
                Homepage
              </ButtonChilds>
            </li>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("chat");
                }}
              >
                Chat
              </ButtonChilds>
            </li>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("blog");
                }}
              >
                Blog
              </ButtonChilds>
            </li>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("todolist");
                }}
              >
                Todo List
              </ButtonChilds>
            </li>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("asdsda");
                }}
              >
                No existe
              </ButtonChilds>
            </li>
            <li>
              <ButtonChilds
                onTouch={() => {
                  handlePageChange("login");
                }}
              >
                Login
              </ButtonChilds>
            </li>
          </ul>
        </nav>

        <h1>Clase 4 Eventos & Renderizado Condicional</h1>

        <BlogContainer />
        <TodoList />
        <ButtonChilds
          onTouch={() => console.log("modificando color con state")}
        >
          Cambio de color
        </ButtonChilds>
        {hideCounter === false && <Counter max={6} />}
        <ButtonChilds onTouch={handleHideCounter}>
          Ocultar contador
        </ButtonChilds>
        <Timer />
      </>
    );
  }

  if (activePage === "login") {
    return <LoginForm />;
  }

  return <h1>No encontramos lo que buscabas</h1>;
}

export default App;
