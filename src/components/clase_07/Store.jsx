import { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import ButtonChilds from "../clase_03/UI/Button2";
import useCounter from "../../hooks/useCounter";
import useFetchAPI from "../../hooks/useFetchAPI";

function Store() {
  const [activeCategory, setActiveCategory] = useState(null);

  const { data: categories } = useFetchAPI(
    "https://fakestoreapi.com/products/categories/"
  );

  const url = activeCategory
    ? `https://fakestoreapi.com/products/category/${activeCategory}`
    : "https://fakestoreapi.com/products/";

  const { data: itemList, isLoading: isLoadingItems } = useFetchAPI(url, [
    activeCategory,
  ]);

  //const itemList = responseHookFetch.data OK!✅
  //const isLoadingItems = responseHookFetch.isLoading OK!✅

  //const itemList = useFetchAPI(url, [activeCategory]).data; mal!🛑
  //const isLoadingItems = useFetchAPI(url, [activeCategory]).isLoading;mal!🛑

  return (
    <div>
      <h1>Nuestra tienda</h1>
      <h3>Descubre nuestros productos</h3>
      {categories.map((category) => (
        <button onClick={() => setActiveCategory(category)} key={category}>
          {category}
        </button>
      ))}

      {isLoadingItems ? (
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
          <ProductCard key={item.id} item={item}></ProductCard>
        ))
      )}
    </div>
  );
}

function ProductCard({ item }) {
  const { handleAdd, count } = useCounter(12);

  return (
    <article key={item.id}>
      <img width="250" src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <strong>Precio: ${item.price}</strong>
      <ButtonChilds onTouch={handleAdd} color="green">
        Comprar
      </ButtonChilds>
      <div style={{ color: "yellow", fontSize: "11px" }}>
        <p>Tienes {count} productos en el carrito</p>
      </div>
    </article>
  );
}

export default Store;
