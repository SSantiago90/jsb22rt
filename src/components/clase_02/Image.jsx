import "./image.css";

function Image({ circled, imgurl, alt }) {
  // circled = true --> estilizamos con bordes redondeados...

  const classNameImg = circled ? "image-rounded" : "image-squared";

  return (
    <div>
      <img className={classNameImg} alt={alt} src={imgurl} />
    </div>
  );
}

export default Image;
