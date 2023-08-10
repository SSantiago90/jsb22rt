import "./userslist.css";
import Profile from "./Profile";
import Flex from "../clase_03/Flex";

function UsersList() {
  const users = [
    {
      id: 1,
      username: "usuario1",
      email: "usuario1@example.com",
      description: "Hola, soy el usuario 1.",
      tags: ["react", "web development", "music"],
    },
    {
      id: 2,
      username: "usuario2",
      email: "usuario2@example.com",
      description: "¡Saludos! Soy el usuario 2.",
    },
    {
      id: 3,
      username: "usuario3",
      email: "usuario3@example.com",
      description: "Usuario 3 en acción.",
    },
    {
      id: 4,
      username: "usuario4",
      email: "usuario4@example.com",
      description: "Explorando el mundo como usuario 4.",
    },
    {
      id: 5,
      username: "usuario5",
      email: "usuario5@example.com",
      description: "Aquí está el usuario 5, ¡hola!",
    },
    {
      id: 6,
      username: "usuario6",
      email: "usuario6@example.com",
      description: "Soy el sexto usuario, ¡mucho gusto!",
    },
    {
      id: 7,
      username: "usuario7",
      email: "usuario7@example.com",
      description: "¡Hola a todos! Soy el usuario número 7.",
    },
    {
      id: 8,
      username: "usuario8",
      email: "usuario8@example.com",
      description: "Descubriendo nuevas cosas como usuario 8.",
    },
    {
      id: 9,
      username: "usuario9",
      email: "usuario9@example.com",
      description: "Usuario 9 reportándose para el deber.",
    },
    {
      id: 10,
      username: "usuario10",
      email: "usuario10@example.com",
      description: "El décimo usuario está aquí. ¡Saludos!",
    },
  ];

  return (
    <Flex inColumns={false}>
      {users.map((elem) => (
        <Profile key={elem.id} {...elem} />
      ))}
    </Flex>
  );
}

export default UsersList;
