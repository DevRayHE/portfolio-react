import React from 'react';
import Project from './Project';
import Data from '../ProjectData.json';

const Portfolio = () => {
  return (
    <>
      <header className="portfolio__header text-center">
        <h2 className="border-bottom border-secondary border-3 fw-bold align-items-center">
          Portfolio
        </h2>
      </header>
      <div className="portfolio card-group">
        <div 
        className="row portfolio__row" 
        // style="justify-content: space-evenly"
        >
          {Data.projectData.map(eachProject => <Project {...eachProject} key={eachProject.id}/>)}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
