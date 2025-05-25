import React from 'react';
import { Link } from "react-router-dom";

interface Article {
  path: string;
  name: string;
  year?: string;
  published: string;
  lastUpdated: string;
  summary: string;
  author?: string;
}

interface ArticleListProps {
  articles: Article[];
  book?: boolean;
}

class ArticleList extends React.Component<ArticleListProps> {
  render() {
    const { articles, book } = this.props;
    const articleList = articles.map((article, index) => {
      return (
        <Link 
          key={index}
          to={article.path} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="single_article">
            {article.year && <h2>{article.year}</h2>}
            <h3>{article.name}</h3>
            {book ? (
              <>
                <p><span className="tech_label">finished: </span>{article.published}</p>
                {article.author && <p className="article_summray">{article.author}</p>}
              </>
            ) : (
              <>
                <p>
                  <span className="tech_label">published: </span>{article.published}
                  <span className="tech_label">last updated: </span>{article.lastUpdated}
                </p>
                <p className="article_summray">{article.summary}</p>
              </>
            )}
          </div>
        </Link>
      );
    });
    
    return <>{articleList}</>;
  }
}

export default ArticleList;
