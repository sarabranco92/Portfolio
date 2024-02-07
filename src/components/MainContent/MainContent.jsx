// src/components/MainContent.jsx
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Portfolio from '../Portfolio/portfolio';
import Skills from '../Skills/skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/footer';
import "../../style/_main.scss";

function MainContent() {
  return (
    <> 
    <div className='background'>
      <Navbar />
      <Presentation />
      <Skills />
       <Portfolio />
      <Contact />
      </div>
      <Footer />
    </>
  );
}

export default MainContent;
