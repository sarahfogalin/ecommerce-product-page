import React, { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";

/*
  Thumbnail component - renders each individual thumbnail image.
  Highlights the selected thumbnail with a border and overlay.
  Supports both click and keyboard (Enter key) selection.
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
    <img src={image.thumbnail} alt={image.alt} className="thumbnail-img" />
    <div className="overlay"></div>
  </div>
);

/*
  ThumbnailList component - renders a row of thumbnails.
  Props:
    - images: array of image objects
    - selectedIndex: currently selected image index
    - onSelect: function to update selected image index
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
  Gallery component - main wrapper that manages selected image and transitions.
  Props:
    - images: array of { main, thumbnail, alt } image objects.
  Behavior:
    - Desktop: shows static main image and thumbnails.
    - Tablet/Mobile: uses arrow navigation with sliding transition animation.
*/
const Gallery = ({ images }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1119px)" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Refs for animated image nodes
  const nodeRefs = useRef(images.map(() => React.createRef()));

  // Navigate to next image (circular)
  const goNext = () => {
    setDirection("next");
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // Navigate to previous image (circular)
  const goPrev = () => {
    setDirection("prev");
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Select image via thumbnail (sets direction based on index diff)
  const handleImageSelect = (index) => {
    if (index > currentImageIndex) setDirection("next");
    else if (index < currentImageIndex) setDirection("prev");
    setCurrentImageIndex(index);
  };

  return (
    <div className="gallery-container">
      {/* Main image display */}
      <div className="main-img-container">
        {isTabletOrMobile ? (
          // Mobile/tablet version: sliding image animation with arrows
          <div className="slider-push-wrapper">
            <TransitionGroup className={`slider-push ${direction}`}>
              <CSSTransition
                key={images[currentImageIndex].main}
                timeout={400}
                classNames="push"
                nodeRef={nodeRefs.current[currentImageIndex]}
              >
                <img
                  ref={nodeRefs.current[currentImageIndex]}
                  src={images[currentImageIndex].main}
                  alt={images[currentImageIndex].alt}
                  className={`main-img ${images[currentImageIndex].alt}`}
                />
              </CSSTransition>
            </TransitionGroup>

            {/* Arrows shown only on tablet/mobile */}
            <div className="arrow-controls">
              <button onClick={goPrev} className="prev-arrow">
                <PreviousIcon width={6} height={12} />
              </button>
              <button onClick={goNext} className="next-arrow">
                <NextIcon width={6} height={12} />
              </button>
            </div>
          </div>
        ) : (
          // Desktop: static image with thumbnail selection
          <div className="image-wrapper">
            <img
              src={images[currentImageIndex].main}
              alt={images[currentImageIndex].alt}
              className={`main-img ${images[currentImageIndex].alt}`}
            />
          </div>
        )}
      </div>

      {/* Thumbnails (desktop only) */}
      {!isTabletOrMobile && (
        <ThumbnailList
          images={images}
          selectedIndex={currentImageIndex}
          onSelect={handleImageSelect}
        />
      )}
    </div>
  );
};

export default Gallery;
