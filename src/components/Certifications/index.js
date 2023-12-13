import React from "react";
import { data } from "../../data"

export default function Certifications () {
  return (
    <div className="page">
      <h2>Cursos</h2>
      <div className="page-content">
        {data.certifications.map((certification, index) => (
          <div className="section" key={index}>
            <h3>{certification.name}</h3>
            <h4>{certification.providedBy}</h4>
            <h5>{certification.concludedIn.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} Carga horária: {certification.workload}</h5>
            <div className="section">
              {certification.content.map((item, id) => (
                <div key={id}>
                  <h5>{item.topic}</h5>
                  {item.subTopics.map((subTopic) => (
                    <span key={subTopic.id}><div className="list-mark"></div>{subTopic.item}</span>
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