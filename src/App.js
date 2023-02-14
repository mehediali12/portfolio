import "./App.scss";
import Hero from "./Components/Hero/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <main className='app'>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
