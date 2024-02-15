import React from 'react'
import './Final.css';
import ParticleEffect from '../ParticlesEffect/ParticleEffect';
import item1Img from '../../assets/item1.png';

export default function Final() {
  return (
    <div>
        <ParticleEffect/>
        <div className="title">
          <h1>Congratulations</h1>
        </div>
        <div className="wrapper">
        <div className="itemContainer">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
        </div>
        </div>
    </div>
  )
}
