import "./App.css";
/* import BlogContainer from "./components/clase_03/Blog/BlogContainer"; */
import BlogContainer from "./components/clase_06/BlogContainer";
import TodoList from "./components/clase_08/TodoList";
import { useContext } from "react";
import RegisterForm from "./components/clase_07/RegisterFormApi";
import NavMenu from "./components/clase_08/NavMenu";
import Counter from "./components/clase_08/Counter";
import Store from "./components/clase_07/Store";

import sessionContext, { SessionProvider } from "./context/sessionContext";
import routesContext, {
  RoutesProvider,
  useRoutesContext,
} from "./context/routesContext";
import LoginForm from "./components/clase_07/LoginForm";

// Enrutador
function App() {
  return (
    <>
      {/*  Damos acceso al contexto a través del Provider */}
      <RoutesProvider>
        <SessionProvider>
          <Layout />
        </SessionProvider>
      </RoutesProvider>
    </>
  );
}

function Layout() {
  const context = useContext(sessionContext);
  const { logged } = context;
  const { activePage } = useContext(routesContext);

  const logginPage = logged
    ? {
        name: "logout",
        content: <Logout />,
        label: "Cerrar sesión",
      }
    : {
        name: "login",
        content: <LoginForm />,
        label: "Iniciar sesión",
      };

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
    { ...logginPage },
  ];

  const activeContent = pages.find((route) => route.name === activePage);

  return (
    <main>
      <NavMenu pages={pages} />
      {activeContent.content}
      <button>Volver</button>
    </main>
  );
}

function Logout() {
  const { handleLogout } = useContext(sessionContext);
  const { handlePageChange } = useRoutesContext();
  return (
    <h3>
      Cerrar sesión
      <div>
        <button
          onClick={() => {
            handleLogout();
            handlePageChange("home");
          }}
        >
          Confirmar
        </button>
      </div>
    </h3>
  );
}

export default App;
