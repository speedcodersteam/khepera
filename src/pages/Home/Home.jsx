import React from 'react'
import './home.css';
import titleImg from "../../assets/title.png";

export default function Home() {
  return (
    <section>
    <div class='container'>
      <div class='grid'>
        <div class='header'>
          <div class='title'>
            <img src={titleImg} alt="title" />
          </div>
        </div>
        <div class='imageContent'></div>
        <div class='footer'></div>
      </div>
    </div>
  </section>  
  )
}
