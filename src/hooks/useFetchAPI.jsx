import { useState, useEffect } from "react";

function useFetchAPI(endpoint, deps = []) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      // respuesta HTTP
      const res = await fetch(endpoint);
      // datos JSON
      const dataJSON = await res.json();
      setData(dataJSON);
      setIsLoading(false);
    }
    fetchData();
  }, [...deps, endpoint]);

  return { data, isLoading };
}

export default useFetchAPI;
