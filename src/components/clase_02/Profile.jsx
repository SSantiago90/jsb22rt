import Button from "./Button";
import Image from "./Image";

function Profile(props) {
  const { username, description, email } = props;
  /* 
   {
      id: 1,
      username: "usuario1",
      email: "usuario1@example.com",
      description: "Hola, soy el usuario 1.",
    }, */

  const styleProfileContainer = {
    margin: "30px 12px",
    width: "280px",
    border: "solid 1px white",
    borderRadius: "15px",
    padding: "15px 20px",
  };

  return (
    <div style={styleProfileContainer}>
      <Title number={1} text={username} />
      <Image
        circled={true}
        imgurl="/assets/avatar-woman.jpg"
        alt="user avatar"
      />
      <p>{description}</p>
      <small>Contactame: {email}</small>

      <Button label="Seguir" />
    </div>
  );
}

function Title(props) {
  // destructuring
  const { text } = props;

  return <h3>{text}</h3>;
}

export { Title }; // named exports

export default Profile; // export default
