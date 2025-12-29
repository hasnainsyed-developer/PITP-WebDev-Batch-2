import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Products from "./pages/Products";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Navbar title="Text Tools" />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
};

export default App;