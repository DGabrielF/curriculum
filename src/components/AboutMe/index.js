import React from "react";
import { useState } from "react";
import { data } from "../../data";
import AppCard from "./AppCard";
import pokeImage from "../../images/pokeCardGame.jpg";
import pianoImage from "../../images/pianoSimulator.png";
import ralphImage from "../../images/wreckItRalph.png";
import memoryImage from "../../images/brain.jpg";
import mathImage from "../../images/abaco.jpg";
import pokedexImage from "../../images/pokedex-color.svg"

export default function AboutMe () {
  const images = {
    pokeCardGame: pokeImage,
    pianoSimulator: pianoImage,
    wreckItRalph: ralphImage,
    memoryGame: memoryImage,
    mathHelper: mathImage, 
    pokedex: pokedexImage, 
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    const newIndex = currentIndex + 1 >= data.applications.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1 < 0 ? data.applications.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="page">
      <h2>Para os curiosos</h2>
      <div className="section centralized">
        <h3>Aplicações</h3>
        <div className="caroussel">
          <button onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#050505" viewBox="0 0 256 256"><path d="M160,48V208L80,128Z" opacity="0.2"></path><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"></path></svg></button>
          <div className="card-area">
             <AppCard application={data.applications.find(application => application.index === (currentIndex - 1 < 0 ? data.applications.length - 1 : currentIndex - 1))} images={images}/>
             <AppCard application={data.applications.find(application => application.index === currentIndex)} images={images}/>
             <AppCard application={data.applications.find(application => application.index === (currentIndex + 1 >= data.applications.length ? 0 : currentIndex + 1))} images={images}/>
          </div>
          <button onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#050505" viewBox="0 0 256 256"><path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path></svg></button>
        </div>
      </div>
    </div>
  )
}