import { createContext, useState, useContext } from "react";
//1 Crear el Context
const routesContext = createContext({ activePage: "home" });

// 2. .... useContext

//3  Proveer el context - crear un Custom Provider
function RoutesProvider({ children }) {
  const [activePage, setActivePage] = useState("home");

  function handlePageChange(newPage) {
    setActivePage(newPage);
  }

  return (
    <routesContext.Provider value={{ activePage, handlePageChange }}>
      {children}
    </routesContext.Provider>
  );
}

function useRoutesContext() {
  return useContext(routesContext);
}

export default routesContext;

export { RoutesProvider, useRoutesContext };
