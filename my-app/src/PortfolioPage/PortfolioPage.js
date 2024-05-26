import "./PortfolioPage.css";
import NavigationBar from "../Componets/NavigationBar";
import Divider from "../Componets/Divider";

function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <div className="Header">
        <NavigationBar />
        <Divider />
      </div>
      <div className="Body_port">
        <div className="Left_port"></div>
        <div className="Right_port"></div>
      </div>
    </div>
  );
}

export default PortfolioPage;
