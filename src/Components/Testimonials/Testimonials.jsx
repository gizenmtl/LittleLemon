import "./Testimonials.scss";
import Image1 from "../../Assets/image1.jpg";
import Image2 from "../../Assets/image3.jpg";
import Image3 from "../../Assets/image2.jpg";
import Image4 from "../../Assets/image4.jpg";
import { ReactComponent as Star } from "../../Assets/star.svg";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <section className="testimonials-wrap">
          <p className="heading">What people say about us !</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image1} alt="Customer" />
              </div>
              <p className="name">Gabriella</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image2} alt="Customer" />
              </div>
              <p className="name">Nicholas</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image3} alt="Customer" />
              </div>
              <p className="name">Amelia</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image4} alt="Customer" />
              </div>
              <p className="name">Tommy</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
