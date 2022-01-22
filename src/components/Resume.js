import React from "react";

const Resume = () => {
	return (
		<div className="about__content col-sm-12 col-md-9">
			<section id="Resume">
				<header id="resume-header" className="text-center">
					<h2 className="border-bottom border-secondary border-3 fw-bold">
						Resume
					</h2>
				</header>
        <p>Download My <a href="https://drive.google.com/uc?id=1J8OHu3SpcXOmHne54nIKYocgq7dlln8G&export=download">resume</a></p>
				<article>

          <h3>
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
