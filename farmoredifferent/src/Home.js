import React from 'react';

import ArticleList from './stories/ArticleList';

import {
  NavLink
} from "react-router-dom";

import stories from './storiesMetadata';
import Menu from './Menu';

function Home() {
  return (
    <div className="App">

      <Menu />
      
      <div className="main_content">

        <div className="massive_title">farmoredifferent.com</div>


        <br></br>
        <br></br>
        <h2 className="left">Stories:</h2>
        <ArticleList articles={stories} />
      </div>
    </div>


  )
}

export default Home;