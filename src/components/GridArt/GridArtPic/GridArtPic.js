import "./GridArtPic.css";

function GridArtPic(props) {
  return (
    <div className="grid-art-pic">
      <img className="grid-art-pic-img" src={props.img} alt="" />
      <div className="grid-art-pic-text">
        <h1
          style={{ color: `${props.fontText}` }}
          className="grid-art-pic-text-header"
        >
          {props.header}
        </h1>
        <p
          style={{ color: `${props.fontText}` }}
          className="grid-art-pic-text-paragraph"
        >
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export default GridArtPic;
