import React from "react";

export default function ExperienceItem ({experience, index}) {
  return (
    <div className="experience-item" id={Math.floor(Math.random() * 10001)}>
      <h4>{experience.position}</h4>
      <h5>{experience.company}</h5>
      <ul>
        {experience.activities.map((activity) => (
          <li key={Math.floor(Math.random() * 10001)}><div className="list-mark"></div>{activity}</li>
        ))}
      </ul>
    </div>
  )
}