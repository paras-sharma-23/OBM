
import './App.css';
import About from './Component/About/About';
import Best from './Component/Bestservice/Best';
import Contact from './Component/Contact/Contact';
import Description from './Component/Description/Description';
import Faq from './Component/Faq/Faq';
import Home from './Component/Homepage/Home';
import Learn from './Component/Learn/Learn';
import Nav from './Component/Nav';
import Services from './Component/Ourservices/Services';
import Why from './Component/Whychoose/Why';


function App() {
  return (
    <>
    <Nav />
    <Home />
    <Services />
    <About />
    <Why />
    <Best />
    <Learn />
    <Description />
    <Contact />
    {/* <Faq /> */}
   
    </>
  );
}

export default App;
