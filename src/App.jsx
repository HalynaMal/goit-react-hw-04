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

// "urls": {
//     "raw": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
//     "full": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390",
//     "regular": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
//     "small": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
//     "thumb": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
//   },

function App() {
  
  const [images, setImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    async function fetchImages() {
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=Py_iDo0pAQqvEYoMBPZrJ7mc9_8W17Y3JqrImjifwlY"
      );
      // console.log(data);
      setImages(data.small);
      setIsLoading(false)
    }
    fetchImages();
  }, [])

   
  return (
    <div>
      <h1>Collection img</h1>
      {isLoading && <div>Loading...</div> }
      <ul>
        {Array.isArray(images) && images.map(image => {
          return (
            <li key={image.id}>
              <img width={250} src={image.small} alt={image.title} />
              <h2>{image.title}</h2>
              <p>{image.description}</p>
              <h3>{image.published_at}</h3>
            </li>
          );
        }) }
        
      </ul>
    </div>
  );
}

export default App
