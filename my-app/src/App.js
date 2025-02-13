import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import { Card, CardContent } from "./components/ui/card";
import "./style.css";
import profilePhoto from "./assets/profile.jpg";
import resumePDF from "./assets/EshwarRam_Resume.pdf"; // Ensure your resume file is in the correct path

const projects = [
  { name: "COMPETITIVE-FEATURE LEARNING", description: "An online platform offering courses with streamlined enrollment and user registration, ensuring seamless access to information and support while maintaining scalability for future growth. Institute aims to empower students by granting them access to high-quality learning materials that align with their career aspirations and educational goals.   Tools used : React JS , postgresql , Flask" },
  { name: "STUDENT - RESULT MANAGEMENT SYSTEM", description: "The project title is “Student Management System”. Student Management system is a software which is helpful for students as well as college or school authorities. In this software we can register as a user, and users are classified as students and administrators. Administrators have the power to add, edit, and delete users. This project mainly focuses on student results and is designed to save time and effort.   Tools used : HTML,CSS,javascript,php" },
  { name: "Task Tracker", description: "This is a basic simple project where we can list tasks and mark them as completed.  Tools used : React js" },
];

export default function Portfolio() {
  return (
    <div>
      <div className="animated-bg"></div> {/* 3D Animated Background */}

      <div className="container">
        <header className="header">
          <img src={profilePhoto} alt="Eshwar Ram.N" className="profile-photo floating" />
          <h1 className="text-primary">Eshwar Ram.N</h1>
          <p className="text-secondary">Full Stack Developer | Front-End Developer | React Developer</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/eshwarram07" className="icon-link"><FaGithub /></a>
            <a href="www.linkedin.com/in/eshwar-ram-55b598259" className="icon-link"><FaLinkedin /></a>
            <a href="mailto:eshwarramn2002@gmail.com" className="icon-link"><FaEnvelope /></a>
          </div>
        </header>

        {/* Resume Section */}
        <div className="resume-box">
          <a href={resumePDF} download="EshwarRam_Resume.pdf" className="resume-button">
            <FaFileDownload /> Download Resume
          </a>
        </div>

        {/* About Me Section (Now below the image) */}
        <section className="about-box">
          <h2 className="text-primary">About Me</h2>
          <p className="text-muted">
            Passionate Software Development Engineer with expertise in 
            <strong> Full Stack Web Development</strong>. Proficient in <strong>React, Spring Boot, and SQL</strong>, 
            with a strong focus on scalable web applications. Dedicated to writing clean, efficient, 
            and user-centric code.
          </p>
        </section>

        {/* Portfolio Overview */}
        <section className="portfolio-overview">
          <h2 className="text-primary">Portfolio Overview</h2>
          <p className="text-muted">
            This portfolio showcases my expertise in web development, featuring <strong>real-world projects</strong> 
            built with modern technologies. It includes interactive UI components, back-end functionality, 
            and database integration.
          </p>
        </section>

        

        {/* Projects Section */}
        <section className="projects-box">
          <h2 className="text-bold">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card key={index} className="card floating">
                <CardContent>
                  <h2 className="text-accent">{project.name}</h2>
                  <p className="text-muted">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-box">
          <h2 className="text-primary">Contact Me</h2>
          <p className="text-muted"><FaEnvelope /> Email: eshwarramn2002@gmail.com</p>
          <p className="text-muted"><FaPhone /> Phone: +91 7397297819</p>
          <p className="text-muted"><FaMapMarkerAlt /> Location: Vellore, India</p>
        </section>

        <footer className="footer">
          <p className="text-footer">© 2025 Eshwar Ram.N. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
