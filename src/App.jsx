import "./App.css";
import Button from "./components/clase_02/Button";
import Image from "./components/clase_02/Image";
import ImageClass from "./components/clase_02/Image_class";
import UsersList from "./components/clase_02/UsersList";

function App() {
  function handleContact() {
    alert("Serás redirigido a /contacto");
  }

  function handleServices() {
    alert("Serás redirigido a /services");
  }

  return (
    <>
      <ImageClass imgurl="/assets/avatar-man.jpg" />
      <h1>Clase 2 Componentes</h1>
      <Image
        imgurl="https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png"
        alt="wellcome img"
        circled={false}
      />

      <UsersList />
      <Button
        onTouch={handleServices}
        color="lightblue"
        label="Conoce nuestros servicios"
      />
      <Button onTouch={handleContact} color="purple" label="Contactanos" />
    </>
  );
}

export default App;
