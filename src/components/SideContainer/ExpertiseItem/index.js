import React from "react";

export default function ExpertiseItem ({skill}) {
  return (
    <span className="expertise-item" key={skill.name}>
      {skill.name}
    </span>
  )
}