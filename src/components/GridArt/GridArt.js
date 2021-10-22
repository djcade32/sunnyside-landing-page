import "./GridArt.css";
import GridArtRowOne from "./GridArtRowOne/GridArtRowOne";
import GridArtRowTwo from "./GridArtRowTwo/GridArtRowTwo";

function GridArt() {
  return (
    <div class="grid-art">
      <GridArtRowOne />
      <GridArtRowTwo />
    </div>
  );
}

export default GridArt;
