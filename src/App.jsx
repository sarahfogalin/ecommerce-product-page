import "./css/main.css";

import NavBar from "./components/layout/NavBar";
import ImageSelector from "./components/product/ImageSelector";
import ProductCard from "./components/product/ProductCard";

/* import image data for reusable imageSelector component */
import images from './data/productImages.json';

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="main-page-container">
        <div className="product-container">
          <ImageSelector images={images} />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
