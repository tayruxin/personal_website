import instagram from "./Images/instagram.png";
import linkedin from "./Images/linkedin.png";

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.instagram.com/ruxinsaurus"
        style={{ paddingRight: "15px", paddingLeft: "40px" }}
      >
        <img
          src={instagram}
          alt="instagram"
          style={{ height: "30px", width: "30px" }}
        />
      </a>
      <a href="https://www.linkedin.com/in/tay-ru-xin">
        <img
          src={linkedin}
          alt="linkedin"
          style={{ height: "33px", width: "33px" }}
        />
      </a>
    </div>
  );
}

export default Socials;
