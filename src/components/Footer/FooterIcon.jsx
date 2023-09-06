//THIS IS THE BLUEPRINT FOR THE TECH ICON AT THE BOTTOM

export default function FooterIcon(props) {
  console.log(`svgicon ${props.glow === 1 ? "doGlow" : ""}`);
  return (
    <img
      title={props.txt}
      src={props.url}
      alt={`${props.txt} icon`}
      className={`svgicon ${props.glow === 1 ? "doGlow" : ""} ${
        props.glowMore === 1 ? "glowMore" : ""
      }`}
    />
  );
}
