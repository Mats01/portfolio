import React from 'react';
import ReactMarkdown from "react-markdown";
import './Stories.css';


import {
  NavLink
} from "react-router-dom";


class Story extends React.Component {
  state = {
    markdown: ''
  }

  componentWillMount() {
    fetch(this.props.content.story).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    const { markdown } = this.state;

    return (
      <div className="App">
        <div className="main_aside">
          <div className="asside_wrapper" >

            <h4>NAVIGATION</h4>
            <nav role="navigation" className="navbar">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/pomodoro" activeClassName="selected_link">Pomodoro</NavLink>
                </li>
              </ul>
            </nav>

          </div>
        </div>
        <div className="blog_content">
          <h1>{this.props.content.name}</h1>
          <p><span class="tech_label">published: </span>{this.props.content.published}</p>
          <p><span class="tech_label">last updated: </span>{this.props.content.lastUpdated}</p>



            <ReactMarkdown source={this.state.terms} />
          </div>

      </div>
    )
  }

}



export default Story;
