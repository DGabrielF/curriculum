import React from "react";
import { data } from "../../data";

export default function Experience () {
  return (
    <div className="page">
      <h2>Experiências</h2>
      <div className="page-content">
        {data.experiences.map((experience, index) => (
          <div className="section" key={index}>
            <h3>{experience.position}</h3>
            <h4>{experience.company}</h4>
            <h4>Principais atividades:</h4>
            <div className="section">
              {experience.activities.map((activity, id) => (
                <span key={id}>{activity}</span>
              ))}
            </div>
            <h4>Projetos:</h4>
            <div className="section">
              {experience.developedProjects.map((project, id) => (
                <div key={id}>
                  <h5 >{project.name}</h5>
                  <h5>Objetivos:</h5>
                  {project.goals.map((goal, i) => (
                    <span key={i}>{goal}</span>
                  ))}
                  <h5>Ferramentas:</h5>
                  {project.toolsUsed.map((tool, j) => (
                    <span key={j}>{tool}</span>
                  ))}
                </div>                
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}