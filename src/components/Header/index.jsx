/*import React,{useRef} from 'react'
import "./Header.css"
import {profile1} from "../../images"
import Facts from './Facts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Header = () => {
  const container = useRef(null)
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    gsap.fromTo(".profile__photo__container",{
      scale:.5,
      duration:1,
      opacity:0.5,
    },
    {
      scale:1,
      duration:1,
      ease:"sine.in",
      opacity:1,
    }
    )

    gsap.from(".intro__text",{
      fontSize:100,
      duration:1,
      delay:1,
      ease:"sine.in",
    })

    const timeline = gsap.timeline();
    timeline
    .from(".header__info__top",{
      opacity:0,
    })
    .from(".header__title",{
      opacity:0,
      y:-30,
    })
    .from(".header__description",{
      opacity:0,
    })
    .from(".btn",{
      x:-40,
      opacity:0,
      stagger:.5
    })
  },{scope:container})
  return (
    <header id='header' className='blur-effect' ref={container}>
       <div className="stroke__text intro__text">HELLO</div>
       <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hola soy <span className="color__primary">Pablo Coria</span>
            </div>
            <div className="header__info__middle">
               <h1 className="primary__title header__title">Desarrollador de Software</h1>
               <p className="text__muted header__description">
                 Me dedico al desarrollo de soluciones tecnologicas para diferentes ambitos, como el IoT y el Machine Learning
                A la implementacion de nuevas tecnologias dentro del area de TI y a la programacion en multiples lenguajes y frameworks y a la 
               </p>
            </div>
            <Facts/>
            <div className="header__info__bottom">
                <a href="/CV - pcoria.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="btn">Download CV</button>
                </a>
                <a href="mailto:coriapablookk567@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className='profile__photo' alt="" />
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header
*/

import React, { useRef } from 'react';
import "./Header.css";
import { profile1 } from "../../images";
import Facts from './Facts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';  // Importa los íconos de GitHub y LinkedIn

const Header = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      ".profile__photo__container",
      {
        scale: 0.5,
        duration: 1,
        opacity: 0.5,
      },
      {
        scale: 1,
        duration: 1,
        ease: "sine.in",
        opacity: 1,
      }
    );

    gsap.from(".intro__text", {
      fontSize: 100,
      duration: 1,
      delay: 1,
      ease: "sine.in",
    });

    const timeline = gsap.timeline();
    timeline
      .from(".header__info__top", {
        opacity: 0,
      })
      .from(".header__title", {
        opacity: 0,
        y: -30,
      })
      .from(".header__description", {
        opacity: 0,
      })
      .from(".btn", {
        x: -40,
        opacity: 0,
        stagger: 0.5,
      });
  }, { scope: container });

  return (
    <header id='header' className='blur-effect' ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hola soy <span className="color__primary">Pablo Coria</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">Desarrollador de Software</h1>
              <p className="text__muted header__description">
                Me dedico al desarrollo de soluciones tecnologicas para diferentes ambitos, como el IoT y el Machine Learning
                A la implementacion de nuevas tecnologias dentro del area de TI y a la programacion en multiples lenguajes.
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <a href="/CV - pcoria.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn">Download CV</button>
              </a>
              <a href="mailto:coriapablookk567@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className='profile__photo' alt="" />
          </div>

          {/* Aquí agregamos los íconos de redes sociales */}
          <div className="social-icons">
            <a href="https://github.com/Pablo2205" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/pablo-coria01/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
