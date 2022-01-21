import React from "react";

const Project = ({
	id,
	name,
	imageSrc,
	deployedHref,
	githubHref,
	techUsed,
	description,
}) => {
	return (
		<div className="card col-md-5 col-lg-5 text-center p-2 m-2" id="project2">
			<div className="card-header">
				<button
					type="button"
					className="btn"
					className="card-title fw-bold"
					data-bs-container="body"
					data-bs-toggle="popover"
					data-bs-placement="bottom"
					data-bs-content={description}
				>
					<h3 className="card-title fw-bold">{name}</h3>
				</button>
			</div>

			<div className="card-body">
				<img
					src="./assets/image/project-country-travel-advisor.jpg"
					className="card-img"
					alt="image of project country travel advisor"
					data-bs-toggle="modal"
					data-bs-target="#subProject1Modal"
				/>

				<ul className="project-icons">
					<li
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						title="Link to the deployed website"
					>
						<a href={deployedHref}>
							<span className="project-icon">
								<i className="fa fa-internet-explorer"></i>
							</span>
						</a>
					</li>

					<li
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						title="Link to the Github Repository"
					>
						<a href={githubHref}>
							<span className="project-icon">
								<i className="fa fa-github-square"></i>
							</span>
						</a>
					</li>
				</ul>
			</div>

			<div className="card-footer">
				<p className="card-text">
					<small className="text-muted">Javascript / CSS / HTML</small>
				</p>
			</div>
		</div>
	);
};

export default Project;
