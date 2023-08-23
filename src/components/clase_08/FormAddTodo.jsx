function FormAddTodo({ onSubmitTask, onInputChange }) {
  console.log("Submit Tarea???", onSubmitTask);
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitTask();
  }
  return (
    <div>
      <h2>Agregar tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onInputChange}
          name="todo"
          type="text"
          placeholder="Nueva tarea"
        ></input>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default FormAddTodo;
