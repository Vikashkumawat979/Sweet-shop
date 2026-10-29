import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Sweets from "./components/Sweets";
import Savories from "./components/Savories";
import Bakes from "./components/Bakes";
import Contact from "./components/Contact";

import "./App.css";



function App() {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("APP CART UPDATED:", cart);
  }, [cart]);

  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        cart={cart}
        setCart={setCart}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/sweets"
          element={
            <Sweets
              searchText={searchText}
              cart={cart}
              setCart={setCart} />}
        />
        <Route
          path="/savories"
          element={
            <Savories
              searchText={searchText}
              cart={cart}
              setCart={setCart} />}

        />
        <Route
          path="/bakes"
          element={
            <Bakes
              searchText={searchText}
              cart={cart}
              setCart={setCart} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import "./App.css";
// import About from "./components/About";
// import Awards from "./components/Awards";
// import Sweets from "./components/Sweets";
// import Savories from "./components/Savories";
// import Bakes from "./components/Bakes";
// import Contact from "./components/Contact";
// import {Routes, Route} from 'react-router-dom';
// import Home from "./components/Home";


// function App() {
//   const [searchText, setSearchText] = useState("");
//   return (
//     <>
//       <Routes>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/sweets" element={<Sweets />}></Route>
//         <Route path="/savories" element={<Savories />}></Route>
//         <Route path="/bakes" element={<Bakes />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//       <Navbar 
//         searchText={searchText}
//         setSearchText={setSearchText}
//       />
//       <Hero />
//       <Features />
//       <Home /> 
//       <About />
//       <Awards />
//       <Sweets searchText={searchText} />
//       <Savories searchText={searchText} />
//       <Bakes searchText={searchText} />
//       <Contact />
//     </>
//   );
// }

// export default App;