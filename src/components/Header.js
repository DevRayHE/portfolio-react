import React from "react";
import Navigation from './Navigation';

const Header = ({ currentPage, setPageChange }) => {
	return (
		<header
			id="top-nav-bar"
			className="header linear-gradient-background-header sticky-top p-0"
		>
			{/* Passing down currentPage and SetPageChange states as props to Navigation child component */}
      <Navigation currentPage={currentPage} setPageChange={setPageChange}/>
		</header>
	);
};

export default Header;
