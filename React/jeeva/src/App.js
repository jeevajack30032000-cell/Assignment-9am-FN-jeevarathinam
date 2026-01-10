import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home.js/Home";
import About from "./home.js/About";
import Contact from "./home.js/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
