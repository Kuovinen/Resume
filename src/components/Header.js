export default function Header(props) {
  function ressumeResponse() {
    props.resRef.current.className =
      props.resRef.current.className === "resumeContainer spreadContainerAni"
        ? "resumeContainer"
        : "resumeContainer spreadContainerAni";
  }
  return (
    <header>
      <div className="containerLeft">
        <p className="firstName">
          <span>R</span>
          <span>O</span>
          <span>M</span>
          <span>A</span>
          <span>N</span>
          <span> </span>
          <span>Z</span>
          <span>U</span>
          <span>J</span>
          <span>E</span>
          <span>V</span>
        </p>
      </div>
      <div className="containerRight">
        <p className="resumeP" onClick={() => ressumeResponse()}>
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>U</span>
          <span>M</span>
          <span>E</span>
        </p>
        <p className="contactP">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </p>
      </div>
    </header>
  );
}
