import "./App.scss";
import Hero from "./Components/Hero/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <main className='app'>
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
