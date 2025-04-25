import { useState } from "react";
import "./css/main.css";

import NavBar from "./components/NavBar";
import ImageSelector from "./components/ImageSelector";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="main-page-container">
        <ImageSelector />
      </div>
    </div>
  );
}

export default App;
