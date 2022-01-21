import React from "react";
import Nav from './Nav';

const Header = () => {
	return (
		<header
			id="top-nav-bar"
			className="linear-gradient-background-header sticky-top p-0"
		>
      <Nav />
		</header>
	);
};

export default Header;
