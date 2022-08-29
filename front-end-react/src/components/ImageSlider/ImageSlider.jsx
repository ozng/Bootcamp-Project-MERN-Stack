import { Carousel } from "antd";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  return (
    <div>
      <Carousel className="image-slider-container">
        {images.map((item) => (
          <div className="image-slider-image-container">
            <img
              src={item}
              alt="otel pictures"
              className="image-slider-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
