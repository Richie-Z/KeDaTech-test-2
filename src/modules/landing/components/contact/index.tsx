import React from "react";
import "./Contact.scss";
import SectionHeader from "@/components/section-header";
import Button from "@/components/button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionHeader
        title="Contact Us"
        subtitle="We are ready to help your business grow faster"
      />

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Any questions? Please contact us using the form or contact information below.
          </p>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon" /> Jl. Apasaja, Jakarta
            </li>
            <li>
              <FaPhoneAlt className="icon" /> +62 123 4567890
            </li>
            <li>
              <FaEnvelope className="icon" /> zakariarichie@gmail.com
            </li>
          </ul>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Type your message..." />
          </div>

          <Button name="Send Message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
