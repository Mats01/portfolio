import React from 'react';

import ArticleList from './stories/ArticleList';

import stories from './storiesMetadata';

function Home() {
  return (
    <div className="App">
      <div className="massive_title">farmoredifferent.com</div>
      <br></br>
      <br></br>
      <h2>Stories:</h2>
      <ArticleList articles={stories} />
    </div>
  )
}

export default Home;