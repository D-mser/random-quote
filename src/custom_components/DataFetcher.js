import { useState, useEffect } from "react";

export default function DataFetcher(props) {
  const [status, setStatus] = useState({ loading: true, error: "" });
  const [data, setData] = useState(null);

  async function fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data });
        setStatus((prevStatus) => ({ ...prevStatus, loading: false }));
      })
      .catch((error) =>
        setStatus((prevStatus) => ({ ...prevStatus, error: error }))
      );
  }

  useEffect(() => {
    fetchData(props.url);
  }, [props.url]);

  return props.children({ data: data, status: status });
}
