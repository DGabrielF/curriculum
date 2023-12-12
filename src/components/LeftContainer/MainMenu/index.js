import React from "react";
import { data } from "../../../data.js"
import ContactItem from "../ContactItem/index.js";
import FormationItem from "../EducationItem/index.js";
import ExpertiseItem from "../ExpertiseItem/index.js";
import LanguageItem from "../LanguageItem/index.js";
import profileImage from "../../images/image-photo.jpeg";

export default function MainMenu () {
  return (
  <>
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
      {data.education.map((formation, index) => <FormationItem formation={formation} index={index}/>)}
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
  </>
  )
}