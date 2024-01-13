import React from 'react';
import './App.css';
import Navbar from 'pages/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import GlobalStyles from 'styles/GlobalStyles';

const App: React.FC = () => {
  
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;