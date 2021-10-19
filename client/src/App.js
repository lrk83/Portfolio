import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//Pages
import HomePage from './Pages/HomePage';

//App Structure
function App() {
  return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path='*' component={HomePage}/>
          </Switch>
          <Footer />
        </main>
      </Router>
  );
}

export default App;
