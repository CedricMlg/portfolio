import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";
import "./style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
