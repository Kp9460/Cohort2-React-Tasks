import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./pages/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/Men" element={<Men />} />
        <Route path="/Product/Women" element={<Women />} />
      </Routes>
    </div>
  );
};

export default App;