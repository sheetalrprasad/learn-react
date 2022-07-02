import './resume.css';
import logo from '../static/logo.png'
import connectwise from '../static/bg-cw-vert-master.png'
import capco from '../static/capco.png'


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
                            <p>Innovative and deadline-driven Software Engineer with four years of experience designing and developing user-centered business management softwares. Based in San Diego.</p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='resume-professional-history'>
                        <div className='section'>
                            <img src={connectwise} alt='connectwise'></img> 
                            <div className='para'>
                                <p>Designed and developed the ticketing system for a unified platform based service.
                                    Developed microservices in Go-lang.
                                    Used Kafka for message publication and PostgreSQL for database management.
                                    Best coding practices applied to keep the code coverage above 95%.
                                </p>
                            </div>
                        </div>
                        <div className='section'>
                            <img src={capco} alt='capco'></img> 
                            <div className='para'>
                                <p>Worked on development of web application – data collection, system interaction with Rest API services and database.
                                    Successful launched a web-based application, replacing the existing system with Appway Client Onboarding System - developed from scratch.
                                    Coached team members on technologies used in project.
                                    Experience of working with a geographically distributed team.
                                </p>
                            </div>
                        </div>
                        <div className='section'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}