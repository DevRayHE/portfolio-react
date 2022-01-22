import React, {useState} from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import './sass/main.sass';

function App() {

  // useState to set which page to render
  const [currentPage, setPageChange] = useState('');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "About":
  //       return <About />;
  //       // break;

  //     case "Portfolio":
  //       return <Portfolio />;
  //       // break;
      
  //     case "Contact":
  //       return <ContactForm />;
  //       // break;

  //     case "Resume":
  //       return <Resume />;
  //       // break;

  //     default:
  //       return <About />;
  //   }
  // }

  return (
    <div className="App">
      <Header currentPage={currentPage} setPageChange={setPageChange} />
      <MainContainer currentPage={currentPage} setPageChange={setPageChange}/>
      {/* <MainContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
