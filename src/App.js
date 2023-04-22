<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Footer from "./container/footer/Footer";
import Blog from "./container/blog/Blog";
import CTA from "./components/cta/CTA";
import Possibility from "./container/possibility/Possibility";
import Features from "./container/features/Features";
import WhatGPT3 from "./container/whatGPT3/WhatGPT3";
import Brand from "./components/brand/Brand";
import Header from "./container/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
=======
import React from 'react';
=======
import React from "react";
>>>>>>> 1d79f35 (resolve merge conflict)

import { Footer, Blog, Possibility, Features, WhatIs, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";

<<<<<<< HEAD
import './App.css';
>>>>>>> 848d075 (adjust contents)
=======
import "./App.css";
>>>>>>> 1d79f35 (resolve merge conflict)

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatIs />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
