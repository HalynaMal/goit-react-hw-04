import { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";

import './App.css'

// {
//   "id": 206,
//   "title": "Makers: Cat and Ben",
//   "description": "Behind-the-scenes photos from the Makers interview with designers Cat Noone and Benedikt Lehnert.",
//   "published_at": "2016-01-12T18:16:09-05:00",
//   "last_collected_at": "2016-06-02T13:10:03-04:00",
//   "updated_at": "2016-07-10T11:00:01-05:00",
//   "featured": false,
//   "total_photos": 12,
//   "private": false,
//   "share_key": "312d188df257b957f8b86d2ce20e4766",
//   "cover_photo": null,
//   "user": null,
//   "links": {
//     "self": "https://api.unsplash.com/collections/206",
//     "html": "https://unsplash.com/collections/206/makers-cat-and-ben",
//     "photos": "https://api.unsplash.com/collections/206/photos"
//   }
// }

function App() {
  // 1. Оголошуємо стан
  const [images, setImages] = useState(null)
  
  useEffect(() => {
    async function fetchImages() {
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=Py_iDo0pAQqvEYoMBPZrJ7mc9_8W17Y3JqrImjifwlY"
      );
      console.log(data);
      setImages(data.urls);
    }
    fetchImages();
  }, [])

  
  
  return (
    <div>
      <h1>Collection img</h1>
      <ul>
        {images.map(image => {
          return (<li key={image.id}>
          <img width={250} src="" alt={image.title} />
          <h2>{image.title}</h2>
          <p>{image.description}</p>
          <h3>{image.published_at}</h3>
        </li>)
        }) }
        
      </ul>
    </div>
  );
}

export default App
