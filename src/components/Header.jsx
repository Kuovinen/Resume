//CONTAINS THE NAME LOGO, RESUME and CONTACT SECTIONS

export default function Header(props) {
  function resumeResponse() {
    //switch the resume info window ON or OFF
    props.resRef.current.className =
      props.resRef.current.className === "hiddenContainer spreadContainerAni"
        ? "hiddenContainer"
        : "hiddenContainer spreadContainerAni";
    //make sure the contact info window is OFF
    props.conRef.current.className = "hiddenContainer";
  }
  function contactResponse() {
    //switch the contact info window ON or OFF
    props.conRef.current.className =
      props.conRef.current.className === "hiddenContainer spreadContainerAni"
        ? "hiddenContainer"
        : "hiddenContainer spreadContainerAni";
    //make sure the resume info window is OFF
    props.resRef.current.className = "hiddenContainer";
  }
  return (
    <header>
      <div className="containerLeft">
        {/* <p className="firstName">
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
        </p> */}
        <p className="firstName">
          <span className="fn1">E</span>
          <span className="fn2">M</span>
          <span className="fn3">I</span>
          <span className="fn4">L</span>
          <span> </span>
          <span className="fn5">K</span>
          <span className="fn6">U</span>
          <span className="fn7">O</span>
          <span className="fn8">V</span>
          <span className="fn9">I</span>
          <span className="fn10">N</span>
          <span className="fn11">E</span>
          <span className="fn12">N</span>
        </p>
      </div>
      <div className="containerRight">
        <p className="resumeP" onClick={() => resumeResponse()}>
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>U</span>
          <span>M</span>
          <span>E</span>
        </p>
        <p className="contactP" onClick={() => contactResponse()}>
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
