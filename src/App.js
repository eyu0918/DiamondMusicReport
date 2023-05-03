import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
