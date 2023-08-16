import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { FallingLines } from "react-loader-spinner";
import getBlogData from "../../../services/blogdata";

function BlogContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogPostList, setBlogPostList] = useState([]);
  const [postCount, setPostCount] = useState(1);

  console.log("%cRender de BlogContainer", "color: yellow");

  useEffect(() => {
    console.log("%cEfecto de montaje y update de 'postCount'", "color: red");
    setTimeout(() => {
      const data = getBlogData(postCount); // fetch, promise, API, cloud service
      setBlogPostList(data);
      setIsLoading(false);
    }, 500);
  }, [postCount]);

  function handleFetchPosts() {
    setPostCount(postCount + 1);
  }

  if (isLoading)
    return (
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    );

  return (
    <div>
      {blogPostList.map((post) => (
        <>
          <BlogPost
            key={post.id}
            tags={post.tags}
            title={post.title}
            footer={post.footer}
            favorite={post.favorite}
          >
            {post.body}
          </BlogPost>
        </>
      ))}
      <button onClick={handleFetchPosts}>Cargar Más</button>
    </div>
  );
}

export default BlogContainer;
