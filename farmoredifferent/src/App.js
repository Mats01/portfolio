import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Story from './story/Story';

const articles = [
  {
    name: "Pomodoro",
    year: "2015",
    story: "/stories/2015-summer-project.html",
    link: "https://pomodorowebapp.appspot.com/",
    tech: "Google App Engine (Python)"

  },
  {
    name: "Dayty",
    year: "2015",
    story: "/stories/2015-summer-project.html",
    link: "https://pomodorowebapp.appspot.com/",
    tech: "Google App Engine (Python)"

  }
]

class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    const articleList = articles.map(article => {
      return (
        <>
          <div class="timeline_content">
            <h2>{article.year}</h2>
            <h3><a href={article.story}>
              {article.name}
            </a></h3>
            <a href={article.link} target="_blank">{article.link}</a>
            <p><span class="tech_label">tech:</span> {article.tech}</p>
          </div>

        </>
      )
    });
    return (
      <>
        {articleList}
      </>
    )

  }
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/story">Story</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
function Home() {
  return (
    <div className="App">
      <div className="massive_title">farmoredifferent.com</div>
      <br></br>
      <br></br>
      <h2>Stories:</h2>
      <ArticleList articles={articles} />
    </div>
  )
}

export default App;
