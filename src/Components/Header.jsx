import myLogo from "/rm_logo.svg";

export default function Header() {
  return (
    <section className="header">
      <img
        className="header-image"
        src={myLogo}
        alt="A symbol of a colorful triangle."
      ></img>
      <div className="header-menu">
        <h2 className="header-menu-item">Technologies</h2>
        <h2 className="header-menu-item">Projects</h2>
        <h2 className="header-menu-item">Contact</h2>
      </div>
      <div className="horizontal-line"></div>
    </section>
  );
}
