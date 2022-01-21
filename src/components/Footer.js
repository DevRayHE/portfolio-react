import React from "react";

const Footer = () => {
	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<a
						href="/"
						className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
					>
						{/* <svg class="bi" width="30" height="24">
							<use href="#bootstrap"></use>
						</svg> */}
					</a>
					<span className="text-muted">© 2022 Developed by Ray He</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Sent me an Email!">
						<a className="text-muted" href="mailto:devrayhe@gmail.com">
							<span className="contact-icon email">
								<i className="fa fa-envelope"></i>
							</span>
						</a>
					</li>
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Checkout my Github">
						<a className="text-muted" href="https://github.com/DevRayHE">
							<span className="contact-icon github">
								<i className="fa fa-github"></i>
							</span>
						</a>
					</li>
          <li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="My Linkedin Page">
						<a className="text-muted" href="https://www.linkedin.com/in/ray-he-8217711a0">
							<span className="contact-icon linkedin">
								<i className="fa fa-linkedin"></i>
							</span>
						</a>
					</li>
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Download my resume">
						<a className="text-muted" href="https://drive.google.com/uc?id=1J8OHu3SpcXOmHne54nIKYocgq7dlln8G&export=download">
							<span className="contact-icon file">
								<i className="fa fa-file"></i>
							</span>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
