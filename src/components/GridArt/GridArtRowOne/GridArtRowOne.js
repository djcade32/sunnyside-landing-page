import "./GridArtRowOne.css";
import gridOneImg from "../../../images/mobile/image-transform.jpg";

function GridArtRowOne() {
  return (
    <div className="grid-art-row-one">
      <img
        className="grid-one-img"
        src={gridOneImg}
        alt="Egg on yellow background."
      />
      <div className="grid-one-text">
        <h1 className="grid-one-text-header">Transform your brand</h1>
        <p className="grid-one-text-paragraph">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of your marketing for you.
        </p>
        <button className="grid-one-text-button">Learn more</button>
      </div>
    </div>
  );
}

export default GridArtRowOne;
