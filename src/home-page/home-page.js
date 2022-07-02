import './home-page.css';
import laptopImage from '../static/laptopwithLady.jpg'


import React from "react";
import Typewriter from "typewriter-effect";


export function HomePage() {
  return (
    <div>
      <div className='row desktop'>
        
        <div className='col'>
          <div className='image1'>
            <img src={laptopImage} alt='lady with laptop' />
          </div>
        </div>
      
        <div className='col'>
          <div className="home-page">
            <h3>
              <Typewriter options={{ loop: true }} onInit={(typewriter)=> { typewriter
              .typeString("Hola !!! This is").pauseFor(1000).deleteAll()
              .typeString("<h1 class='change'>Hyperspace<h1>").pauseFor(5000).start();
              }} loop={true}
              />
            </h3>
          </div>
        </div>
      </div>
       
      {/* Mobile section starts */}
      <div className='row mobile'>
        <div className='col'>
            <div className='image1'>
              <img src={laptopImage} alt='lady with laptop' />
            </div>
        </div>
      </div>

      <div className='row mobile'>
        <div className='col'>
          <div className="home-page">
            <h1>
              <Typewriter options={{ loop: true }} onInit={(typewriter)=> { typewriter
              .typeString("Hola !!!").pauseFor(1000).deleteAll()
              .typeString("This is").pauseFor(500).deleteAll()
              .typeString("Hyperspace").pauseFor(5000).start();
              }} loop={true}
              />
            </h1>
          </div>
        </div>
      </div>
      {/* Mobile section ends */}

      <div className='row'>
        <div className='col section-border'>
          <div className='self'>
            <h3>Sheetal R Prasad</h3>
            <h4>I'm a  <span className='highlight'>Software Engineer</span> specializing in building exceptional digital experiences. <br />Currently, I'm pursuing Master's Degree in Computer Science at <br/> <span className='highlight'><a href="https://www.sdsu.edu/" rel="noreferrer" target="_blank">San Diego State University</a></span>.</h4>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='quote-bg'>
          <div className='col quote'>
            <p>"The things we know the best are the things we haven't been taught"</p>
            <p>Luc de Clapiers</p>
          </div>
        </div>
      </div>

    </div>
 
  );
}