import "./GridArtRow.css";

function GridArtRow(props) {
  const textDecoration = "underline " + props.underlineColor + "  4px";
  return (
    <div className="grid-art-row">
      <img
        className="grid-img-mobile"
        src={props.imgMobile}
        alt={props.imgAlt}
      />
      <img
        className="grid-img-desktop"
        src={props.imgDesktop}
        alt={props.imgAlt}
        style={{ order: props.reverse ? "2" : "1" }}
      />
      <div style={{ order: props.reverse ? "1" : "2" }} className="grid-text">
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
