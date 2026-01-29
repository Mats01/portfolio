import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    const articleList = articles.map(article => {
      return (
        <>
          <div class="timeline_content">
            <h2>{article.year}</h2>
            <h3><Link to={article.path}>
              {article.name}
            </Link></h3>
            <a href={article.link} target="_blank">{article.link}</a>
            <p><span class="tech_label">tech:</span> {article.tech}</p>
            <p><span class="tech_label">published: </span>{article.published}</p>
            <p><span class="tech_label">last updated: </span>{article.lastUpdated}</p>
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

export default ArticleList;

