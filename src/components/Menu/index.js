import React from "react";

export default function MainMenu ({pageSelected, pages, setPage}) {
  return (
  <div className="menu">
    {Object.keys(pages).map((page) => (
      (page!==pageSelected)?
      <button className="left-container-button" onClick={e => setPage(page)}>
        {pages[page].name}
      </button>:
      <></>
    ))}
  </div>
  )
}