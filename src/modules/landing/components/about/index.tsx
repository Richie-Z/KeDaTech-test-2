import type { JSX } from "react";
import "./about.scss";
import SectionHeader from "@/components/section-header";

const About = (): JSX.Element => {
  return (
    <section className="about" id="about">
      <SectionHeader title="About Us" subtitle="Our short story" />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio animi, sed dolorem voluptatum officiis aperiam placeat sit labore minima veniam neque consectetur iste, laudantium quam, adipisci eligendi eaque id.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quaerat numquam ex cupiditate modi est qui? Sapiente ea sunt deleniti doloremque fugit voluptatem quia est voluptas consequatur. Dolore, voluptatem fuga!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio animi, sed dolorem voluptatum officiis aperiam placeat sit labore minima veniam neque consectetur iste, laudantium quam, adipisci eligendi eaque id.
      </p>
    </section>
  )
}

export default About;
