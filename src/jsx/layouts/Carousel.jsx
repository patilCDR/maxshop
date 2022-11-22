import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../../styles/index.css";

function CarouselFadeExample() {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item interval={2000}>
        <img
          className="img-slider d-block w-100"
          src="https://demoxml.com/html/maxshop/images/slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h2>NEW WAY TO PURCHASE YOUR PRODUCTS</h2>
          <p style={{ color: "grey" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam excepturi et neque nisi,
            incidunt quisquam.
          </p>
          <Button
            variant="outline-dark"
            style={{ borderRadius: "0px", color: "#b6795f" }}
          >
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="img-slider d-block w-100"
          src="https://demoxml.com/html/maxshop/images/slider-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h2>NEW WAY </h2>
          <p style={{ color: "grey" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam excepturi et neque nisi.
          </p>
          <Button
            variant="outline-dark"
            style={{ borderRadius: "0px", color: "#b6795f" }}
          >
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="img-slider d-block w-100"
          src="https://demoxml.com/html/maxshop/images/slider-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h2> PURCHASE YOUR PRODUCTS</h2>
          <p style={{ color: "grey" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam excepturi et neque nisi,
            incidunt quisquam.
          </p>
          <Button
            variant="outline-dark"
            style={{ borderRadius: "0px", color: "#b6795f" }}
          >
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
