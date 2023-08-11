import "./App.css";
import ButtonChilds from "./components/clase_03/UI/Button2";
import BlogContainer from "./components/clase_03/Blog/BlogContainer";
import ImageClass from "./components/clase_02/Image_class";
import Counter from "./components/clase_03/UI/Counter";
import TodoList from "./components/clase_03/TodoList/TodoList";
import { useState } from "react";

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
                Todo List
              </ButtonChilds>
            </li>
          </ul>
        </nav>

        <h1>Clase 4 Eventos & Renderizado Condicional</h1>
        <ImageClass imgurl="http://loremflickr.com/300/300" circled={true} />

        <TodoList />
        <BlogContainer />
        <ButtonChilds
          onTouch={() => console.log("modificando color con state")}
        >
          Cambio de color
        </ButtonChilds>
        {hideCounter === false && <Counter max={6} />}
        <ButtonChilds onTouch={handleHideCounter}>
          Ocultar contador
        </ButtonChilds>
      </>
    );
  }

  return <h1>No encontramos lo que buscabas</h1>;
}

export default App;
