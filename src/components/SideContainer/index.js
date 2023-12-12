import React from "react";
import ContactItem from "./ContactItem";
import ExpertiseItem from "./ExpertiseItem";
import LanguageItem from "./LanguageItem";
import EducationItem from "./EducationItem";
import profileImage from "../../images/image-photo.jpeg";
import { data } from "../../data";


export default function SideContainer () {
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
      <h3>Competências</h3>
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