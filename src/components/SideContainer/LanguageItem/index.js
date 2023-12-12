import React from "react";

export default function LanguageItem ({language, index}) {
  return (
    <div className="language-item" key={index}>
      <span>{language.name} {language.level}</span>
    </div>
  )
}