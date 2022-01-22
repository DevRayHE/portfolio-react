import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        {/* hero div with profile picture, takes 3/12 col on medium and up screen, full container widht on small screen  */}
        <div id="hero-div" className="about__image col-sm-12 col-md-3 text-center d-flex flex-column justify-content-center align-items-center">
          <section id="profile" className="hero">
            <img 
            // src={"../assets/image/profile-pic-resized.jpg"}
            src="https://github.com/DevRayHE/portfolio-react/blob/main/public/assets/image/profile-pic-resized.jpg?raw=true" 
            className="img-thumbnail rounded mx-auto d-blick" alt="Ray He profile"/>
            <div className="hero-text">
              <h1 className="fw-bold m-2"><p>Ray HE</p></h1>
              {/* <br> */}
              <p>Full Stack Web Developer</p>
            </div>
          </section>
      </div>
    {/* about section, takes full container withd on small screen, 9/12 col on medium and up screen  */}
    
      <div className="about__content col-sm-12 col-md-9">
        <section id="about">
          <header id="about-header" className="text-center">
            <h2 className = "border-bottom border-secondary border-3 fw-bold">ABOUT</h2>
          </header>
          <article>
            <p>
              Hi, I'm Ray He. <strong>Authentically loving the act of programming.</strong> Genuine and dedicated Full Stack Web developer with experience in Github version control, JavaScript, Node.js, Express.js, Sequelize, Handlebars, MySQL, CSS, HTML, currently studying MongoDB and React. I'm passionate about all things code, learning new things. In a previous career I was a customer service and sales team leader. Through teamwork and dedication, continuously achieved 4 years of monthly, quarterly and yearly customer experience and sales targets.  
            </p>
            <p>
              With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of UX and agile development in a recent project. I worked on a team of four to develop a web app that helps users to plan their travel by fetching data and scenery about the destination. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 
            </p>
            <p>
              My strengths include problem-solving, project management, and agile adaptation to last-minute support changes, which makes me an integral member of any team. 
            </p>
          </article>
        </section>
      </div>
    </div> 
    </div>   
  );
};

export default About;
