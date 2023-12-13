import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log(url);
        const response = await axios.get(url);
        if (!response.data) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.data;

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, error, loading];
};

export default useFetch;
