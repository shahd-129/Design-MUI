import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Theme from './Components/Theme';

function App() {
  return (<>
   <ThemeProvider theme={Theme}> 
        <CssBaseline />
        <Navbar />
        <Home />
        <Services />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
  </>
  );
}

export default App;
