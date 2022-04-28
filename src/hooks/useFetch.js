import { useEffect, useState } from "react";

//커스텀 훅
export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
