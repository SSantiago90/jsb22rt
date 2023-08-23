import { useState, useEffect } from "react";
import BlogPost from "../clase_03/Blog/BlogPost";
import { FallingLines } from "react-loader-spinner";
import getBlogData, { searchBlogPosts } from "../../services/blogdata";

function BlogContainer() {
  const [blogPostList, setBlogPostList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [postCount, setPostCount] = useState(2);
  const [search, setSearch] = useState(null);

  console.log("%cRender de BlogContainer", "color: yellow");

  useEffect(() => {
    console.log("%cEfecto de montaje y update de 'postCount'", "color: red");
    setTimeout(() => {
      const data = getBlogData(postCount); // fetch, promise, API, cloud service
      setBlogPostList(data);
      setIsLoading(false);
    }, 500);
  }, [postCount]);

  useEffect(() => {
    if (search === "") return;
    const data = searchBlogPosts(search);
    setBlogPostList(data);
  }, [search]);

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
      <div>
        <label htmlFor="search">Buscar</label>
        <input
          onChange={(evt) => setSearch(evt.target.value)}
          name="search"
          placeholder="Buscar posts..."
        ></input>
      </div>
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
      <div>
        <button onClick={handleFetchPosts}>Cargar Más</button>
      </div>  
    </div>
  );
}

export default BlogContainer;
