

const ImageGallery = ({images}) => {
  return (
    <ul>
        {Array.isArray(images) &&
          images.map((image) => {
            return (
              <li key={image.id}>
                <img
                  width={250}
                  src={image.urls.small}
                  alt={image.description}
                />
                <h2>{image.user.username}</h2>
                <h3>{image.user.location}</h3>
                {/* <h3>published_at</h3> */}
              </li>
            );
          })}
      </ul>

  )
}

export default ImageGallery