import React from "react";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				{/* Collapse navigate button on small size screen  */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapseToggler"
					aria-controls="navbarCollapseToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapseToggler">
					<ul className="navbar-nav me-auto mb-2 mb-sm-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#home">
								<h5>Home</h5>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								<h5>ABOUT</h5>
							</a>
						</li>
						{/* dropdown nav item */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="dropdown03"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<h5>PORTFOLIO</h5>
							</a>
							<ul className="dropdown-menu" aria-labelledby="dropdown03">
								<li>
									<a className="dropdown-item" href="#project1">
										Fit Mate
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#project2">
										Country Travel Advisor
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#project3">
										Weather Dashboard
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								<h5>CONTACT</h5>
							</a>
						</li>
            <li className="nav-item">
							<a className="nav-link" href="#resume">
								<h5>RESUME</h5>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
