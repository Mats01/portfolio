import React from 'react';
import ReactMarkdown from "react-markdown";
import './Stories.css';
import Menu from '../menu/Menu';
import type { StoryType } from '../App';


function Story({ story }: {story: StoryType}) {
  const [markdown, setMarkdown] = React.useState<string>();

  React.useEffect(() => {
    console.log(story);
    fetch(`./stories_markdown/${story.path}.md`)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
        window.scrollTo(0, 0);
      });
  }, [story]);


  return (
    <div className="App">
      <Menu />
      <div className="content_wrapper">
        <div className="blog_content">
          <h1>{story.name}</h1>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Story;