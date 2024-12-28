// import React from 'react'
// import Banner from './layout/banner.jsx' // Import the Banner component
// function App() {
//   return (
//     <div>
//         <Banner/>

//     </div>
//   )
// }

// export default App





import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competence from "./pages/Competence";
import Projets from "./pages/Projets";
import About from "./pages/About";
import Banner from "./layout/banner";
import Footer from "./layout/footer";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competence" element={<Competence />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
