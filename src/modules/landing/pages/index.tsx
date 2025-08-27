import "./landing.scss";
import Hero from "@/modules/landing/components/hero";
import About from "@/modules/landing/components/about";
import Pricing from "@/modules/landing/components/pricing";
import Contact from "@/modules/landing/components/contact";
import Brands from "@/modules/landing/components/brands";

import FooterSvg from "@/assets/images/footer.svg?react";

export default function LandingPage() {
  return (
    <div>
      <Hero />

      <About />

      <Brands />

      <Pricing />

      <Contact />

      <FooterSvg className="footer-svg" width="100%" />
    </div>
  )

}
