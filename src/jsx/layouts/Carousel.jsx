import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../../styles/index.css";

function CarouselFadeExample({ carouselItems }) {
  return (
    <Carousel fade variant="dark">
      {carouselItems.map((value, index) => (
        <Carousel.Item interval={2000} key={index}>
          <img
            className="img-slider d-block w-100"
            src={value.img}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h2>{value.title}</h2>
            <p style={{ color: "grey" }}>{value.desc}</p>
            <Button
              variant="outline-dark"
              style={{ borderRadius: "0px", color: "#b6795f" }}
            >
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
