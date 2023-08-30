import { Outlet } from "react-router-dom";

function NestedRoute() {
  return (
    <div>
      <h1>Ruta Anidada Raíz</h1>
      <Outlet />
    </div>
  );
}

export default NestedRoute;
