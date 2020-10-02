import React from 'react';
import './App.css';
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'
import Aside from './components/layouts/Aside'

const App = () => {
  return (
    <div className="App">
      <header className="header">
      <Nav />
      <Aside />
      </header>
      <Footer />
    </div>
  );
}

export default App;
