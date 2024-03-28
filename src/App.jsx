import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { requestImages, requestImagesByQuery } from "./components/services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

// "urls": {
//     "raw": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
//     "full": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390",
//     "regular": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
//     "small": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
//     "thumb": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
//   },

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
 

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages();
        setImages(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await requestImagesByQuery(query);
        setImages(data.images);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [query]);




  const onSetSearcheQuery = (searchTerm) => {
    setQuery(searchTerm)
  }

  return (
    <div>
      <h1>Gallary Collection</h1>
      <SearchBar onSetSearchQuery={onSetSearcheQuery}/>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message />}
      {images && <ImageGallery images={images} />}
    </div>
  );
}

export default App;
