import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Proyects from './components/Proyects/Proyects';
import Tech from './components/Tech/Tech';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AboutMe/>
      <Tech/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
