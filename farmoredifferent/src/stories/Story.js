import React from 'react';
import ReactMarkdown from "react-markdown";



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
        <h1>{this.props.content.name}</h1>
        <p><span class="tech_label">published: </span>{this.props.content.published}</p>
        <p><span class="tech_label">last updated: </span>{this.props.content.lastUpdated}</p>
        

        
        <ReactMarkdown source={this.state.terms} />
        
      </div>
    )
  }

}



export default Story;
