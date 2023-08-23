function EditProfile() {
  async function handleSubmit(evt) {
    evt.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcnRlc0BoYWIuY29tIiwiaWQiOiI2NGUzYjQ1MTAyYTY1YzkyMGMzNTI0MTEiLCJpYXQiOjE2OTI2NDYxMDZ9.lyYKsjOc8xsYOX-BrzaVRO-qTz6kN5PQtwese14S9fY",
      },
      body: JSON.stringify({ otracosa: "holamundo" }),
    };

    const reponse = await fetch("http://localhost:3001/api/upload", config); // endpoint privado
    const json = await reponse.json();
    console.log(json);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre
          <input type="text" placeholder="Nombre" />
        </label>
        <label>
          Sube tu imagen de perfil
          <input type="file" placeholder="Imagen" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EditProfile;
