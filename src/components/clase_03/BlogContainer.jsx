import BlogPost from "./BlogPost";

function BlogContainer() {
  const blogPostList = [
    {
      id: 1,
      title: "Aprendiendo Children en React",
      tags: ["webdev", "react", "aprendiendo"],
      footer: "En la próxima lección veremos State!",
      body: (
        <div>
          <h3>Soy el cuerpo del post</h3>
          <p>...............</p> <img src="http://placekitten.com/320/320" />
          <p>Lorem Ipsum</p>
          <img src="http://placebear.com/320/320" />
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
        </div>
      ),
    },
    {
      id: 10,
      title: "Aprendiendo Children en React",
      tags: ["webdev", "react", "aprendiendo"],
      footer: "En la próxima lección veremos State!",
      body: (
        <div>
          <h3>Soy el cuerpo del post</h3>
          <p>...............</p> <img src="http://placekitten.com/320/320" />
          <p>Lorem Ipsum</p>
          <img src="http://placebear.com/320/320" />
        </div>
      ),
    },
    {
      id: 11,
      title: "Aprendiendo State en React",
      tags: ["webdev", "react"],
      footer: "Esta es la segunda parte de la clase",
      body: (
        <div>
          <h3>Soy otro blogpost</h3>
        </div>
      ),
    },
  ];

  return (
    <div>
      {blogPostList.map((post) => (
        <BlogPost
          key={post.title}
          /* tags={post.tags}  */ title={post.title}
          footer={post.footer}
        >
          {post.body}
        </BlogPost>
      ))}
    </div>
  );
}

export default BlogContainer;
