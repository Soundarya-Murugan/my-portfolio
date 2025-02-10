
import React from "react";
import FadeContent from "./FadeContent";
import "../assets/styles/About.css";

const About = () => {
  const content1 = "Hello! I'm Soundarya Murugan, a 22-year-old Web developer Specializing in the FastAPI, Pymongo, HTML,CSS,Javascript, Bootstrap. And also experienced in Git, Ubuntu 20.0.";
  const content2 = "Deployment knowledged in AWS EC2, S3 Buckets, Load Balancer and also Azure cloud,Vercel Cloud platforms. Worked on Mailing services using AWS SMTP, Crontabs in Vercel.";

  return (
    <section id="about">
      <h2>About Me</h2>
      <FadeContent content={content1} />
      <FadeContent content={content2} />
    </section>
  );
};

export default About;