export default function TechLine(props) {
  return (
    <div className="tech-line">
      <p>{props.techName}</p>
      <img
        className="wifi-icon"
        src={props.image}
        alt="Wifi icon to symbolize proficiency."
      ></img>
    </div>
  );
}
