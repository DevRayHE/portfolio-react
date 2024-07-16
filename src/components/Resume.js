import React from "react";

const Resume = () => {
	return (
		<div className="resume align-items-center">
			<section id="Resume">
				<header id="resume-header" className="text-center">
					<h2 className="border-bottom border-secondary border-3 fw-bold align-items-center">
						Resume
					</h2>
          <p>Download My <a href="https://drive.google.com/uc?id=1J8OHu3SpcXOmHne54nIKYocgq7dlln8G&export=download">resume</a></p>
				</header>
        
				<article className="text-center">

          <h3 className="text-center">
            Languages:
          </h3>
          <ul>
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>

          <h3>
            Backend:
          </h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Sequelize</li>
          </ul>

          <h3>
            Frontend:
          </h3>
          <ul>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>SASS/SCSS</li>
          </ul>

          <h3>
            Testing:
          </h3>
          <ul>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>

          <h3>
            APIs:
          </h3>
          <ul>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

          <h3>
            Tools:
          </h3>
          <ul>
            <li>Git/GitHub</li>
            <li>Docker</li>
            <li>AWS (Lambda, ECS, Route 53, CloudFront, SQS)</li>
          </ul>
				</article>
			</section>
		</div>
	);
};

export default Resume;
