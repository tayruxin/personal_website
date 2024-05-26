import "./LandingPage.css";
import NavigationBar from "../Componets/NavigationBar";
import SelfImage from "../Componets/Images/Self.png";
import Socials from "../Componets/Socials";
import { ReactTyped } from "react-typed";

function LandingPage() {
  return (
    <div className="landing_page">
      <div className="landing_page-left" flexDirection="row">
        <div style={{ background: "#C4CBEB" }}>
          <NavigationBar />
        </div>

        <img
          style={{
            position: "absolute",
            bottom: "0",
            width: "auto", // Set a fixed width
            height: "90%",
            right: "40%",
          }}
          src={SelfImage}
        />
        <div style={{ position: "absolute", bottom: "20px" }}>
          <Socials />
        </div>
      </div>
      <div className="landing_page-right">
        <h1 className="Hello">Hello</h1>
        <h2 className="RuXin">I'm Ru Xin</h2>
        <p className="Intro">
          <ReactTyped
            strings={[
              "A computer science student from National University of Singapore (NUS).",
            ]}
            typeSpeed={40}
            backSpeed={150}
          />
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
