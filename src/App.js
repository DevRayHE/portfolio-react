import React from 'react';
import './sass/main.sass';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
