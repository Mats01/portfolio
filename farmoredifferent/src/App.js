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
        <Story content={story} />
      </Route>

    )
  });

  return (
    <Router>
      <Switch>

        {routesList}

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <>
            <div className="page_404">
              <br />
              <br />
              <h1>404</h1>
              <br />
              <br />
              <div>
                <Link to="/">Back home</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </>
        </Route>
      </Switch>
    </Router>

  );
}


export default App;
