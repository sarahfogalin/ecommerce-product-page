import React, { useState } from "react";

/*
  Thumbnail component - handles individual thumbnail logic.
  
  Props:
    - image: object with {main, thumbnail, alt} fields.
    - isSelected: boolean indicating if this thumbnail is the currently active one.
    - onSelect: callback to update selected image.
    - index: position of this thumbnail in the images array.

  Features:
    - Highlights the currently selected thumbnail by adding "active" class.
    - Clickable and keyboard-accessible (Enter key) with role="button" and tabIndex=0.
*/
const Thumbnail = ({ image, isSelected, onSelect, index }) => (
  <div
    className={`image-wrapper ${isSelected ? "active" : ""}`}
    key={image.thumbnail}
    onClick={() => onSelect(index)}
    onKeyDown={(e) => e.key === "Enter" && onSelect(index)}
    role="button"
    tabIndex={0}
  >
    <img
      src={image.thumbnail}
      alt={image.alt}
      className="thumbnail-img"
    />
    <div className="overlay"></div>
  </div>
);

/*
  ThumbnailList component - renders a group of Thumbnail components.
  
  Props:
    - images: array of image objects.
    - selectedIndex: currently active thumbnail index.
    - onSelect: function to update selected image.
*/
const ThumbnailList = ({ images, selectedIndex, onSelect }) => (
  <div className="thumbnails">
    {images.map((image, idx) => (
      <Thumbnail
        key={image.thumbnail}
        image={image}
        isSelected={idx === selectedIndex}
        onSelect={onSelect}
        index={idx}
      />
    ))}
  </div>
);

/*
  ImageSelector component - main wrapper that manages image selection state.
  
  Props:
    - images: array of image objects, each with:
      - main: string (URL for full-size image)
      - thumbnail: string (URL for thumbnail image)
      - alt: string (alt text for accessibility)

  Behavior:
    - Displays the currently selected large image.
    - Renders a list of thumbnails below.
    - Updates the main image when a thumbnail is clicked or activated with keyboard.
*/
const ImageSelector = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
      <ThumbnailList
        images={images}
        selectedIndex={currentImageIndex}
        onSelect={handleImageSelect}
      />
    </div>
  );
};

export default ImageSelector;
