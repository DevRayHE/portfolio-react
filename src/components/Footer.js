import React from "react";

const Footer = () => {
	return (
		<div class="container">
			<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div class="col-md-4 d-flex align-items-center">
					<a
						href="/"
						class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
					>
						{/* <svg class="bi" width="30" height="24">
							<use href="#bootstrap"></use>
						</svg> */}
					</a>
					<span class="text-muted">© 2022 Developed by Ray He</span>
				</div>

				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Sent me an Email!">
						<a class="text-muted" href="mailto:devrayhe@gmail.com">
							<span class="contact-icon email">
								<i class="fa fa-envelope"></i>
							</span>
						</a>
					</li>
					<li class="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Checkout my Github">
						<a class="text-muted" href="https://github.com/DevRayHE">
							<span class="contact-icon github">
								<i class="fa fa-github"></i>
							</span>
						</a>
					</li>
          <li class="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="My Linkedin Page">
						<a class="text-muted" href="https://www.linkedin.com/in/ray-he-8217711a0">
							<span class="contact-icon linkedin">
								<i class="fa fa-linkedin"></i>
							</span>
						</a>
					</li>
					<li class="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Download my resume">
						<a class="text-muted" href="https://drive.google.com/uc?id=1J8OHu3SpcXOmHne54nIKYocgq7dlln8G&export=download">
							<span class="contact-icon file">
								<i class="fa fa-file"></i>
							</span>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
