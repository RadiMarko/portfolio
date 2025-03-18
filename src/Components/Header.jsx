import myLogoDark from "/rm_logo_dark.svg";
import myLogoBright from "/rm_logo_bright.svg";
import hunFlag from "/hungarian.svg";
import engFlag from "/english.svg";
import sunIcon from "/bright_mode_on.svg";
import moonIcon from "/dark_mode_on.svg";

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
        <h2 className="header-menu-item">
          {props.language === "english" ? "Technologies" : "Technológiák"}
        </h2>
        <h2 className="header-menu-item">
          {props.language === "english" ? "Projects" : "Projektek"}
        </h2>
        <h2 className="header-menu-item">
          {props.language === "english" ? "Contacts" : "Elérhetőségek"}
        </h2>
      </div>
      <div
        className={
          props.darkMode ? "horizontal-line-dark" : "horizontal-line-bright"
        }
      ></div>
    </section>
  );
}
