import './App.css';
import Home from './View/Home';
import Navbar from './View/Navbar'
import Services from './View/Services'
import About from './View/About'
import Projects from './View/Projects';
import Contact from './View/Contact';
// import {Contact} from './View/Contact';
function App() {
  return (<>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Projects/>
    <Contact/>
  </>
  );
}

export default App;
