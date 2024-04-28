import "./assets/styles/style.css";
import Contact from "./components/Contact/Contact";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Header from "./layout/Header";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Faq from "./components/FAQ/Faq";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const handleScroll = () => {
    window.scrollY > 100 ? setScrollVisible(true) : setScrollVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero setActiveModal={setActiveModal} />
      <About />
      <Services />
      <Faq />
      <Contact />

      <Register activeModal={activeModal} setActiveModal={setActiveModal} />
      {scrollVisible ? <ScrollTopBtn /> : ""}
      <Footer />
    </>
  );
}

export default App;
