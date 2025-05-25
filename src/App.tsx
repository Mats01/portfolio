import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import './AppMobile.css';
import Home from './Home';
import Story from './stories/Story';
import  { ProjectsPage } from './Projects';


export type StoryType = {
  path: string;
  name: string;
  story: string;
  published: string;
  lastUpdated: string;
  summary: string;
}



export const stories: StoryType[] = [
  {
    name: "Dayty: Phase 1",
    story: "dayty1",
    path: "/Dayty_Phase_1",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "Defining models, choosing a CSS framework, populating the admin panel, and adding basic views",

  },
  {
    name: "Dayty: Phase 0 (Starting a Django project)",
    story: "dayty0",
    path: "/Dayty_Phase_0_Starting_a_Django_project",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "A Django project",

  },
  {
    name: "Developer Journal: Making the Dayty App",
    story: "dayty",
    path: "/Developer_Journal_Making_the_Dayty_App",
    published: "May 8, 2020",
    lastUpdated: "May 8, 2020",
    summary: "This story is the spring board off of which I'm jumping into making a brand new productivity app. I'll be writing the story in phases as follow up stories to this one",

  },
  {
    name: "Reversed Citations Needed",
    story: "reversedCitationsNeeded",
    path: "/Reversed_Citations_Needed",
    published: "Apr 24, 2020",
    lastUpdated: "Apr 24, 2020",
    summary: "This is the story of how I built my first progressive web app and how I learned what a PWA even is.",

  },
  {
    name: "My 2015 summer project",
    story: "pomodorowebapp",
    path: "/My_2015_summer_project",
    published: "Apr 23, 2020",
    lastUpdated: "Apr 30, 2020",
    summary: "A story about my first project, and how it got me started on being a coder.",

  },
];

function App() {
  // const routesList = [...stories, ...books].map((story: StoryContent) => (
  //   <Route 
  //     key={story.path}
  //     path={story.path} 
  //     element={<Story content={story} />} 
  //   />
  // ));

  return (
    <HashRouter>
      <Routes>


        {/* <Route 
          path="/contact" 
          element={<Contact />} 
        /> */}

        <Route 
          path="/home" 
          element={<Home />} 
        />

        <Route 
          path="/projects" 
          element={<ProjectsPage />} 
        />
       

        <Route 
          path="/" 
          element={<Navigate to="/home" replace />} 
        />

        {stories.map((story: StoryType) => (
          <Route 
            key={story.path}
            path={story.path} 
            element={<Story story={story} />} 
          />
        ))}



        <Route 
          path="*" 
          element={
            <div className="page_404">
              <br />
              <br />
              <h1>404</h1>
              <br />
              <br />
              <div>
                <Link to="/">Back home</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          } 
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
