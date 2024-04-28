import siteLogo from "../assets/images/site-logo.png";

function Footer() {
  const navigations = [
    {
      label: "About Us",
      value: "#about-us",
    },
    {
      label: "Faq",
      value: "#faq",
    },
    {
      label: "Contact Us",
      value: "#contact",
    },
  ];

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__top">
          <nav>
            {navigations.map((navigation, index) => {
              return (
                <a key={index} href={navigation.value}>
                  {navigation.label}
                </a>
              );
            })}
          </nav>
          <div className="footer__logo">
            <img src={siteLogo} alt="Site Logo" />
            <h1>
              Piezo<span>Gen</span>
            </h1>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Copyright © 2024, All rights reserved.</p>
          <div className="footer__socials">
            <a href="#">
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i class="ri-youtube-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
