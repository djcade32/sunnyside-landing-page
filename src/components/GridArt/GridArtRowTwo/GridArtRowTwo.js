import "./GridArtRowTwo.css";
import gridTwoImg from "../../../images/mobile/image-stand-out.jpg";

function GridArtRowTwo() {
  return (
    <div className="grid-art-row-two">
      <img className="grid-two-img" src={gridTwoImg} alt="Red cup." />
      <div className="grid-two-text">
        <h1 className="grid-two-text-header">
          Stand out to the right audience
        </h1>
        <p className="grid-two-text-paragraph">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters. We'll build and extend
          your brand in digital places.
        </p>
        <button className="grid-two-text-button">Learn more</button>
      </div>
    </div>
  );
}

export default GridArtRowTwo;
