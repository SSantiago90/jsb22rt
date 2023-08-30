import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import ProductsList from "./ProductsList";

function StoreContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // IIFE -> Inmeditely Invoked Function Expression
    (async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const jsonData = await res.json();
      setProducts(jsonData.products);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {isLoading ? <FallingLines /> : <ProductsList products={products} />}
    </div>
  );
}

export default StoreContainer;
