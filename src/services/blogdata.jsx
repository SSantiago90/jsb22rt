function getBlogData(limit = 1) {
  const blogPostList = [
    {
      id: 1,
      title: "Aprendiendo Children en React",
      tags: ["webdev", "react", "aprendiendo"],
      footer: "En la próxima lección veremos State!",
      favorite: true,
      body: (
        <div>
          <h3>Soy el cuerpo del post</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            dolor justo. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Duis convallis risus vitae
            ipsum vehicula commodo. Praesent tincidunt suscipit velit, quis
            cursus nisi placerat et. Suspendisse scelerisque, ligula lacinia
            bibendum egestas, lorem lorem feugiat est, quis sagittis ex justo
            eget felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas lacinia dui nec massa suscipit, non dapibus nibh dapibus.
            Ut dictum eleifend magna, ut blandit ligula pharetra at. Donec ut
            urna vestibulum, finibus leo vitae, semper diam. Sed quis turpis
            est. Nunc et nulla orci. Nulla consectetur metus velit.
          </p>
          <img src="http://placebear.com/320/320" alt="bear" />
        </div>
      ),
    },

    {
      id: 10,
      title: "Aprendiendo Children en React",
      tags: ["react"],
      footer: "En la próxima lección veremos State!",
      body: (
        <div>
          <h3>Soy el cuerpo del post</h3> <h4>Hoy aprenderemos:</h4>
          <ul>
            <li>React</li>
            <li>SASS</li>
            <li>State</li>
          </ul>
        </div>
      ),
    },
    {
      id: 11,
      title: "Aprendiendo State en React",
      footer: "Esta es la segunda parte de la clase",
      favorite: true,
      body: (
        <div>
          <h3>Soy otro blogpost sobre perritos</h3>
          <img src="http://placedog.net/200/200?id=5" alt="dog" />
          <img src="http://placedog.net/200/200?id=10" alt="dog" />
          <img src="http://placedog.net/200/200?id=100" alt="dog" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Aprendiendo State en React",
      tags: ["webdev", "react"],
      footer: "Esta es la segunda parte de la clase",
      body: (
        <div>
          <h3>Soy otro blogpost</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            dolor justo. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Duis convallis risus vitae
            ipsum vehicula commodo. Praesent tincidunt suscipit velit, quis
            cursus nisi placerat et.
          </p>
          <p>
            Suspendisse scelerisque, ligula lacinia bibendum egestas, lorem
            lorem feugiat est, quis sagittis ex justo eget felis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas lacinia dui
            nec massa suscipit, non dapibus nibh dapibus. Ut dictum eleifend
            magna, ut bland
          </p>
        </div>
      ),
    },
    {
      id: 23,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 24,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 25,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 27,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 26,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 27,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 28,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 28,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
    {
      id: 29,
      title: "Post de Relleno",
      tags: ["webdev", "react"],
      footer: "Post de relleno 1",
      body: <h3>Post relleno</h3>,
    },
  ];

  return blogPostList.slice(0, limit);
}

export default getBlogData;
