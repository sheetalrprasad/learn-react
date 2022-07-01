import './resume.css';
import logo from '../static/s.png'

import React from "react";

export function Resume(){
    return (
        <div>
            <div className="row resume">
                <div className="col">
                    <div className='resume-title'>
                        <h3>Resume</h3>
                        <h5>Professional Experience</h5>
                    
                        <div className='resume-image'>
                            <img src={logo} alt='sheetal'></img>
                        </div>

                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='resume-professional-history'>
                        <div className='section'>

                        </div>
                        <div className='section'>

                        </div>
                        <div className='section'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}