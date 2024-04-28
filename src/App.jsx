import "./assets/styles/style.css";
import Contact from "./components/Contact/Contact";
import { ArrowButton } from "./components/components.styles";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Header from "./layout/Header";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Faq from "./components/FAQ/Faq";
import About from "./components/About/About";

function App() {
  const [scrollVisible, setScrollVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setScrollVisible(true) : setScrollVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Faq />
      <Contact />
      {scrollVisible ? <ScrollTopBtn /> : ""}
      <Footer />
    </>
  );
}

export default App;
