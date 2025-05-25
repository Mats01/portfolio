import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import './AppMobile.css';
import Home from './Home';


interface StoryContent {
  path: string;
  name: string;
  story: string;
  published: string;
  lastUpdated: string;
  summary: string;
}

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
          path="/" 
          element={<Navigate to="/home" replace />} 
        />

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
