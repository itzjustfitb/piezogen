import siteLogo from "../assets/images/site-logo.png";
import NightModeBtn from "../components/NightModeBtn";
import { DefaultBtn } from "../components/components.styles";

function Header() {
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
      label: "News",
      value: "#news",
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
        <nav className="header__container-nav">
          {navigations.map((navigation, index) => {
            return (
              <a key={index} href={navigation.value}>
                {navigation.label}
              </a>
            );
          })}
        </nav>
        <div className="header__buttons">
          <NightModeBtn />
          <DefaultBtn>Registration</DefaultBtn>
        </div>
      </div>
    </header>
  );
}

export default Header;
