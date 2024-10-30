import './App.css';
import Home from './View/Home';
import Navbar from './View/Navbar'
import Services from './View/Services'
import About from './View/About'
import Projects from './View/Projects';
function App() {
  return (<>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Projects/>
  </>
  );
}

export default App;
