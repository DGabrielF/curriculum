import { useState } from "react";
import SideContainer from "./components/SideContainer";
import RightContainer from "./components/RightContainer";
import Menu from "./components/Menu";
import "./styles/global.css"
import Curriculum from "./components/Curriculum";

export default function App() {
  const [page, setPage] = useState({id:0, name:"curriculum", content: <Curriculum />});

  return (
    <div className="container">
      {page.name==="curriculum"?<SideContainer />:<></>} 
      <RightContainer page={page}/>
      {page.name==="curriculum"?<></>:<Menu />}
    </div>
  );
}