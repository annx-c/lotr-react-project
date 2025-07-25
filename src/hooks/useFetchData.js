import { useState, useEffect } from "react";

export default function useFetchData(selection) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2";
  const apiToken = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!selection) {
      return
    }
     
    async function fetchData() {
      const url = apiUrl + "/" + "book";
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selection]);

  return {data, error, loading};
}
