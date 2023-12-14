import React from "react";
import { data } from "../../data";
import ContactItem from "./ContactItem";
import ExpertiseItem from "./ExpertiseItem";
import LanguageItem from "./LanguageItem";
import EducationItem from "./EducationItem";
import profileImage from "../../images/image-photo.jpeg";

export default function SideContainer ({setPage}) {
  return (
  <div className="left-container">
    <div className="img">
      <img src={profileImage} alt=""/>
    </div>
    <div className="section contact">
      <h3>Contato</h3>
      <div className="separator white"></div>
      {data.contacts.map((contact, index) => <ContactItem contact={contact} index={index}/>)}
    </div>
    <div className="section education">
      <h3>Educação</h3>
      <div className="separator white"></div>
      {data.education.map((formation, index) => <EducationItem formation={formation} index={index}/>)}
    </div>
    <div className="section expertise">
      <h3 onClick={e => setPage("expertise")}>
        Aptidões
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#f0f8ff" viewBox="0 0 256 256">
          <path d="M220,156v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V156a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V140a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V84a8,8,0,0,0-16,0V192a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,175.92L70.27,217.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,150.83V84a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,156ZM48,96A12,12,0,0,0,60,84a48,48,0,0,1,96,0,12,12,0,0,0,24,0A72,72,0,0,0,36,84,12,12,0,0,0,48,96Z"></path>
        </svg>
      </h3>
      <div className="separator white"></div>
      {data.skills.map((skill, index) => <ExpertiseItem skill={skill} index={index}/>)}
    </div>
    <div className="section language">
      <h3>Idiomas</h3>
      <div className="separator white"></div>
      {data.languages.map((language, index) => <LanguageItem language={language} index={index}/>)}
    </div>
  </div>
  )
}