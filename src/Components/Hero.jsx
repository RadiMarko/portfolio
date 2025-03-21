import profilePicture from "/profile_picture.jpg";

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
    </section>
  );
}
