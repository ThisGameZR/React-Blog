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
>>>>>>> 6f9db3f (cta component)

function App() {
  return (
    <div className="App">
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
