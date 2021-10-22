import "./Gallery.css";
import milkImg from "../../images/mobile/image-gallery-milkbottles.jpg";
import cone from "../../images/mobile/image-gallery-cone.jpg";
import orange from "../../images/mobile/image-gallery-orange.jpg";
import sugarCubes from "../../images/mobile/image-gallery-sugar-cubes.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <img src={milkImg} alt="Milk bottles." />
      <img src={cone} alt="Icecream cone." />
      <img src={orange} alt="Orange" />
      <img src={sugarCubes} alt="Sugar cubes." />
    </div>
  );
}

export default Gallery;
