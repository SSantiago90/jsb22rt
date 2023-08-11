import React from "react";

function VideoPlayerContainer() {
  return (
    <div>
      <Menu />
      <Player />
      <RelatedVideos />
      <Comments />
    </div>
  );
}

function Menu() {
  <nav>
    <h4>MiLogo</h4>
    <input name="search" placeholder="buscar"></input>
  </nav>;
}

function Player() {
  <div>
    <img src="http://loremflickr.com/800/500" alt="video player" />
    <div>
      <button>Play</button>
      <button>Pause</button>
    </div>
  </div>;
}

function RelatedVideos() {}

function Comments() {
  const postsComments = [
    { user: "Juanen", message: "Hola" },
    { user: "Gador", message: "Gracias por el video!" },
  ];

  return postsComments.comments.map((comentario) => (
    <p>{comentario.message}</p>
  ));
}

export default VideoPlayerContainer;
