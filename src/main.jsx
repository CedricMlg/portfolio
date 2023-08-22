import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";
import "./style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="*" element={<Error />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/project/:id" element={<Project />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/work" element={<Work />} />
    </Routes>
  </Router>
);
