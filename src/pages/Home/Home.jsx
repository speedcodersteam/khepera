import React from 'react'
import './home.css';
import titleImg from "../../assets/title.png";
import hintOne from "../../assets/eye.png";
import Preloader from '../Preloader/Preloader';

export default function Home() {
  return (
    <section>
    <Preloader/>
    <div class='container'>
      <div className="secondContainer">
        <div class='grid'>
        <div class='header'>
          <div class='title'>
            <img src={titleImg} alt="title" />
            <p className='caption'>find the stashed</p>
          </div>
        </div>
        <div class='imageContent'>
          <img src={hintOne} alt="eye" />
        </div>
        <div class='footer'>
          <p className='hintOne'>"hint goes here"</p>
        </div>
      </div>
      </div>
    </div>
  </section>  
  )
}
