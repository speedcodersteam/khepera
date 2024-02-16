import eyeofra from "../../assets/eyeofra.png";
import eyeofhorus from "../../assets/eyeofhorus.png";
import ankh from "../../assets/ankh.png";

import eyeofrabutton from "../../assets/eyeofrabutton.png";
import eyeofhorusbutton from "../../assets/eyeofhorusbutton.png";
import ankhbutton from "../../assets/ankhbutton.png";

const Data = [
  { 
    id: 1, 
    src: ankh, 
    btn:ankhbutton,
    alt: '2', 
    title: 'Ankh',
    subTitle: 'Symbol of creation and life',
    description : "You may find it,\nWhere there's neither end nor beginning,\nLike the cycle of life...."
  },
  { 
    id: 2, 
    src: eyeofhorus,
    btn:eyeofhorusbutton,
    alt: '3',
    title: 'Eye of horus',
    subTitle: 'Symbol of protection and sky', 
    description : "If you are looking for horus's eye,\nLook far and beyond,\nTo the hawk soaring sky...."
  },
  { 
    id: 3, 
    src: eyeofra, 
    btn:eyeofrabutton,
    alt: '1', 
    title: 'Eye of Ra',
    subTitle: 'Symbol of kings and order',
    description : "Seek for the eye of greate God ra,\nFulfill your destiny fulfill your task,\nThen you shall grant the new life's heart...."
  },
];

export default Data;