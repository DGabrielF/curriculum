import React from "react";

export default function EducationItem ({formation, index}) {
  return (
    <div className="education-item" key={index}>
      <h4>{formation.title}</h4>
      <span>{formation.providedBy}</span>
    </div>
  )
}