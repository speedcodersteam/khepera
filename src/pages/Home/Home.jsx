import React from 'react';
import './home.css';
import { HintContentes } from './Contents/HintContentes';
import { MailSent } from './MailSent/MailSent';
import titleImg from "../../assets/title.png";
import Preloader from '../Preloader/Preloader';
import ScrollDown from '../ScrollDown/ScrollDown';

export default function Home() {

  const content = HintContentes.find(item => item.id === 3);

  return (
    <section>
      <Preloader/>
      <div className='container'>
        <div className="secondContainer">
          {content && (
            <div className='grid' key={content.id}>
              <div className='header'>
                <div className='title'>
                  <img src={titleImg} alt="title" />
                  <p className='caption'>Find The Treasure</p>
                </div>
              </div>
              <div className='imageContent'>
                <img src={content.image} alt="eye" />
              </div>
              <div className='footer'>
                <span className='hint'>Here's the Tip</span>
                <div className='scrollDown-container'>
                  <div className='hintContent'>
                    <p>{content.description}</p>
                    <div className='messageContainer'>
                      <MailSent/>
                    </div>
                  </div>
                  <div className="scrollDown">
                    <ScrollDown/>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
