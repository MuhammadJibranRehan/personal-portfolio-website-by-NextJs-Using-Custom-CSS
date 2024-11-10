"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg"></div>
      <div className="contact-content">
        <h5 className="contact-title">Let&apos;s Connect</h5>
        <p className="contact-description">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="contact-socials">
          <Link href="https://github.com/MuhammadJibranRehan" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-jibran-rehan-65a6a02bb/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="success-message">Email sent successfully!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="input-field"
                placeholder="ABC@XYZ.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="input-field"
                placeholder="Subject goes here...."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input-field"
                placeholder="MSG goes here...."
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;