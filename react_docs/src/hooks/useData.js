import { useState, useEffect } from "react";

export function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          if (!ignore) {
            setData(result);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return data;
}
