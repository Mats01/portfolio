import React from 'react';

import {
  Link
} from "react-router-dom";

class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    const articleList = articles.map(article => {
      return (
        <Link to={article.path} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="single_article">
            <h2>{article.year}</h2>
            <h3>
              {article.name}
            </h3>
            {this.props.book === true ?
              <>
                <p><span className="tech_label">finished: </span>{article.published} </p>
                <p className="article_summray">{article.author}</p>
              </>
              :
              <>
                <p><span className="tech_label">published: </span>{article.published}   <span className="tech_label">last updated: </span>{article.lastUpdated}</p>
                <p className="article_summray">{article.summary}</p>
              </>
            }
          </div>

        </Link>
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

