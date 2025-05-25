import React from 'react';

import Menu from './menu/Menu';
import ArticleList from './stories/ArticleList';
import { stories } from './App';
// import Projects from './projects/Projects';



function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Added dependency array

  return (
    <div className="App">
      <Menu />
      <div className="content_wrapper">
      <div className="main_content">
          <div className="massive_title">farmoredifferent.com</div>

              <h2 className="left">Stories:</h2>
              <ArticleList articles={stories} />

        </div>
      </div>
    </div>
  );
}

export default Home;