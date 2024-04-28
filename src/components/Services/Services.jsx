function Services() {
  const services = [
    {
      img: "ri-truck-line",
      title: "Delivery",
      description:
        "Fast and reliable delivery and installation is carried out by the company.",
      price: "Free",
    },
    {
      img: "ri-vip-fill",
      title: "Premium Package",
      description:
        "The purchase and installation of panels is covered by the company. Problems arising within 1 year are eliminated free of charge.",
      price: "2000 $",
    },
    {
      img: "ri-home-3-fill",
      title: "Standart Package",
      description:
        "Panels are purchased personally by the buyer. Installation and troubleshooting within 1 year is carried out by the enterprise.",
      price: "1000 $",
    },
  ];

  return (
    <section id="services">
      <div className="services__container">
        <div className="services__top" data-aos="fade-up">
          Services
        </div>
        <div className="services__bottom">
          {services.map((service, index) => {
            return (
              <div key={index} className="services__card" data-aos="fade-up">
                <i className={service.img}></i>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <p id="service__price">{service.price}</p>
                <button>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
