import React from "react";

const Navigation = ({ currentPage, setPageChange }) => {
	// Taking currentPage and setPageChange props from Header, which is From MainContainer, to set current display page
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="navbar__container container-fluid">
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
						{/* <li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#home">
								<h5>Home</h5>
							</a>
						</li> */}
						<li className="nav-item">
							<a 
							className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
							href="#about" 
							onClick={() => setPageChange('About')}>
								<h5>ABOUT</h5>
							</a>
						</li>
						{/* dropdown nav item */}
						<li className="nav-item dropdown">
							<a
								className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
								// className="nav-link dropdown-toggle"
								href="#Portfolio"
								// id="dropdown03"
								// data-bs-toggle="dropdown"
								// aria-expanded="false"
								onClick={() => setPageChange('Portfolio')}
							>
								<h5>PORTFOLIO</h5>
							</a>
							{/* <ul className="dropdown-menu" aria-labelledby="dropdown03">
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
							</ul> */}
						</li>
						<li className="nav-item">
							<a 
							className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
							href="#contact" 
							onClick={() => setPageChange('Contact')}>
								<h5>CONTACT</h5>
							</a>
						</li>
            <li className="nav-item">
							<a 
							className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
							href="#resume" 
							onClick={() => setPageChange('Resume')}>
								<h5>RESUME</h5>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
