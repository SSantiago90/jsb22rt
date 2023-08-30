import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ProductCardDetail from "./ProductCardDetail";
import { Link } from "react-router-dom";

function DetailContainer({ buy = false }) {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlAPI = new URL("https://dummyjson.com");
    urlAPI.pathname = `/products/${idProduct}`;

    //const url = `https://dummyjson.com/products/${idProduct}`

    (async function fetchData() {
      const res = await fetch(urlAPI);

      const jsonData = await res.json();
      setProduct(jsonData);
      setIsLoading(false);
    })();
  }, [idProduct]);

  return (
    <div>
      {isLoading ? (
        <FallingLines />
      ) : (
        <ProductCardDetail buy={buy} item={product} />
      )}
      <Link to={`/store/detail/${1 + parseInt(idProduct)}`}>
        Ir al siguiente
      </Link>
    </div>
  );
}

export default DetailContainer;
