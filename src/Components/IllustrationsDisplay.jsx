import invitationOne from "/invitation_1.jpg";
import invitationTwo from "/invitation_2.jpg";
import gamecenter from "/gamecenter.jpg";
import ladderDark from "/ladder_dark.svg";
import ladderBright from "/ladder_bright.svg";
import IllustrationCard from "./IllustrationCard.jsx";

export default function IllustrationsDisplay(props) {
  return (
    <section className="illustration-section">
      <div className="illustrations">
        <IllustrationCard 
            language={props.language}
            engTitle={"WEDDING INVITATION"}
            hunTitle={"ESKÜVŐI MEGHÍVÓ"}
            imagePath={invitationOne}
            imageAlt={"An illustration of a wedding invitation"}
        ></IllustrationCard>
        <IllustrationCard
            language={props.language}
            engTitle={"WEDDING INVITATION"}
            hunTitle={"ESKÜVŐI MEGHÍVÓ"}
            imagePath={invitationTwo}
            imageAlt={"An illustration of a wedding invitation"}
        ></IllustrationCard>
        <IllustrationCard
            language={props.language}
            engTitle={"BUSINESS LOGO"}
            hunTitle={"ÜZLET LOGÓJA"}
            imagePath={gamecenter}
            imageAlt={"The logo of a business"}
        ></IllustrationCard>
      </div>
      <button
        className={props.darkMode ? "button-dark" : "button-bright"}
        onClick={props.scrollUp}
      >
        <img
          className="ladder-image"
          src={props.darkMode ? ladderDark : ladderBright}
          alt="A ladder's icon."
        ></img>
        <p
          className={props.darkMode ? "button-text-dark" : "button-text-bright"}
        >
          {props.language === "english" ? "CLIMB BACK" : "MÁSSZ VISSZA"}
        </p>
        <img
          className="ladder-image"
          src={props.darkMode ? ladderDark : ladderBright}
          alt="A ladder's icon."
        ></img>
      </button>
    </section>
  );
}
