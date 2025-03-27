import TechLine from "./TechLine";
import ContactLine from "./ContactLine";
import profilePicture from "/profile_picture.jpg";
import wifiLow from "/wifi_low.svg";
import wifiMedium from "/wifi_medium.svg";
import wifiHigh from "/wifi_high.svg";
import email from "/email.svg";
import phone from "/phone.svg";
import github from "/github.svg";
import linkedin from "/linkedin.svg";

export default function Hero(props) {
  return (
    <section className="hero">
      <p className="greeting-text">
        {props.language === "english" ? "HELLO! MY NAME IS" : "HELLO! A NEVEM"}
      </p>
      <a
        href="https://www.linkedin.com/in/marko-radisavljevic-553a18357"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="name-text">
          {props.language === "english"
            ? "MÁRKÓ RADISAVLJEVIC"
            : "RADISAVLJEVIC MÁRKÓ"}
        </p>
      </a>
      <img
        className="my-picture"
        src={profilePicture}
        alt="My not so great profile picture."
      ></img>
      <p className="intro-text">
        {props.language === "english"
          ? `I'm a web developer and creator of vector graphics based in Hungary.
        Let's collaborate to bring your digital ideas to life!`
          : `Egy webfejlesztő és vektor grafikák készítője vagyok Magyarországról. Valósítsuk meg digitális ötleteidet együtt!`}
      </p>
      <div
        className={props.darkMode ? "query-skills-dark" : "query-skills-bright"}
      >
        <TechLine techName="ILLUSTRATOR" image={wifiHigh}></TechLine>
        <TechLine techName="PHOTOSHOP" image={wifiLow}></TechLine>
        <TechLine techName="INDESIGN" image={wifiMedium}></TechLine>
        <TechLine techName="HTML5" image={wifiHigh}></TechLine>
        <TechLine techName="CSS" image={wifiMedium}></TechLine>
        <TechLine techName="JAVASCRIPT" image={wifiMedium}></TechLine>
        <TechLine techName="REACT" image={wifiMedium}></TechLine>
        <TechLine techName="PYTHON" image={wifiLow}></TechLine>
      </div>
      <div
        className={
          props.darkMode ? "query-contacts-dark" : "query-contacts-bright"
        }
      >
        <ContactLine
          image={email}
          contactName="r.marko1995@gmail.com"
          href={"mailto:r.marko1995@gmail.com"}
        ></ContactLine>
        <ContactLine image={phone} contactName="+36 30 674 1072"></ContactLine>
        <ContactLine
          image={github}
          contactName="github.com/RadiMarko"
          href={"https://github.com/RadiMarko"}
        ></ContactLine>
        <ContactLine
          image={linkedin}
          contactName="Marko Radisavljevic"
          href={"https://www.linkedin.com/in/marko-radisavljevic-553a18357"}
        ></ContactLine>
      </div>
    </section>
  );
}
