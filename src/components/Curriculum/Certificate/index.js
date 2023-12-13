import React from "react";

export default function Certificate({course, index}) {
  return (
    <div className="courses-item" key={index}>
      <h5>{course.name}</h5>
      <span>{course.providedBy}</span>
    </div>
  )
}