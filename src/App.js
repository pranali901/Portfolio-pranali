import logo from './logo.svg';
import './App.css';
import { NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import SkillsSection from './components/Skills';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SkillsSection/>
    </div>
   

  );
}

export default App;
