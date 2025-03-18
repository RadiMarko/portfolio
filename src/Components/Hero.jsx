export default function Hero(props) {
  return (
    <section className="hero">
      <p className="greeting-text">
        {props.language === "english" ? "HELLO! MY NAME IS" : "HELLO! A NEVEM"}
      </p>
      <p className="name-text">
        {props.language === "english"
          ? "MÁRKÓ RADISAVLJEVIC"
          : "RADISAVLJEVIC MÁRKÓ"}
      </p>
      <div className="my-picture"></div>
      <p className="intro-text">
        {props.language === "english"
          ? `I'm a web developer and creator of vector graphics based in Hungary.
        Let's collaborate to bring your digital products to life!`
          : `Egy webfejlesztő és vektor grafikák készítője vagyok Magyarországról. Hozzuk létre a digitális termékeidet együtt!`}
      </p>
    </section>
  );
}
