import { useState } from "react";
import SideContainer from "./components/SideContainer";
import RightContainer from "./components/RightContainer";
import Menu from "./components/Menu";
import "./styles/global.css"

export default function App() {
  const [page, setPage] = useState({id:0, name:"curriculum"});

  return (
    <div className="container">
      {page.name==="curriculum"?<SideContainer />:<></>} 
      <RightContainer />
      {page.name==="curriculum"?<></>:<Menu />}
    </div>
  );
}