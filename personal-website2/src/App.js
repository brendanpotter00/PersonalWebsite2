import React from 'react'
import './App.scss';
import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import InterestsPage from './Pages/InterestsPage';
import ContactsPage from './Pages/ContactsPage';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>

      <div className="main-content">
        <div className="content">
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

