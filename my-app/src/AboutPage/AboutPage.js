import "./AboutPage.css";
import NavigationBar from "../Componets/NavigationBar";
import { ReactTyped } from "react-typed";
import about from "../Componets/Images/image.png";
import Divider from "../Componets/Divider";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="Header">
        <NavigationBar />
        <Divider />
      </div>
      <div className="Body">
        <div className="Left">
          <div className="text">
            <p>ABOUT</p>
            <p className="content" style={{ paddingBottom: "15%" }}>
              <ReactTyped
                strings={[
                  "As a computer science student with a keen interest in Machine Learning, I am excited to develop my skills and knowledge in this field. My goal is to apply these skills in Singapore’s defence sector upon graduation, contributing to the nation’s security and technological advancements. <br />  <br /> <br /> Outside of my academic pursuit, I enjoy playing badminton and have a passion for travelling. I especially love exploring nature landscapes, such as mountain and beaches.",
                ]}
                typeSpeed={25}
                backSpeed={150}
              />
            </p>
          </div>
        </div>
        <div className="Right">
          <img className="image" src={about} alt="about" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
