import "./css/main.css";

import NavBar from "./components/layout/NavBar";
import Gallery from "./components/product/Gallery";
import ProductCard from "./components/product/ProductCard";

/* import image data for reusable Gallery component */
import images from "./data/productImages.json";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="main-page-container">
        <div className="product-container">
          <Gallery images={images} />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
