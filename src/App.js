import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import WhyRockiniT from "./components/WhyRockiniT";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Features />
      <WhyRockiniT />
      <AboutUs />
    </div>
  );
}

export default App;
