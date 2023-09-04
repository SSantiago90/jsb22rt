import DetailContainer from "./components/clase_10/DetailContainer";
import Login from "./components/clase_10/Login";
import NavRouter from "./components/clase_10/NavRouter";
import StoreContainer from "./components/clase_10/StoreContainer";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import sessionContext, { SessionProvider } from "./context/sessionContext";
import { useContext } from "react";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/clase_10/CartContainer";

function App() {
  return (
    <main>
      <CartProvider>
        <SessionProvider>
          <BrowserRouter>
            <NavRouter />

            <Routes>
              <Route path="/" element={<h1>Bienvenidos!</h1>} />
              <Route path="/store" element={<StoreContainer />} />

              <Route path="/private" element={<PrivateRoute />}>
                {/* OUTLET */}
                <Route
                  index
                  element={
                    <div>
                      <h2>Ruta Privada</h2>
                      <small>Si estás aquí entonces iniciaste sesión!🙃</small>
                    </div>
                  }
                />
              </Route>

              <Route
                path="/store/detail/:idProduct"
                element={<DetailContainer />}
              />

              <Route
                path="/store/detail/:idProduct/buy"
                element={<PrivateRoute />}
              >
                <Route index element={<DetailContainer buy={true} />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>

            <footer style={{ textAlign: "center" }}>
              <p>
                <small>&copy; 2023 - HackABoss</small>
              </p>
            </footer>
          </BrowserRouter>
        </SessionProvider>
      </CartProvider>
    </main>
  );
}

function PrivateRoute() {
  const { logged } = useContext(sessionContext);

  if (!logged) return <Navigate to="/login" />;

  return <Outlet />;
}

export default App;
