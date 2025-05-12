import React from "react";
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Hero3 from "./Components/Hero3";
import Hero4 from "./Components/Hero4";
import Hero5 from "./Components/Hero5";
import Hero6 from "./Components/Hero6";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero1 />} />
          <Route path="/hero2" element={<Hero2 />} />
          <Route path="/hero3" element={<Hero3 />} />
          <Route path="/hero4" element={<Hero4 />} />
          <Route path="/hero5" element={<Hero5 />} />
          <Route path="/hero6" element={<Hero6 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
