// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//
// // Pages ----------------------
//
// const Home = () => {
//   return <h2>Home</h2>;
// };
//
// const Gallery = () => {
//   return <h2>Gallery</h2>;
// };
//
// const About = () => {
//   return <h2>About</h2>;
// };
//
// // Routing --------------------
//
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <div>
//           <Link to="/">Home</Link>
//           <Link to="/gallery">Gallery</Link>
//           <Link to="/about">About</Link>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/gallery" element={<Gallery />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
//
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App(){
  return(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/Home" element={<Banner />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App;
