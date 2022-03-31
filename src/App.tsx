import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './contents/Home';
import { About } from './contents/About';
import { Education } from './contents/Education';
import { Skills } from './contents/Skills';
import { Contact } from './contents/Contact';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

// https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711