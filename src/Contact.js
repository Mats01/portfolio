import React from 'react';
import portrait from './portrait_2020.jpg'
import Menu from './menu/Menu';
import SideContent from './side_content/SideContent';


function Contact() {
    return (
        <div className="App">

            <Menu />
            <div className="content_wrapper">
                <div className="main_content">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="container contact_container">
                        <div className="contact_gird">
                            <div className="contact_element">
                                <h3>Name:</h3>
                                <p>Matej Butković</p>
                            </div>
                            <div className="contact_element">
                                <h3>Email:</h3>
                                <p>farmoredifferent@gmail.com</p>
                            </div>

                            <div className="contact_element">
                                <h3>Website:</h3>
                                <p><a href="farmoredifferent.com"> farmoredifferent.com </a></p>
                            </div>

                            <div className="contact_element">
                                <h3>GitHub:</h3>
                                <p><a href="https://github.com/Mats01"> https://github.com/Mats01 </a> </p>
                            </div>


                        </div>

                    </div>



                    <div className="container contact_container">
                        <h1>About me</h1>
                        <div className="portrait">
                            <img className="portrait_img" src={portrait} alt="Matej Butkovic" />
                        </div>

                        <h4>Matej Butkovic</h4>
                        <h2>Who am I?</h2>
                        <p>I am a 21-year-old student from Pula, Croatia currently studying at FER (at University of Zagreb). I’m an
                            amateur full-stack web developer and I like to build things on the web to solve problems and gain new skills.</p>
                        <h2>What is this website for?</h2>
                        <p>I started this website as a place for my project to live on the web. It’s a place for me to share my thoughts
                        and ideas as well as showcase my work. Here I’m also writing stories about the projects I worked on or simply
                        about things that interest me. And finally, this is a place to connect with people who share my interests.
                            So if you find what you see here interesting, feel free to let me know through the contact form above. </p>
                        <h2>What kind of stories to expect?</h2>
                        <p>I don’t have a rule for what I’ll write about. I’ll certainly document my progress on new projects I work on,
                        but I may also sometimes come up with a story on a completely unrelated topic that interests me. If there is
                        something you would like to see me write about I would be more than happy to hear suggestions or tips, again
                            there’s a contact form above. </p>
                    </div>
                </div>

                <SideContent />
            </div>
        </div>


    )
}

export default Contact;
