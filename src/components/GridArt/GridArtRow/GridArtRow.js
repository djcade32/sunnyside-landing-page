import "./GridArtRow.css";

function GridArtRow(props) {
  const textDecoration = "underline " + props.underlineColor + "  4px";
  return (
    <div className="grid-art-row">
      <img className="grid-img" src={props.img} alt={props.imgAlt} />
      <div className="grid-text">
        <h1 className="grid-text-header">{props.header}</h1>
        <p className="grid-text-paragraph">{props.paragraph}</p>
        <button
          style={{ textDecoration: `${textDecoration}` }}
          className="grid-text-button"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default GridArtRow;
