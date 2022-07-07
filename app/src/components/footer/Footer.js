import GitHub from "../../images/github-icon.png";
import Instagram from "../../images/instagram-icon.png";
import Twitter from "../../images/twitter-icon.png";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/Kacique"
        target="_blank"
        rel="noreferrer"
        className="button-icon"
      >
        <img src={GitHub} alt="GitHub Logo" />
      </a>
      <a
        href="https://twitter.com/_kacique_"
        target="_blank"
        rel="noreferrer"
        className="button-icon"
      >
        <img src={Twitter} alt="Twitter Logo" />
      </a>
      <a
        href="https://www.instagram.com/william.obc/"
        target="_blank"
        rel="noreferrer"
        className="button-icon"
      >
        <img src={Instagram} alt="Instagram Logo" />
      </a>
    </footer>
  );
}

export default Footer;
