import invitationOne from "/invitation_1.jpg";
import invitationTwo from "/invitation_2.jpg";
import gamecenter from "/gamecenter.jpg";
import ladderDark from "/ladder_dark.svg";
import ladderBright from "/ladder_bright.svg";

export default function IllustrationsDisplay(props) {
  return (
    <section className="illustration-section">
      <div className="illustrations">
        <div className="illustration-card">
          <h2>WEDDING INVITATION</h2>
          <img
            className="illustration"
            src={invitationOne}
            alt="A picture of a wedding invitation."
          ></img>
        </div>
        <div className="illustration-card">
          <h2>WEDDING INVITATION</h2>
          <img
            className="illustration"
            src={invitationTwo}
            alt="A picture of a wedding invitation."
          ></img>
        </div>
        <div className="illustration-card">
          <h2>BUSINESS LOGO</h2>
          <img
            className="illustration"
            src={gamecenter}
            alt="The logo of a business."
          ></img>
        </div>
      </div>
      <button
        className={props.darkMode ? "button-dark" : "button-bright"}
        onClick={props.toggleIllustrationsShown}
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
