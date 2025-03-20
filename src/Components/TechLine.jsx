export default function TechLine(props) {
  return (
    <div className="tech-line">
      <p>{props.techName}</p>
      <img
        className="wifi-image"
        src={props.image}
        alt="Wifi symbol to symbolize proficiency."
      ></img>
    </div>
  );
}
