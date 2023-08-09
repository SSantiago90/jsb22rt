import "./App.css";

function FooterPersonalizado() {
  return <footer>Soy un footer!</footer>;
}

function AppClase1() {
  function getUser() {
    return { username: "Juan", favColor: "orange" };
  }

  // camelCase esEscrbirConEstaSintaxis
  const stylesH1 = {
    color: getUser().favColor,
    backgroundColor: "black",
    marginTop: "50px",
    padding: "20px",
  };

  function handleClick() {
    alert("Gracias por visitar mi web");
  }

  // inline styles
  return (
    <>
      <h1 style={stylesH1}>Bienvenido {getUser().username}</h1>
      <button onClick={handleClick} id="vermas-btn">
        Ver más
      </button>
      <p className="read-the-docs">
        Mi primer app en Vite
        <br />
        <img src="https://place-hold.it/300x400" />
      </p>
      <h2> {1 + 2 + 19} </h2>
      <FooterPersonalizado />
    </>
  );
}

export default AppClase1;
