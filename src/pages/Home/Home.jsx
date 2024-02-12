import React from 'react'
import './home.css';
import titleImg from "../../assets/title.png";
import hintOne from "../../assets/eye.png";
//import fireLamp from "../../assets/fire.png";

export default function Home() {
  return (
    <section>
    {/*<div className='fireContent'>
      <div className='fireLamp'>
        <div className='fireLamp fireLampOne'>
          <img src={fireLamp} alt="title" />
        </div>
      <div className='empty'></div>
        <div className='fireLamp fireLampTwo'>
          <img src={fireLamp} alt="title" />
        </div>
      </div>
    </div>*/}
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
          <div className="mummy"></div>
        </div>
      </div>
      </div>
    </div>
  </section>  
  )
}
