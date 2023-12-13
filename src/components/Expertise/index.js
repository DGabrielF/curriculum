import React from "react";
import { data } from "../../data";

export default function Expertise () {
  return (
    <div className="page">
      <h2>Competências</h2>
      <div className="page-content">
        {data.skills.map((skill, index) => (
          <div key={index} className="section">
            <h3>{skill.name}</h3>
            <h4>Como tudo começou:</h4>
            <span>{skill.origin}</span>
            <h4>O que veio com isso:</h4>
            <div className="section">
              {skill.achievements.map((achieve, index) => (
                <span key={index}><div className="list-mark"></div>{achieve}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}