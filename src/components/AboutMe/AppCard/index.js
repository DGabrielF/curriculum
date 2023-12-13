import React from "react";

export default function AppCard ({application, images}) {
  return (
    <div className="app-card" key={application.id} onClick={() => window.location.href = application.link}>
    <h5 className="card-header">{application.name}</h5>
    <div className="card-img">
      <img src={images[application.id]} alt={application.name} className="card-image"/>
    </div>
  </div>
  )
}