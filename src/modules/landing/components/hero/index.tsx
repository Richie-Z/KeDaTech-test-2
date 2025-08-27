import type { JSX } from "react";

import HeroBlob from "@/assets/images/hero-blob.svg?react";
import HeroWave from "@/assets/images/hero-wave.svg?react";
import Ilustration from "@/assets/images/ilustration.svg?react";
import Logo from "@/assets/images/logo.png";

import "./hero.scss";
import LoginModal from "../login-modal";

const Hero = (): JSX.Element => {
  return (
    <section className="hero" id="home">
      <HeroBlob className="hero-blob" />

      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>Home</p>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>

          <LoginModal />
        </ul>

      </nav>

      <div className="hero-content">
        <p className="first-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates aut et laborum! Hic consequuntur asperiores quo officia animi rem. </p>

        <p className="second-p">"Debitis molestiae commodi necessitatibus delectus"</p>
        <Ilustration className="ilustration" height="auto" />
      </div>

      <HeroWave className="hero-wave" />
    </section>
  )
}

export default Hero
