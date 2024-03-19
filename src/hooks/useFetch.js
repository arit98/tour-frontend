import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);

        if (!res.statusText == "OK") {
          setError("failed to fetch");
        }
        setData(res.data.data);
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData()
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;