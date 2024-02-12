import React, { useEffect } from 'react';
import gsap from 'gsap';
import './preload.css';
import imageOne from "../../assets/bg3.jpg";
import imageFour from "../../assets/bg9.jpg";

const Preloader = () => {
    useEffect(() => {
        const handleClick = () => {
            
            gsap.to("h2 div", 1.5, {
                yPercent: -100,
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            });

            gsap.to("h2", 1.5, {
                clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            }, 0);

            gsap.to(".overlay", 2, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
            });

            gsap.to(".img", 2, {
                clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 1.5,
                },
            });

            gsap.to(".loader", 2, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
                delay: 2,
            });
        };

        document.querySelector(".overlay").addEventListener("click", handleClick);

        return () => {
            document.querySelector(".overlay").removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className='preloadcontainer'>
            <div className='loader'>
                <div className='img'>
                    <img src={imageOne} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageFour} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageOne} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageFour} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageOne} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageFour} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageOne} alt='imgOne'/>
                </div>
            </div>
            <div class='overlay'>
                <div class='col'>
                    <h2><div>An portugese</div></h2>
                    <h2><div>An portugese</div></h2>
                    <h2><div>An portugese</div></h2>
                </div>
                <div class='col'>
                    <h2>
                        <div><span>Click</span> anywhere to continue</div>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
