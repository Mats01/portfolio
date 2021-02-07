import React from 'react';

import ArticleList from './stories/ArticleList';



import { stories, books } from './storiesMetadata';
import Menu from './Menu';
import SideContent from './SideContent';

function Home(props) {
  return (
    <div className="App">

      <Menu />
      <div class="content_wrapper">
        <div className="main_content">

          <div className="massive_title">farmoredifferent.com</div>



          {props.bookList == true ?
            <>

              <h2 className="left">Books:</h2>
              <ArticleList articles={books} />
            </>
            :
            <>
              <h2 className="left">Stories:</h2>
              <ArticleList articles={stories} />
            </>
          }
        </div>
        <SideContent />
      </div>
    </div>


  )
}

export default Home;