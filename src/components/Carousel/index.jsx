import { useState } from "react";
import { ReactComponent as CarouselArrow } from "../../assets/carouselArrow.svg";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = props.props;

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <figure className="carousel">
      <div
        className="carousel__picture"
        style={{
          backgroundImage: `url(${pictures[currentIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <figcaption>
        <div
          className={`carousel__arrows ${pictures.length === 1 ? "hide" : ""}`}
        >
          <button className="carousel__prevPicture" onClick={goToPrev}>
            <CarouselArrow />
          </button>
          <button className="carousel__nextPicture" onClick={goToNext}>
            <CarouselArrow />
          </button>
        </div>
        <p
          className={`carousel__bullet-point ${
            pictures.length === 1 ? "hide" : ""
          }`}
        >
          {currentIndex + 1}/{pictures.length}
        </p>
      </figcaption>
    </figure>
  );
}

export default Carousel;
