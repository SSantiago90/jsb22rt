import { useState } from "react";
import { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";

function Store() {
  const [itemList, setItemList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch(
        "https://fakestoreapi.com/products/categories/"
      );
      const data = await respuesta.json();
      setCategories(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setItemList([]);
    async function fetchData() {
      const url = activeCategory
        ? `https://fakestoreapi.com/products/category/${activeCategory}`
        : "https://fakestoreapi.com/products/";

      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setItemList(data);
      setIsLoading(false);
    }
    fetchData();
  }, [activeCategory]);

  return (
    <div>
      <h1>Nuestra tienda</h1>
      <h3>Descubre nuestros productos</h3>
      {categories.map((category) => (
        <button onClick={() => setActiveCategory(category)} key={category}>
          {category}
        </button>
      ))}

      {isLoading ? (
        <div>
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        itemList.map((item) => (
          <article key={item.id}>
            <img width="250" src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <strong>Precio: ${item.price}</strong>
          </article>
        ))
      )}
    </div>
  );
}

export default Store;
