import React from 'react';
import './App.css';
import Header from 'pages/Header';
import About from 'pages/About';
import Projects from 'pages/Projects';
import GlobalStyles from 'styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;