import { useState, useEffect } from "react";

function GifsContainer() {
  const [gifList, setGifList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const apiKey = "k2RQbvIcCMif1lrQBdyO6umYZv9Kb6q5";
    const baseurl = `http://api.giphy.com/v1/gifs/search`;
    const params = `?api_key=${apiKey}&q=pokemon&limit=10`;

    const url = baseurl + params;

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => setGifList(jsonData.data));
  }, [search]);

  return (
    <div>
      <h1>Gifs</h1>
      <input
        onChange={(evt) => {
          setSearch(evt.target.value);
        }}
        placeholder="buscar"
      ></input>
      {gifList.map((gif) => (
        <div key="">
          <p>{gif.title}</p>
          <img
            src={gif.images.downsized_large.url}
            alt={gif.title}
            width="400"
          />
        </div>
      ))}
    </div>
  );
}

export default GifsContainer;
