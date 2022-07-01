import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { About } from "./about";
import  Resume from "./resume";
import { Portfolio } from './portfolio';
import { Contact } from './contact';
import HomePage from "./home-page";
import { NavBarSection } from "./nav-bar-section/nav-bar-section";


function App() {
    return (
    <div className="App">
      <div className="fixed-header">
        <p>SHEETAL R PRASAD</p>
      </div>
      <Router> 
        <NavBarSection></NavBarSection>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
      </Router>
      <div className="fixed-footer">
        <p>hyperspace</p>
        <a href="https://sheetalrprasad.github.io/" target="_blank" rel="noreferrer">sheetalrprasad</a>
      </div>
    </div>
  );
}

export default App;
