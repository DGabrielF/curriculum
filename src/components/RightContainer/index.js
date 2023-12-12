import React from "react";
import { data } from "../../data"
import ExperienceItem from "./ExperienceItem";

export default function LeftContainer () {
  const key = true
  let content; 
  if (key) {
    content = (
      <>
        <div className="name">
          <h1>Danilo Ferreira</h1>
          <h2>Engenheiro Químico</h2>
        </div>
        <div className="section about-me">
          <h3>Sobre mim</h3>
          <div className="separator black"></div>
          <span>
            Focado e instigado por desafios, encontrar uma
            forma de tornar processos, ferramentas,
            procedimentos e pessoas melhores é o meu
            'PORQUÊ'.
            Engenheiro com experiência em programação
            (Python, JavaScript, HTML, CSS, Git, React,
            Tailwind, Firebase e SQL).
          </span>
        </div>
        <div className="section experience">
          <h3>Experiência</h3>
          <div className="separator black"></div>
          {data.experiences.map((experience, index) => <ExperienceItem experience={experience} indexx={index}/>)}
        </div>
        <div className="section courses">
          <h3>Certificados</h3>
          <div className="separator black"></div>
          <div className="certificates">
            {data.certifications.sort((a, b) => b.concludedIn - a.concludedIn).map((course, index) => {
              if (index<5) {
                return (
                  <div className="courses-item" key={index}>
                    <h5>{course.name}</h5>
                    <span>{course.providedBy}</span>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </>
    )
  } else {
    content = <></>
  }
  return (
    <div className="right-container">
      {content}
    </div>
  )
}