import logo from './logo.svg';
import './App.css';
import { NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import SkillsSection from './components/Skills';
import {Projects } from './components/projects';
import {Contact } from './components/Contact';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
    </div>
   

  );
}

export default App;
