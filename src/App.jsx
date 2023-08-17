import "./App.css";
import ButtonChilds from "./components/clase_03/UI/Button2";
/* import BlogContainer from "./components/clase_03/Blog/BlogContainer"; */
import BlogContainer from "./components/clase_06/BlogContainer";
import Counter from "./components/clase_03/UI/Counter";
import TodoList from "./components/clase_03/TodoList/TodoList";
import { useState } from "react";
import LoginForm from "./components/clase_06/LoginForm";
import Chat from "./components/clase_05/Chat";
import Timer from "./components/clase_05/Timer";
import RegisterForm from "./components/clase_06/RegisterForm";

function App() {
  const [hideCounter, setHideCounter] = useState(false);
  const [activePage, setActivePage] = useState("blog");

  function handleHideCounter() {
    setHideCounter(!hideCounter);
  }

  function handlePageChange(page) {
    setActivePage(page);
  }

  if (activePage === "login") return <LoginForm />;

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

  if (activePage === "register") {
    return <RegisterForm />;
  }

  return <h1>No encontramos lo que buscabas</h1>;
}

export default App;
