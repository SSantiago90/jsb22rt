import PropTypes from "prop-types";
import ToggleButton from "../UI/ToggleButton";
import "./blogpost.css";
import { useState } from "react";
import { useRef } from "react";

function BlogPost({ title, tags = [], favorite = false, footer, children }) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const toggleButtonRef = useRef();

  const blogPostRef = useRef();

  function onToggle(value) {
    setIsFavorite(value);
  }

  function handleAddToFavorites() {
    setIsFavorite(!isFavorite);
    toggleButtonRef.current.click();
  }

  function handleNext() {
    const nextPost = blogPostRef.current.nextElementSibling;
    nextPost.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <article
      ref={blogPostRef}
      className={`blogpost ${isFavorite && "favorite"}`}
    >
      <ToggleButton
        ref={toggleButtonRef}
        initial={isFavorite}
        onToggle={onToggle}
        className="like-button"
      >
        ❤
      </ToggleButton>

      <h2>{title}</h2>
      <ul className="blogpost_tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {children}
      <div className="blogpost_footer">
        {footer}
        <div>
          <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
        </div>
        <div>
          <button onClick={handleNext}>Siguiente</button>
        </div>
        <div>
          <small>
            <i>Gracias por leernos. BlogReact2023.</i>
          </small>
        </div>
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  children: PropTypes.element,
  tags: PropTypes.array,
  favorite: PropTypes.bool,
};

export default BlogPost;
