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
      <div class='grid'>
        <div class='header'>
          <div class='title'>
            <img src={titleImg} alt="title" />
            <p className='caption'>Find it & Free</p>
          </div>
        </div>
        <div class='imageContent'>
          <img src={hintOne} alt="eye" />
        </div>
        <div class='footer'>
          <p className='hintOne'>"Unlocking the mysteries of the past often requires attention to the smallest details. Keep your eyes open for subtle clues hiding in plain sight; sometimes, the key to unraveling a puzzle lies in the most unexpected places. Trust your instincts and explore every avenue, for every piece of information could be a stepping stone toward discovery."</p>
        </div>
      </div>
    </div>
  </section>  
  )
}
