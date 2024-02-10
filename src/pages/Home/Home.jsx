import React from 'react'
import './home.css';
import Countdown from '../CountDown/Countdown';
import ParticleEffect from '../ParticlesEffect/ParticleEffect';

export default function Home() {
  return (
    <>
    <div className="fire">
      <ParticleEffect/>
    </div>
    <Countdown/>
    </>
  )
}
