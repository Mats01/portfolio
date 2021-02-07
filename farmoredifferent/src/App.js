import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import './AppMobile.css';
import Story from './stories/Story';




import Home from './Home';

import { books, stories, weeklyStory } from './storiesMetadata';
import Contact from './Contact';


function App() {

  let routesList = stories.map(story => {
    return (

      <Route path={story.path}>
        <Story content={story} />
      </Route>

    )
  });

  routesList = routesList.concat(books.map(story => {
    return (

      <Route path={story.path}>
        <Story content={story} />
      </Route>

    )
  }))


  return (
    <Router>
      <Switch>

        {routesList}

        <Route exact path="/weekly">
          <Story content={weeklyStory} weekly={true} />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/books">
          <Home bookList={true} />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
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
