import React, {useState} from 'react';
import Header from './Header';
import About from './About';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import { render } from 'react-dom';

const MainContainer = () => {

  // useState to set which page to render
  const [currentPage, setPageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
        // break;

      case "Portfolio":
        return <Portfolio />;
        // break;
      
      case "Contact":
        return <ContactForm />;
        // break;

      case "Resume":
        return <Resume />;
        // break;

      default:
        return <About />;
    }
  }

  return (
    <div className="mainContainer">
      {/* Passing down currentPage and SetPageChange states as props to Header child component */}
      <Header currentPage={currentPage} setPageChange={setPageChange} />
      {/* <About />
      <Portfolio />
      <ContactForm />
      <Resume /> */}
      {renderPage()}
      <Footer />
    </div>
  );
};

export default MainContainer;
