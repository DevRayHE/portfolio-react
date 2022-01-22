import React from 'react';
import Project from './Project';
import Data from '../ProjectData.json';

const Portfolio = () => {
  return (
    <div className="card-group">
      <div 
      className="row" 
      // style="justify-content: space-evenly"
      >
        {Data.projectData.map(eachProject => <Project {...eachProject} key={eachProject.id}/>)}
      </div>
    </div>
  );
};

export default Portfolio;
