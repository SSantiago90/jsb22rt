console.log("Hola!")
const root = document.querySelector("#root")
console.log(root);

// Nos mentalizamos en modo React
const btn = document.querySelector("#showFooterBtn")

btn.addEventListener( "click", () => {
  createNewNode("div", "HackABoss", root) 
})

function createNewNode(tag, content, parent){
  const newNodo =  document.createElement(tag);
  newNodo.innerHTML = content;
  parent.appendChild(newNodo);
}

createNewNode("footer", "Soy un footer", root)