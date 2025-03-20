export default function ContactLine(props) {
  return (
    <div className="contact-line">
      <img
        className="contact-icon"
        src={props.image}
        alt="Icon for contact details."
      ></img>
      <p className="contact-text">{props.contactName}</p>
    </div>
  );
}
