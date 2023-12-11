import React from 'react';
import './App.css';
import Header from 'pages/Header';
import About from 'pages/About';
import Projects from 'pages/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;