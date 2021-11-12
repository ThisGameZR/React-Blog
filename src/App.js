<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Blog from "./container/blog/Blog";
=======
import React from 'react';
import Footer from './container/footer/Footer';
import './App.css';
import Blog from './container/blog/Blog';
import CTA from './components/cta/CTA';
<<<<<<< HEAD
>>>>>>> 6f9db3f (cta component)
=======
import Possibility from './container/possibility/Possibility';
<<<<<<< HEAD
>>>>>>> 9683040 (possibility section)
=======
import Features from './container/features/Features';
<<<<<<< HEAD
>>>>>>> 67431ef (features section)
=======
import WhatGPT3 from './container/whatGPT3/WhatGPT3';
>>>>>>> 9624a1b (what is section)

function App() {
  return (
    <div className="App">
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
