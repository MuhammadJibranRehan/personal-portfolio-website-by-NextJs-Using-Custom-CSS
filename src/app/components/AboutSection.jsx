"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "./style.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list">
        <li>Artificial Intelligence, Web3.0, Metaverse (Going On)</li>
        <li>The Smart School, City School, Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list">
        <li>English Language Course</li>
        <li>Editing</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container about-container-md about-container-xl">
        <Image src="/images/about-image.png" alt="About Sec Pic" className="about-image" width={500} height={500}/>
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-paragraph about-paragraph-lg">
            I am a Front-End web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Python HTML, CSS, and Git.
            I am a quick learner and I am always looking to expand my knowledge and skill set.
            I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="tab-buttons">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="tab-content">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;