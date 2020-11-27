
import React from 'react';
import ReactMarkdown from "react-markdown";



class Story extends React.Component {
  state = {
    markdown: ''
  }

  componentWillMount() {
    fetch(this.props.content).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }



  render() {
    const { markdown } = this.state;

    return (
      <div className="App">
        <div className="massive_title">farmoredifferent.com</div>
        <br></br>
        <br></br>
        <h2>Stories:</h2>
        
        <ReactMarkdown source={this.state.terms} />
        
      </div>
    )
  }

}



export default Story;
