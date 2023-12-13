import React from "react";
import { data } from "../../data"
import ExperienceItem from "./ExperienceItem";
import Certificate from "./Certificate";

export default function Curriculum() {
  return (
    <>
      <div className="name">
        <h1>Danilo Ferreira</h1>
        <h2>Engenheiro Químico</h2>
      </div>
      <div className="section about-me">
        <h3>Sobre mim</h3>
        <div className="separator black"></div>
        <span>{data.aboutMe}</span>
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
          {data.certifications.sort((a, b) => b.concludedIn - a.concludedIn).map((course, index) => (index<5)?<Certificate course={course} index={index}/>:<></>)}
        </div>
      </div>
    </>
  )
}