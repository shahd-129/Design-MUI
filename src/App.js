import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Theme from './Components/Theme';
import Counter from 'Components/Counter';
import Clients from 'Components/Clients';

function App() {
  return (<>
   <ThemeProvider theme={Theme}> 
        <CssBaseline />
        <Navbar />
        <Home />
        <Services />
        <About />
        <Counter/>
        <Projects />
        <Clients/>
        <Contact />
      </ThemeProvider>
  </>
  );
}

export default App;
