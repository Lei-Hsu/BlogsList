import { useEffect } from "react";

export default function useFetch(url, setBlogs) {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [url, setBlogs]);
}
