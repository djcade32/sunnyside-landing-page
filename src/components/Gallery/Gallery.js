import "./Gallery.css";
import milkImgMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import coneMobile from "../../images/mobile/image-gallery-cone.jpg";
import orangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import sugarCubesMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import milkImgDesktop from "../../images/desktop/image-gallery-milkbottles.jpg";
import coneDesktop from "../../images/desktop/image-gallery-cone.jpg";
import orangeDesktop from "../../images/desktop/image-gallery-orange.jpg";
import sugarCubesDesktop from "../../images/desktop/image-gallery-sugarcubes.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <img
        className="gallery-img-mobile"
        src={milkImgMobile}
        alt="Milk bottles."
      />
      <img
        className="gallery-img-mobile"
        src={coneMobile}
        alt="Icecream cone."
      />
      <img className="gallery-img-mobile" src={orangeMobile} alt="Orange" />
      <img
        className="gallery-img-mobile"
        src={sugarCubesMobile}
        alt="Sugar cubes."
      />
      <img
        className="gallery-img-desktop"
        src={milkImgDesktop}
        alt="Milk bottles."
      />
      <img
        className="gallery-img-desktop"
        src={coneDesktop}
        alt="Icecream cone."
      />
      <img className="gallery-img-desktop" src={orangeDesktop} alt="Orange" />
      <img
        className="gallery-img-desktop"
        src={sugarCubesDesktop}
        alt="Sugar cubes."
      />
    </div>
  );
}

export default Gallery;
