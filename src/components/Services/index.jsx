/*import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
//import { TfiWrite } from 'react-icons/tfi'
import { SiSecurityscorecard } from "react-icons/si";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            Transformo tus ideas, y en consecuencia tus deseos, 
            en un proyecto web distintivo que te inspira y cautiva a tus clientes.

            </p>
          </div>

          <div className="services__group">
            <article className="service">
              <div className="service__top">
                <div className="icon__container">
                  <FaServer className="icon"/>
                </div>
                <h3 className="title">Infraestructure</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Necesitas optimizar y proteger tu infraestructura tecnológica? 
                Te ofrezco un servicio integral que incluye la administración completa tus activos garantizando su seguridad y máximo rendimiento, 
                junto con la gestión eficiente de servidores físicos y virtuales. Brindo servicios de monitoreo y seguridad de tus datos incluido el respaldo inmiutable de los mismos.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}


            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Estás buscando un experto en desarrollo de software backend? 
                Te ofrezco un servicio completo que incluye la creación de arquitecturas robustas y escalables, 
                optimizando su gestión y asegurando su máximo rendimiento y seguridad. Desarrollo APIs eficientes y seguras, 
                integrando sistemas complejos para mejorar la funcionalidad de tus aplicaciones. 
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <SiSecurityscorecard className="icon"/>
                </div>
                <h3 className="title">Cybersecurity</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Estás buscando un experto en seguridad informática? Ofrezco servicios completos de seguridad, que incluyen análisis de vulnerabilidades, pruebas de penetración y auditorías exhaustivas. Implemento hacking para identificar riesgos y desarrollo soluciones para fortalecer la seguridad, garantizando la protección e integridad de tu información.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}
          </div>
       </div>
    </section>
  )
}

export default Services*/

import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { SiSecurityscorecard } from "react-icons/si";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=> {
    const el= container.current
    gsap.fromTo('.service__head', {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: el,
      }
    }
  )

  gsap.fromTo(".service", {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "-100% bottom",
      end: "bottom 20%",
      scrub: true
    }
  }
  )
  }, [])

  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            I transform your needs into my commitments, offering a wide range of services including infrastructure management, software development and cybersecurity.            </p>
          </div>

          <div className="services__group">
            <article className="service infraestructura">
              <div className="service__top">
                <div className="icon__container">
                  <FaServer className="icon"/>
                </div>
                <h3 className="title">Infraestructure</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Do you need to optimize and protect your technological infrastructure?
I offer you a comprehensive service that includes the complete administration of your assets, guaranteeing their security and maximum performance,
along with the efficient management of physical and virtual servers. I provide monitoring and security services for your data, including immutable backup of the same.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>

            <article className="service desarrollo">
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Are you looking for a backend software development expert?
I offer a complete service that includes the creation of robust and scalable architectures,
optimizing their management and ensuring maximum performance and security. I develop efficient and secure APIs,
integrating complex systems to improve the functionality of your applications.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>

            <article className="service ciberseguridad">
              <div className="service__top">
                <div className="icon__container">
                  <SiSecurityscorecard className="icon"/>
                </div>
                <h3 className="title">Cybersecurity</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Are you looking for a computer security expert? I offer comprehensive security services, including vulnerability scanning, penetration testing, and thorough audits. I implement hacking to identify risks and develop solutions to strengthen security, ensuring the protection and integrity of your information.                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
          </div>
       </div>
    </section>
  )
}

export default Services
