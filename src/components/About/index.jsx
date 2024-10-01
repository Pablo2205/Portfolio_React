import React, { useEffect, useRef } from 'react'
import "./About.css"
import { profile2 } from '../../images'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    }
  )
  },[])
  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">I am <span className="color__primary">Pablo Coria</span></h1>
          <p className="text__muted description">
          Computer Engineering student with a passion for technology, Expert in multiple programming languages ​​and frameworks,
as well as in database design and management, automated systems, technological products and software services.
Strong analytical and problem-solving skills,
and extensive experience in participating in IoT Engineering projects as well as IT Infrastructure
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
