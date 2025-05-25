import React from 'react';

import Menu from './menu/Menu';
import ArticleList from './stories/ArticleList';
// import Projects from './projects/Projects';



export const stories = [
  {
    name: "Dayty: Phase 1",
    story: "dayty1",
    path: "/Dayty-Phase-1",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "Defining models, choosing a CSS framework, populating the admin panel, and adding basic views",

  },
  {
    name: "Dayty: Phase 0 (Starting a Django project)",
    story: "dayty0",
    path: "/Dayty-Phase-0",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "A Django project",

  },
  {
    name: "Developer Journal: Making the Dayty App",
    story: "dayty",
    path: "/Developer-Journal-Making-the-Dayty-App",
    published: "May 8, 2020",
    lastUpdated: "May 8, 2020",
    summary: "This story is the spring board off of which I'm jumping into making a brand new productivity app. I'll be writing the story in phases as follow up stories to this one",

  },
  {
    name: "Reversed Citations Needed",
    story: "reversedCitationsNeeded",
    path: "/Reversed-Citations-Needed",
    published: "Apr 24, 2020",
    lastUpdated: "Apr 24, 2020",
    summary: "This is the story of how I built my first progressive web app and how I learned what a PWA even is.",

  },
  {
    name: "My 2015 summer project",
    story: "pomodorowebapp",
    path: "/my-2015-summer-project",
    published: "Apr 23, 2020",
    lastUpdated: "Apr 30, 2020",
    summary: "A story about my first project, and how it got me started on being a coder.",

  },
];

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