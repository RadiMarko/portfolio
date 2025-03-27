export default function ContactLine(props) {
  return (
    <a
      className="contact-line"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="contact-icon"
        src={props.image}
        alt="Icon for contact details."
      ></img>
      <p className="contact-text">{props.contactName}</p>
    </a>
  );
}
