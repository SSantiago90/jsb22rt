// Server
function getUserData() {
  let promise = new Promise( (resolve,reject) => {
    console.log("iniciando tareas...")

    setTimeout(() => {
      //resolve("Datos del usuario: {}")
      reject("Servicio no disponible")
    } , 2000)

  });
  return promise;
} 

// Front-end
console.log("inicia mi app")

async function requestUserData() {
  try{
    const respuesta = await getUserData();  
    console.log(respuesta);  
  }
  catch (error) {
      console.log("error atrapado", error)
  }
  finally {
    console.log("clean up tasks")
  }
  
}
requestUserData();


/*getUserData()
  .then(    (respuesta) => {console.log(respuesta)}, ) 
  .catch( error => console.log("Error:", error))
  .finally( () => console.log("clean up tasks"))*/

console.log("Termino mi tarea")
