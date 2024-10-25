import { useEffect, useState } from "react";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const res = await fetch(url);
    const json = await res.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, [url]);  // Add dependency array to avoid infinite loop

  return { finalData };  // Return the data object
}
