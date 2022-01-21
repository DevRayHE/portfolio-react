import React from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <About />
      <Portfolio />
    </div>
  );
};

export default MainContainer;
