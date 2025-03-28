import React from "react";
import "./index.css";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs.js";
import Contact from "./routes/Contact.js";
import Project from "./routes/Project.js";
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
