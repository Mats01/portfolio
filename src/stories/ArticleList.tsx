import React from 'react';
import { Link } from "react-router-dom";
import './Stories.css';

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

const ArticleList: React.FC<ArticleListProps> = ({ articles, book }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <Link 
          key={index}
          to={article.path} 
          className="article-link"
        >
          <article className="article-card">
            <div className="article-header">
              <h2 className="article-title">{article.name}</h2>
              {article.year && <span className="article-year">{article.year}</span>}
            </div>
            
            <div className="article-meta">
              {book ? (
                <>
                  <span className="meta-item">Finished {article.published}</span>
                  {article.author && <span className="meta-item author">by {article.author}</span>}
                </>
              ) : (
                <>
                  <span className="meta-item">Published {article.published}</span>
                  <span className="meta-item">Updated {article.lastUpdated}</span>
                </>
              )}
            </div>
            
            {!book && article.summary && (
              <p className="article-summary">{article.summary}</p>
            )}
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
