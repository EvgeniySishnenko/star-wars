import React, { useEffect, useState, useRef } from "react";
export default function usePolling(url, interval, initialDate) {
  const [data, setData] = useState(initialDate);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const dataRef = useRef();
  const timestampRef = useRef();

  useEffect(() => {
    if (data) {
      dataRef.current = data.url;
    }

    if (dataRef.current !== url) {
      let timerId = setTimeout(() => {
        if (timestampRef.current === timestamp) {
          fetch(`${url}`)
            .then((response) => response.json())
            .then((result) => {
              setData(result);
              setIsLoading(true);
            })
            .catch((e) => setError(e))
            .finally(function () {
              setInterval(() => {
                setIsLoading(false);
              }, interval);
            });
        }
      }, interval);
      const timestamp = timerId;
      timestampRef.current = timestamp;
    }
  }, [url]);
  // console.log(data);

  return [data, isLoading, hasError];
}
