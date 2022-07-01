import './home-page.css';
import laptopImage from '../static/laptopwithLady.jpg'

import React from "react";

export function HomePage() {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='image1'>
            <img src={laptopImage} alt='lady with laptop' />
          </div>
        </div>
      
        <div className='col'>
          <div className="home-page">
            <h1>Hola!</h1><br />
            <h2>I'm a  <span>Software Engineer</span> specializing in building exceptional digital experiences. <br /><br/>Currently, I'm pursuing Master's Degree in Computer Science at <span><a href="https://www.sdsu.edu/" rel="noreferrer" target="_blank">San Diego State University</a></span>.</h2>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col quote'>
          <p>"The things we know the best are the things we haven't been taught"</p>
          <p>Luc de Clapiers</p>
        </div>
      </div>

    </div>
 
  );
}

// Photo by <a href="https://unsplash.com/@mikaylamallek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikayla Mallek</a> on <a href="https://unsplash.com/s/photos/laptop-with-girl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  