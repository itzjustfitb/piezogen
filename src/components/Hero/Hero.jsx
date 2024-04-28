import { DefaultBtn } from "../components.styles";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../assets/images/hero-image.png";
import HeroSocials from "./HeroSocial";
function Hero({ setActiveModal }) {
  return (
    <section id="hero">
      <HeroSocials />
      <div className="hero__container">
        <div className="hero__left" data-aos="fade-right">
          <div className="hero__title">
            <h1>Welcome to</h1>
            <span>
              <Typewriter
                words={["PiezoGen", "PiezoGen", "PiezoGen"]}
                loop={0}
                cursor
              />
            </span>
          </div>
          <p>Energy under your feet</p>
          <div className="hero__buttons">
            <DefaultBtn>Join Us</DefaultBtn>
            <a onClick={() => setActiveModal(true)} href="#">
              Register
            </a>
          </div>
        </div>
        <div className="hero__right" data-aos="fade-left">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
