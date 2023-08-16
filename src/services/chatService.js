let chatState = null;

function initChat(){
  console.log("Conectando con el proveedor de mensajeria")
  watchChat();
}

function watchChat(){
  chatState = setInterval( () => {
    console.log("Esperando nuevos mensajes")
  }, 1000 ) 
}

function closeChat(){
  console.log("Cerrando conexion con el proveedor de mensajeria");
  clearInterval(chatState);
}

export default initChat;

export {initChat, watchChat, closeChat} // named exports