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
          <h1 className="title">Soy <span className="color__primary">Pablo Coria</span></h1>
          <p className="text__muted description">
          Estudiante de Ingenieria en Informatica con pasión por la tecnologia, Experto en múltiples lenguajes y marcos de programación,
          así como en diseño y gestión de bases de datos, sistemas automatizados, productos tecnologicos y servicios de software.
          Sólidas habilidades analíticas y de resolución de problemas,
          y una amplia expereincia en participacion de proyectos de Ingenieria del IoT asi como de Infraestructura del IT
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
