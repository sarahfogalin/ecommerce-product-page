import { useState } from "react";
import "./css/main.css";

import NavBar from "./components/layout/NavBar";
import ImageSelector from "./components/product/ImageSelector";
import ProductCard from "./components/product/ProductCard";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="main-page-container">
        <div className="product-container">
          <ImageSelector />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
