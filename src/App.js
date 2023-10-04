import React from 'react';
import WindmillNav from './component/navmune';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './component/about';
import ContactPage from './component/contact';
import EducationPage from './component/education';
import ProjectPage from './component/project';
import WorkPage from './component/work';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WindmillNav />}/>
          <Route path="/home" element={<WindmillNav />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} index />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
        <div className='Footer'><nav>
          © copywrite by Bob Zhao 
          </nav>
          
          <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer">
            
          <img className='linkin' src='./linkin.jpg' alt='linkin'  />
          </a>
          </div>
      </div>
    </Router>
  );
}

export default App;
