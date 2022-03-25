import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { PageNotFound } from "./views/PageNotFound";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route key="home" path="/" element={<Home />} />
            <Route key="projects" path="/projects" element={<Projects />} />
            <Route key="404" path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
