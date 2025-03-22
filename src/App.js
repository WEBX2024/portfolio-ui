import React from "react";
import "./index.css";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
