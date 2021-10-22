import "./GridArt.css";
import GridArtRow from "./GridArtRow/GridArtRow";
import GridArtPic from "./GridArtPic/GridArtPic";

import gridOneImg from "../../images/mobile/image-transform.jpg";
import gridTwoImg from "../../images/mobile/image-stand-out.jpg";
import gridThreeImg from "../../images/mobile/image-graphic-design.jpg";
import gridFourImg from "../../images/mobile/image-photography.jpg";

function GridArt() {
  const gridOneParagraph =
    "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of your marketing for you.";
  const gridOneUnderlineColor = "hsla(51, 100%, 49%, 0.377)";
  const gridTwoParagraph =
    "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters. We'll build and extend your brand in digital places.";
  const gridTwoUnderlineColor = "hsla(7, 99%, 70%, 0.397)";
  const gridThreeParagraph =
    "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.";
  const gridFourParagraph =
    "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.";

  return (
    <div className="grid-art">
      <GridArtRow
        img={gridOneImg}
        imgAlt="Egg on yellow background."
        header="Transform your brand"
        paragraph={gridOneParagraph}
        underlineColor={gridOneUnderlineColor}
      />
      <GridArtRow
        img={gridTwoImg}
        imgAlt="Red cup."
        header="Stand out to the right audience"
        paragraph={gridTwoParagraph}
        underlineColor={gridTwoUnderlineColor}
      />
      <div className="grid-art-row-three">
        <GridArtPic
          img={gridThreeImg}
          header="Graphic Design"
          paragraph={gridThreeParagraph}
          fontText="var(--dark-desaturated-cyan-gd-text)"
        />
        <GridArtPic
          img={gridFourImg}
          header="Photography"
          paragraph={gridFourParagraph}
          fontText="var(--dark-blue-photography-text)"
        />
      </div>
    </div>
  );
}

export default GridArt;
