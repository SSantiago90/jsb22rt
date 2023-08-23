import "./App.css";
/* import BlogContainer from "./components/clase_03/Blog/BlogContainer"; */
import BlogContainer from "./components/clase_06/BlogContainer";
import TodoList from "./components/clase_08/TodoList";
import { useState } from "react";
import LoginForm from "./components/clase_07/LoginForm";
import RegisterForm from "./components/clase_07/RegisterFormApi";
import NavMenu from "./components/clase_08/NavMenu";
import Counter from "./components/clase_08/Counter";
import Store from "./components/clase_07/Store";

function App() {
  const [activePage, setActivePage] = useState("home");

  function handlePageChange(page) {
    setActivePage(page);
  }

  const pages = [
    {
      name: "home",
      content: <BlogContainer />,
      label: "Homepage",
    },
    {
      name: "blog",
      content: <BlogContainer />,
      label: "Blog",
    },
    {
      name: "todolist",
      content: <TodoList />,
      label: "Tareas",
    },
    {
      name: "login",
      content: <LoginForm />,
      label: "Inicia sesión",
    },
    {
      name: "register",
      content: <RegisterForm />,
      label: "Registrate",
    },
    {
      name: "counter",
      content: <Counter />,
      label: "Contador",
    },
    {
      name: "store",
      content: <Store />,
      label: "Tienda",
    },
  ];

  const activeContent = pages.find((route) => route.name === activePage);

  return (
    <Layout onPageChange={handlePageChange} pages={pages}>
      {activeContent.content}
    </Layout>
  );
}

function Layout({ children, onPageChange, pages = [] }) {
  return (
    <main>
      <NavMenu onPageChange={onPageChange} pages={pages} />
      {children}
      <button>Volver</button>
    </main>
  );
}

export default App;
