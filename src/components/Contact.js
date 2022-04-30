export default function Contact(props) {
  return (
    <form id="form" netlify style={{ display: props.visibility }}>
      <div className="closer" onClick={props.handler}>
        X
      </div>
      <input type="text" id="name" placeholder="Name" />
      <input type="email" id="email" placeholder="Email" />
      <input type="text" id="subject" placeholder="Subject" />
      <textarea id="message" placeholder="Message" />
      <button>SEND</button>
    </form>
  );
}
