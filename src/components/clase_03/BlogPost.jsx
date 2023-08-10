import PropTypes from "prop-types";
import ToggleButton from "./ToggleButton";
import "./blogpost.css";

function BlogPost({ title, tags = [], footer, children }) {
  return (
    <article
      className="blogpost"
      style={{
        textAlign: "center",
        margin: "5px auto",
        border: "solid 1px white",
      }}
    >
      <ToggleButton className="like-button">❤</ToggleButton>
      <h3>{title}</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {children}
      <small>
        {footer}
        Gracias por leernos. BlogReact2023.
      </small>
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
