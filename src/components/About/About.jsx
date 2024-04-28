import aboutImage from "../../assets/images/about-image.png";

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__bottom">
          <div className="about__container-image">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about__container-content">
            <h1 className="about__container-header">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              similique, placeat expedita architecto deserunt facere tempore
              omnis inventore est, neque provident quibusdam adipisci debitis
              laborum maiores explicabo. Minus, eligendi asperiores! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              voluptas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
