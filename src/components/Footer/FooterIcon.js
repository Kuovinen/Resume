export default function FooterIcon(props) {
  return (
    <img
      title={props.txt}
      src={props.url}
      alt={`${props.txt} icon`}
      className="svgicon"
    />
  );
}
