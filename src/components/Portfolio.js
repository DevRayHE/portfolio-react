import React from 'react';
import Project from './Project';

const projectData = [
  {
    id:1,
    name: "Fit-Mate Fitness Tracker",
    imageSrc: "../assets/image/fit-mate.jpg",
    deployedHref: "https://morning-fortress-74236.herokuapp.com",
    githubHref: "https://github.com/DevRayHE/fit-mate",
    techUsed: "Node.js / Express.js / MySQL / Handlebars / MVC",
    description: "FitMate is an app for everyone who loves exercising. FitMate is a one-stop app to track your excercises and calories burnt daily. Losing weight isn't easy - we know. Study after study has confirmed the benefits of keeping track of the exercise activity you do. It's simple - the more consistently you track your exercises, the more likely you are to lose weight. That's why every successful weight management program suggests that you keep an activity log. But recording all the exercises without the right tools can be tedious at best, or simply impossible at worst. Hence we developed FitMate."
  },
  {
    id:2,
    name: "Travel Advisor",
    imageSrc: "../assets/image/project-country-travel-advisor.jpg",
    deployedHref: "https://n1cholassmith.github.io/country-travel-advisor/",
    githubHref: "https://github.com/DevRayHE/country-travel-advisor",
    techUsed: "Javascript / CSS / HTML",
    description: "The Country Travel Advisor is your digital travel guide and an essential tool for planning a successful holiday, honeymoon or weekend getaway! The Country Travel Advisor utilizes Public API's and cutting edge features to organize the relevant information required to successfully navigate through any country you desire. The Country Travel Advisor was designed with a minimalistic approach, to display only relevant information to avoid decision paralysis and streamline your holiday experience before you have even left the house."
  },
  {
    id:3,
    name: "Weather Dashboard",
    imageSrc: "../assets/image/weather-dashboard-2.jpg",
    deployedHref: "https://devrayhe.github.io/weather-dashboard/",
    githubHref: "https://github.com/DevRayHE/weather-dashboard",
    techUsed: "Javascript / CSS / HTML",
    description: "Responsive Weather Dashboard site that displays live realworld weather data with 5 days forecast"
  },
]


const Portfolio = () => {
  return (
    <div className="card-group">
      <div 
      className="row" 
      // style="justify-content: space-evenly"
      >
        {projectData.map(eachProject => <Project {...eachProject} key={eachProject.id}/>)}
      </div>
    </div>
  );
};

export default Portfolio;
