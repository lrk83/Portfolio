import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//Pages
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectsPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';

//App Structure
function App() {
  return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path='/projects' component={ProjectPage}/>
            <Route path='/resume' component={ResumePage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='*' component={HomePage}/>
          </Switch>
          <Footer />
        </main>
      </Router>
  );
}

export default App;
