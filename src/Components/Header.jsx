import myLogoDark from "/rm_logo_dark.svg";
import myLogoBright from "/rm_logo_bright.svg";
import sunIcon from "/bright_mode_on.svg";
import moonIcon from "/dark_mode_on.svg";
import { useState } from "react";

export default function Header(props) {
  return (
    <section className="header-dark">
      <div className="logo-row">
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
        <h2 className="header-menu-item">Technologies</h2>
        <h2 className="header-menu-item">Projects</h2>
        <h2 className="header-menu-item">Contact</h2>
      </div>
      <div
        className={
          props.darkMode ? "horizontal-line-dark" : "horizontal-line-bright"
        }
      ></div>
    </section>
  );
}
