export default function Contact(props) {
  return (
    <form id="form" action="send" style={{ display: props.visibility }}>
      <div className="closer" onClick={props.handler}>
        X
      </div>
      <div id="map"></div>
      <input type="text" id="name" placeholder="Name" />
      <input type="email" id="email" placeholder="Email" />
      <input type="text" id="subject" placeholder="Subject" />
      <textarea id="message" placeholder="Message" />
      <button>SEND</button>
    </form>
  );
}
