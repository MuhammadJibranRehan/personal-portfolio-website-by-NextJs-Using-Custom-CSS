import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text-container"
        >
          <h1 className="hero-heading hero-heading-lg">
            <span className="hero-gradient-text">Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                "Muhammad Jibran Rehan",
                1000,
                "Web Developer",
                1000,
                "Game Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-paragraph">
            Passionate about translating ideas into interactive, visually
            appealing, and accessible web experiences. I bring designs to life
            through clean code and thoughtful interaction.
          </p>
          <div>
            <Link href="/#contact" className="hero-button">
              Hire Me
            </Link>
            <Link href="/" className="cv-button">
              <span className="cv-button-inner">Download CV</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper hero-image-wrapper-lg">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="hero-image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
