import React from 'react'
import './home.css';
import ParticleEffect from '../ParticlesEffect/ParticleEffect';
import AfterCountdown from '../AfterCountdown/AfterCountdown';

export default function Home() {
  return (
    <div>
      <div className="fire">
        <ParticleEffect/>
        <AfterCountdown/>
      </div>
    </div>
  )
}
