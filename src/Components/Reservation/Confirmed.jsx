import "./Confirmed.scss";
import  { ReactComponent as ImgVerified } from "../../Assets/Verified.svg"; 
function Confirmed (){
  return (
    <section className="confirmed container">
      <div className="img-wrap">
        <ImgVerified />
      </div>
      <h2>Reservation Confirmed</h2>
      <p className="text">
        <b>Thank You.!</b> You're Reservation is confirmed and an email has been
        sent with reservation details
      </p>
    </section>
  );
};

export default Confirmed;
