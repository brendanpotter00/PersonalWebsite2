import React from 'react'
import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import InterestsPage from './Pages/InterestsPage';
import ContactsPage from './Pages/ContactsPage';
import {Switch, Route} from 'react-router-dom';
import react, {useState} from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1">

        </div>
        <div className="lines-2">
          
        </div>
        <div className="lines-3">
          
        </div>
      </div>
      <div className="main-content">
        <div className="content">
          <HomePage />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectPage />
            </Route>
            <Route path="/interests" exact>
              <InterestsPage />
            </Route>
            <Route path="/contacts" exact>
              <ContactsPage />
            </Route>
          </Switch>
        </div>
      </div>   
    </div>
  )
}

export default App;

