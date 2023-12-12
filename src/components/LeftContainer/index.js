import React from "react";
import MainMenu from "./MainMenu";
import OtherMenu from "./OtherMenu";


export default function LeftContainer () {
  const key = true
  let content; 
  if (key) {
    content = <MainMenu />
  } else {
    content = <OtherMenu />
  }
  return (
    <div className="left-container">
      {content}
    </div>
  )
}