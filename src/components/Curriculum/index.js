import React from "react";
import { data } from "../../data"
import ExperienceItem from "./ExperienceItem";
import Certificate from "./Certificate";

export default function Curriculum({setPage}) {
  return (
    <>
      <div className="name">
        <h1>Danilo Ferreira</h1>
        <h2>Desenvolvedor</h2>
      </div>
      <div className="section about-me">
        <h3 onClick={e => setPage("aboutMe")}>
          Sobre mim
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#323b4c" viewBox="0 0 256 256">
            <path d="M220,156v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V156a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V140a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V84a8,8,0,0,0-16,0V192a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,175.92L70.27,217.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,150.83V84a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,156ZM48,96A12,12,0,0,0,60,84a48,48,0,0,1,96,0,12,12,0,0,0,24,0A72,72,0,0,0,36,84,12,12,0,0,0,48,96Z"></path>
          </svg>
        </h3>
        <div className="separator black"></div>
        <span>{data.aboutMe}</span>
      </div>
      <div className="section experience">
        <h3 onClick={e => setPage("experience")}>
          Experiência 
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#323b4c" viewBox="0 0 256 256">
            <path d="M220,156v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V156a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V140a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V84a8,8,0,0,0-16,0V192a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,175.92L70.27,217.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,150.83V84a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,156ZM48,96A12,12,0,0,0,60,84a48,48,0,0,1,96,0,12,12,0,0,0,24,0A72,72,0,0,0,36,84,12,12,0,0,0,48,96Z"></path>
          </svg>
        </h3>
        <div className="separator black"></div>
        {data.experiences.map((experience, index) => <ExperienceItem experience={experience} indexx={index}/>)}
      </div>
      <div className="section courses">
        <h3 onClick={e => setPage("courses")}>
          Certificados
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#323b4c" viewBox="0 0 256 256">
            <path d="M220,156v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V156a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V140a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V84a8,8,0,0,0-16,0V192a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,175.92L70.27,217.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,150.83V84a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,156ZM48,96A12,12,0,0,0,60,84a48,48,0,0,1,96,0,12,12,0,0,0,24,0A72,72,0,0,0,36,84,12,12,0,0,0,48,96Z"></path>
          </svg>
        </h3>
        <div className="separator black"></div>
        <div className="certificates">
          {data.certifications.sort((a, b) => b.concludedIn - a.concludedIn).map((course, index) => (index<5)?<Certificate course={course} index={index}/>:<></>)}
        </div>
      </div>
    </>
  )
}