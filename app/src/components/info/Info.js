import ProfilePic from "../../images/linkedin_photo.jpeg";
import LinkedIn from "../../images/linkedin-brands.svg";
import Email from "../../images/envelope-solid.svg";

function Info() {
  return (
    <header>
      <img src={ProfilePic} alt="portfolio pic" />
      <h2>William Brand</h2>
      <p>Frontend Developer</p>

      <a
        href="mailto: wbrand90@gmail.com"
        target="_blank"
        rel="noreferrer"
        id="leftButton"
        className="button"
      >
        <img src={Email} alt="Email Logo" />
        Email
      </a>
      <a
        href="https://linkedin.com/in/william-brand-1aa711239"
        target="_blank"
        rel="noreferrer"
        id="rightButton"
        className="button"
      >
        <img src={LinkedIn} alt="LinkedIn Logo" />
        LinkedIn
      </a>
    </header>
  );
}

export default Info;
