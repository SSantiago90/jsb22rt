import "./chat.css";
import { initChat, closeChat } from "../../services/chatService";
import { useEffect, useState } from "react";

function Chat() {
  const [userText, setUserText] = useState("");

  // Vamos a meterlo en un useEffect
  useEffect(() => {
    initChat();

    // cleanup function -> desmontaje/dismounting
    return () => {
      closeChat();
    };
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    setUserText(value);
  }

  useEffect(() => {
    const chatNode = document.querySelector(".chat_window");

    const callbackClick = () => {
      console.log("clicked chat");
    };

    chatNode.addEventListener("click", callbackClick);

    console.log(chatNode);

    return () => {
      chatNode.removeEventListener("click", callbackClick);
    };
  }, []);

  return (
    <section className="chat_window">
      <div className="chat_texts">
        <div className="chat_bubble-text chat_user-text">
          <p>Hola!</p>
        </div>
        <div className="chat_bubble-text">
          <p>
            <b>Julian</b>: Hola! ¿Como puedo ayudarte hoy?
          </p>
        </div>
      </div>
      <div className="chat_footer">
        <input
          onChange={handleChange}
          id="chatText"
          placeholder=". . ."
          type="text"
        ></input>

        <button role="button" className="primary">
          Enviar
        </button>
        <button role="button" className="secondary">
          Cancelar
        </button>
      </div>
    </section>
  );
}

export default Chat;
