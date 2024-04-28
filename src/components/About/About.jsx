import aboutImage from "../../assets/images/about-image.png";

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__bottom">
          <div className="about__container-image" data-aos="fade-right">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about__container-content" data-aos="fade-left">
            <h1 className="about__container-header">About Us</h1>
            <p>
              PİEZOGEN LTD is a piezoelectric-based supplier and installation
              company that provides advanced piezoceramics, piezoelectric
              transducers and piezoelectric ceramic shapes, piezo devices, and
              piezo application support services just like any other worldwide
              companies such as CeramTec, Piezo Technologies and etc. Those in
              the industry who are familiar with piezoelectric materials will
              know the theory, but piezo materials aren't particularly
              well-known in general. And it can not be said our country is so
              far ahead of the other countries in the field of the alternative
              energy. For that reason we aim to widen the appications of this
              technology, assure the progress of the use of alternative
              perspectives and grow as much as possible to maintain our goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
