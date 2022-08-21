import "./Contact.css";
export default function Contact(props) {
  return (
    <form
      id="form"
      name="contact"
      method="post"
      style={{ display: props.visibility }}
    >
      <div className="closer" onClick={props.handler}>
        X
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <input
        className="fInput"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
      />
      <input
        className="fInput"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className="fInput"
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        required
      />
      <textarea id="message" placeholder="Message" name="message" required />
      <input id="sendBtn" type="submit" value="SEND" />
    </form>
  );
}
