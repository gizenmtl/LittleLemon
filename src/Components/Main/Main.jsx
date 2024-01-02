import About from "../About/About";
import Banner from "../Banner/Banner";
import "./Main.scss";
import SpecialsMenu from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
const Main = () => {
  return (
    <main>
      <Banner />
      <SpecialsMenu />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
