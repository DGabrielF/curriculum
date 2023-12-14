import { useState } from "react";
import SideContainer from "./components/SideContainer";
import Menu from "./components/Menu";
import "./styles/global.css"
import Curriculum from "./components/Curriculum";
import Expertise from "./components/Expertise"
import Certifications from "./components/Certifications"
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

export default function App() {
  const [page, setPage] = useState("curriculum");
  const pages = {
    curriculum: {name: "Curriculo", page: <Curriculum setPage={setPage} />},
    expertise: {name: "Competências", page: <Expertise setPage={setPage} />},
    aboutMe: {name: "Sobre Mim", page: <AboutMe />},
    experience: {name: "Experiências", page: <Experience />},
    courses: {name: "Cursos", page: <Certifications />},
  }

  return (
    <div className="container">
      {page==="curriculum"?<SideContainer setPage={setPage}/>:<></>} 
      <div className={page==="curriculum"?"right-container":"right-container-row"}>
        {page==="curriculum"?<></>:<Menu pageSelected={page} pages={pages} setPage={setPage}/>}
        {pages[page].page}
      </div>
    </div>
  );
}