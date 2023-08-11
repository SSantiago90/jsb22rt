import PropTypes from "prop-types";
import ToggleButton from "../UI/ToggleButton";
import "./blogpost.css";
import { useState } from "react";
function BlogPost({ title, tags = [], footer, children }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function onToggle(value) {
    setIsFavorite(value);
  }

  return (
    <article className={`blogpost ${isFavorite && "favorite"}`}>
      <ToggleButton onToggle={onToggle} className="like-button">
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
        <br />
        <small>
          <i>Gracias por leernos. BlogReact2023.</i>
        </small>
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  children: PropTypes.element,
  tags: PropTypes.array,
};

export default BlogPost;
