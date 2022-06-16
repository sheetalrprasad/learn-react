import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { About } from "./about";
import { Resume } from './resume';
import { Portfolio } from './portfolio';
import { Contact } from './contact';
import HomePage from "./home-page";


function App() {
  return (
    <div className="App">
        <HomePage></HomePage>
        <Router>  
            <Routes>
                <Route path="/about" element={ About } />
                <Route path="/resume" element={ Resume } />
                <Route path="/portfolio" element={ Portfolio } />
                <Route path="/contact" element={ Contact } />
                <Route path="/" element={ HomePage } />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
