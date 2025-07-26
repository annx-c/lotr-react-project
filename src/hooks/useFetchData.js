import { useState, useEffect } from "react";

export default function useFetchData(selection) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2";

  useEffect(() => {
    if (!selection) return;

    setLoading(true);

    const apiToken = process.env.REACT_APP_API_KEY;

    const options = {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${apiToken}`,
      },
    };

    async function fetchData() {
      const url = `${apiUrl}/${selection}`;
      try {
        const res = await fetch(url, options);
        const jsonData = await res.json();
        console.log("data: ", jsonData);
        setData(jsonData);
      } catch (error) { 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selection]); // ✅ ahora sin warnings

  return { data, error, loading };
}
