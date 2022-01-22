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
            <li>CSS3</li>
            <li>HTML5</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>

          <h3>
            Applications:
          </h3>
          <ul>
            <li>Github</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQL</li>
          </ul>

          <h3>
            Tools:
          </h3>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Handlebars</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>PWA</li>
          </ul>
				</article>
			</section>
		</div>
	);
};

export default Resume;
