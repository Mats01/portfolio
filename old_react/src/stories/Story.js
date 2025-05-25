import React from 'react';
import ReactMarkdown from "react-markdown";
import './Stories.css';
import Menu from '../menu/Menu';
import SideContent from '../side_content/SideContent';


function Story(props) {

    const [markdown, setMarkdown] = React.useState();

    React.useEffect(() => {
        fetch(props.content.story).then((response) => response.text()).then((text) => {
            setMarkdown(text)
            window.scrollTo(0, 0)
        })
    }, [props.content])



    // componentDidMount() {
    //   fetch(props.content.story).then((response) => response.text()).then((text) => {
    //     this.setState({ terms: text })
    //   })
    // }

    function flatten(text, child) {
        return typeof child === 'string' ?
            text + child :
            React.Children.toArray(child.props.children).reduce(flatten, text)
    }

    function HeadingRenderer(props) {
        var children = React.Children.toArray(props.children)
        var text = children.reduce(flatten, '')
        var slug = text.toLowerCase().replace(/\W/g, '-')
        return React.createElement('h' + props.level, { id: slug }, props.children)
    }


    return ( <
        div className = "App" >

        <
        Menu / >
        <
        div class = "content_wrapper" >
        <
        div className = "blog_content" >
        <
        h1 > { props.content.name } < /h1> {
            props.weekly === true ?
                <
                > < /> :
                <
                >
                <
                span > published: < /span>{props.content.published}<br></br >
                <
                span > last updated: < /span>{props.content.lastUpdated} <
                />
        }


        <
        ReactMarkdown source = { markdown }
        renderers = {
            { heading: HeadingRenderer } }
        /> <
        /div> <
        SideContent / >

        <
        /div>

        <
        /div>
    )


}



export default Story;