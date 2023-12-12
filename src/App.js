import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./styles/global.css"

export default function App() {
  return (
    <div className="container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}