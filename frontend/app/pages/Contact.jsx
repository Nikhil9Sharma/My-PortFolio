"use client";
import "../SytleFiles/Contact.css";

export default function Contact() {
    return (
        <>
            <section>
                <div className="contact-main-area">
                    <div className="">
                        <div className="about-me-section-heading-area">
                            <h1 className="project-heading heading-sec__main">Contact Me</h1>
                            <div className="underline"></div>
                            <p className="sub-heading">
                                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                            </p>
                            <p className="sub-heading">
                                Get in touch or shoot me an email directly on{" "}
                                <span className="change-color-span">workwithnikhil09@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <div className="contact-form-heading">
                            <h3>Contact Form</h3>
                            <form action="submit" className="contact-form">
                                <label htmlFor="user-name">Name</label>
                                <input id="user-name" type="text" placeholder="Enter Your Name..." />

                                <label htmlFor="user-email">Email</label>
                                <input id="user-email" type="email" placeholder="Enter Your Email Address..." />

                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Enter Your Message"></textarea>

                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
