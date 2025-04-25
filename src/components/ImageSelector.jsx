import React, { useState } from "react";

const renderImageThumbnails = (images) => (
  <div className="thumbnails">
    {images.map((image) => (
      <img src={image.thumbnail} alt={image.alt} className="thumbnail-img" />
    ))}
  </div>
);

const ImageSelector = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      main: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      alt: "prouct-one",
    },
    {
      main: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      alt: "prouct-one",
    },
    {
      main: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      alt: "prouct-one",
    },
    {
      main: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      alt: "prouct-one",
    },
  ];

  return (
    <div className="image-selector-container">
      <img
        src={images[currentImageIndex].main}
        alt={images[currentImageIndex].alt}
        className="main-img"
      />
      {renderImageThumbnails(images)}
    </div>
  );
};

export default ImageSelector;
