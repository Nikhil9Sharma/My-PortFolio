"use client";
import { useState } from "react";
import "../../SytleFiles/Projects.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can later integrate with an API or email service here
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <div className="contact-main-area">
        <div className="about-me-section-heading-area">
          <h1 className="project-heading heading-sec__main">Contact Me</h1>
          <div className="underline"></div>
          <p className="sub-heading">
            Feel free to contact me by submitting the form below, and I’ll get back to you as soon as possible.
          </p>
          <p className="sub-heading">
            Get in touch or shoot me an email directly at{" "}
            <span className="change-color-span">workwithnikhil09@gmail.com</span>
          </p>
        </div>

        <div className="contact-form-heading">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name..."
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email Address..."
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
