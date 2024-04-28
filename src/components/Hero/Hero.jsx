import { DefaultBtn } from "../components.styles";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../assets/images/hero-image.png";
import HeroSocials from "./HeroSocial";
function Hero() {
  return (
    <section id="hero">
      <HeroSocials />
      <div className="hero__container">
        <div className="hero__left" data-aos="slide-right">
          <div className="hero__title">
            <h1>Lorem, ipsum.</h1>
            <span>
              <Typewriter
                words={["PiezoGen", "PiezoGen", "PiezoGen"]}
                loop={0}
                cursor
              />
            </span>
          </div>
          <p>Welcome, the transition to the Digital World begins here.</p>
          <div className="hero__buttons">
            <DefaultBtn>Join Us</DefaultBtn>
            <a href="#">Register</a>
          </div>
        </div>
        <div className="hero__right">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
