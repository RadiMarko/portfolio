import TechLine from "./TechLine";
import ContactLine from "./ContactLine";
import myLogoDark from "/rm_logo_dark.svg";
import myLogoBright from "/rm_logo_bright.svg";
import hunFlag from "/hungarian.svg";
import engFlag from "/english.svg";
import sunIcon from "/bright_mode_on.svg";
import moonIcon from "/dark_mode_on.svg";
import wifiLow from "/wifi_low.svg";
import wifiMedium from "/wifi_medium.svg";
import wifiHigh from "/wifi_high.svg";
import email from "/email.svg";
import phone from "/phone.svg";
import github from "/github.svg";
import linkedin from "/linkedin.svg";

export default function Header(props) {
  return (
    <section className="header-dark">
      <div className="logo-row">
        <img
          className="flag"
          src={props.language === "english" ? hunFlag : engFlag}
          alt="A Hungarian or English flag icon for switching languages."
          onClick={props.toggleLanguage}
        ></img>
        <img
          className="header-image"
          src={props.darkMode ? myLogoDark : myLogoBright}
          alt="A symbol of a colorful triangle."
        ></img>
        <img
          className="light-icon"
          src={props.darkMode ? sunIcon : moonIcon}
          alt="A sun or moon icon for toggling bright mode on or off."
          onClick={props.toggleLightMode}
        ></img>
      </div>
      <div className="header-menu">
        <div className="dropdown">
          <h2 className="header-menu-item">
            {props.language === "english" ? "Technologies" : "Technológiák"}
          </h2>
          <div
            className={
              props.darkMode
                ? "dropdown-content-dark"
                : "dropdown-content-bright"
            }
          >
            <div className="dropdown-list-tech">
              <TechLine techName="ILLUSTRATOR" image={wifiHigh}></TechLine>
              <TechLine techName="PHOTOSHOP" image={wifiLow}></TechLine>
              <TechLine techName="INDESIGN" image={wifiMedium}></TechLine>
              <TechLine techName="HTML5" image={wifiHigh}></TechLine>
              <TechLine techName="CSS" image={wifiMedium}></TechLine>
              <TechLine techName="JAVASCRIPT" image={wifiMedium}></TechLine>
              <TechLine techName="REACT" image={wifiMedium}></TechLine>
              <TechLine techName="PYTHON" image={wifiLow}></TechLine>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <h2
            className="header-menu-item project-text"
            onClick={() => props.toggleProjectsShown()}
          >
            {props.language === "english" ? "Projects" : "Projektek"}
          </h2>
        </div>
        <div className="dropdown">
          <h2
            className="header-menu-item project-text"
            onClick={() => props.toggleIllustrationsShown()}
          >
            {props.language === "english" ? "Illustrations" : "Illusztrációk"}
          </h2>
        </div>
        <div className="dropdown">
          <h2 className="header-menu-item">
            {props.language === "english" ? "Contacts" : "Elérhetőségek"}
          </h2>
          <div
            className={
              props.darkMode
                ? "dropdown-content-dark"
                : "dropdown-content-bright"
            }
          >
            <div className="dropdown-list">
              <ContactLine
                image={email}
                contactName="r.marko1995@gmail.com"
              ></ContactLine>
              <ContactLine
                image={phone}
                contactName="+36 30 674 1072"
              ></ContactLine>
              <ContactLine
                image={github}
                contactName="github.com/RadiMarko"
              ></ContactLine>
              <ContactLine
                image={linkedin}
                contactName="Marko Radisavljevic"
              ></ContactLine>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          props.darkMode ? "horizontal-line-dark" : "horizontal-line-bright"
        }
      ></div>
    </section>
  );
}
