import { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";

import './App.css'

function App() {
  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );

      // 2. Записуємо дані в стан
      setArticles(response.data.hits);

			console.log(response);
    }

    fetchArticles();
  }, []);

  
  return (
    <>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
