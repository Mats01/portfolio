import React from 'react';
import ReactMarkdown from "react-markdown";
import './Stories.css';
import Menu from '../menu/Menu';

interface StoryProps {
  content: {
    name: string;
    story: string;
    published: string;
    lastUpdated: string;
  };
  weekly?: boolean;
}

function Story({ content, weekly }: StoryProps) {
  const [markdown, setMarkdown] = React.useState<string>();

  React.useEffect(() => {
    fetch(content.story)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
        window.scrollTo(0, 0);
      });
  }, [content]);

  function flatten(text: string, child: React.ReactNode): string {
    return typeof child === 'string'
      ? text + child
      : '';
  }

  interface HeadingProps {
    level: number;
    children: React.ReactNode;
  }

  function HeadingRenderer({ level, children }: HeadingProps) {
    const childrenArray = React.Children.toArray(children);
    const text = childrenArray.reduce(flatten, '');
    const slug = text.toLowerCase().replace(/\W/g, '-');
    return React.createElement(`h${level}`, { id: slug }, children);
  }

  return (
    <div className="App">
      <Menu />
      <div className="content_wrapper">
        <div className="blog_content">
          <h1>{content.name}</h1>
          {weekly ? null : (
            <>
              <span>published: </span>
              {content.published}
              <br />
              <span>last updated: </span>
              {content.lastUpdated}
            </>
          )}
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Story;