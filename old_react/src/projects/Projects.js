import React from 'react';

import './Projects.css';

import pomodoro from './pomodoro.png'
import dayty from './dayty.png'
import csscolourgame from './csscolourgame.png'
import rcn from './rcn.png'

export default function Projects(){
    return(
        <>
        <h3>My projects hosted on this domain:</h3>

        <div className="projects_wrapper">
            <div className="project_item">
                <div className="project_image" style={{ 
                    backgroundImage: `url("${pomodoro}")` 
                }} />
                <a target="_blank" href="https://pomodoro.farmoredifferent.com/">pomodoro.farmoredifferent.com</a>
            </div>


            <div className="project_item">
                <div className="project_image" style={{ 
                    backgroundImage: `url("${rcn}")` 
                }} />
                <a target="_blank" href="https://rcn.farmoredifferent.com/">rcn.farmoredifferent.com</a>
            </div>
            
            <div className="project_item">
                <div className="project_image" style={{ 
                    backgroundImage: `url("${csscolourgame}")` 
                }} />
                <a target="_blank" href="https://csscolorgame.farmoredifferent.com/">csscolorgame.farmoredifferent.com</a>
            </div>

            <div className="project_item">
                <div className="project_image" style={{ 
                    backgroundImage: `url("${dayty}")` 
                }} />
                <a target="_blank" href="/">dayty.farmoredifferent.com</a><br/>(temporairly offline)
            </div>

        </div>
        </>
    )
}