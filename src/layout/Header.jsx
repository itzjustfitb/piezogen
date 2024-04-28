import { useEffect, useState } from "react";
import siteLogo from "../assets/images/site-logo.png";
import NightModeBtn from "../components/NightModeBtn";
import { DefaultBtn } from "../components/components.styles";
import { Fade as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [isOpen]);
  const navigations = [
    {
      label: "Home",
      value: "/",
    },

    {
      label: "About us",
      value: "#about",
    },

    {
      label: "Services",
      value: "#services",
    },

    {
      label: "Contact Us",
      value: "#contact",
    },
  ];
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <img src={siteLogo} alt="Site Logo" />
          <h1>
            Piezo<span>Gen</span>
          </h1>
        </div>
        <nav className={`header__container-nav ${isOpen ? "nav-active" : ""}`}>
          {navigations.map((navigation, index) => {
            return (
              <a
                onClick={() => setIsOpen(false)}
                key={index}
                href={navigation.value}
              >
                {navigation.label}
              </a>
            );
          })}
        </nav>
        <div className="header__buttons">
          <NightModeBtn />
          <DefaultBtn>Registration</DefaultBtn>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
