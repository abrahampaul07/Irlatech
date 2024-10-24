// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Services from "./Components/Pages/Services.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx"; // Import the ScrollToTop component
import usePullToRefresh from './hooks/usePullToRefresh'; // Import the custom hook

function App() {
  usePullToRefresh(); // Use the pull-to-refresh hook

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
