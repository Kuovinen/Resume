import React from "react";
export default function Contact(props) {
  // function hideContact() {
  //   props.conRef.current.className = "hiddenContainer";
  // }

  const [value, setValue] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const name = React.useRef(<div></div>);
  const email = React.useRef(<div></div>);
  const message = React.useRef(<div></div>);
  function inputReaction(key, value) {
    setValue((original) => {
      return { ...original, [key]: value };
    });
  }
  //const below decides if the send button is highlighted
  const buttonColorTest =
    value.name === "" || value.email === "" || value.message === ""
      ? "darkBtn"
      : "brightBtn";
  return (
    <div
      className="hiddenContainer" //hiddenContainer
      ref={props.conRef}
    >
      <form
        id="form"
        className="content"
        name="contact"
        method="post"
        style={{ display: props.visibility }}
      >
        {/* <div className="closeButton" onClick={() => hideContact()}>
          X
        </div> */}
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="fInput"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          ref={name}
          onChange={(e) => inputReaction("name", e.target.value)}
          required
        />
        <input
          className="fInput"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          ref={email}
          onChange={(e) => inputReaction("email", e.target.value)}
          required
        />
        <input
          className="fInput"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          id="message"
          placeholder="Message"
          name="message"
          ref={message}
          onChange={(e) => inputReaction("message", e.target.value)}
          required
        />
        <input
          id="sendBtn"
          className={buttonColorTest}
          type="submit"
          value="SEND"
        />
      </form>
    </div>
  );
}
