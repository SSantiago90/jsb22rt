import PropTypes from "prop-types";
import ToggleButton from "../UI/ToggleButton";
import "./blogpost.css";

function BlogPost({ title, tags = [], footer, children }) {
  return (
    <article className="blogpost">
      <ToggleButton className="like-button">❤</ToggleButton>
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
