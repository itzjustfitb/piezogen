import React from "react";
import { SocialItem } from "../components.styles";

function HeroSocials() {
  return (
    <aside className="hero__socials">
      <SocialItem color="#1d74b1">
        <i className="ri-facebook-fill"></i>
      </SocialItem>
      <SocialItem color="#f33a7e">
        <i className="ri-instagram-line"></i>
      </SocialItem>
      <SocialItem color="#1d74b1">
        <i className="ri-youtube-line"></i>
      </SocialItem>
    </aside>
  );
}

export default HeroSocials;
