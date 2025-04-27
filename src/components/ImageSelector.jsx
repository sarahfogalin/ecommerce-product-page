import React, { useState } from "react";

/*
  Render the list of thumbnail images.
  Highlights the currently selected thumbnail with "active" class.
  Calls handleImageSelect when a thumbnail is clicked.
*/
const renderImageThumbnails = (images, handleImageSelect, selectedIndex) => (
  <div className="thumbnails">
    {images.map((image, idx) => (
      <div className={`image-wrapper ${idx === selectedIndex ? "active" : ""}`}>
        <img
          src={image.thumbnail}
          alt={image.alt}
          className={`thumbnail-img`}
          onClick={() => handleImageSelect(idx)}
        />
        <div className="overlay"></div>
      </div>
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

  // Update the selected image when a thumbnail is clicked
  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-selector-container">
      {/* Main large image */}
      <img
        src={images[currentImageIndex].main}
        alt={images[currentImageIndex].alt}
        className="main-img"
      />

      {/* Thumbnail list */}
      {renderImageThumbnails(images, handleImageSelect, currentImageIndex)}
    </div>
  );
};

export default ImageSelector;
