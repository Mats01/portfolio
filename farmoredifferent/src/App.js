import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Story from './stories/Story';


import Home from './Home';

import stories from './storiesMetadata';


function App() {

  const routesList = stories.map(story => {
    return (
      
        <Route path={story.path}>
          <Story content={story}/>
        </Route>

    )
  });

  return (
    <Router>
        <Switch>
          
          {routesList}

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

  );
}


export default App;
