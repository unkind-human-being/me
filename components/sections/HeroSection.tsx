// components/sections/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="section hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 className="hero-title">Abdul Nasirin</h1>
          <h2 className="hero-subtitle">Web & App Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and fast web applications. I love
            creating clean UIs, smooth user experiences, and scalable
            architectures for real-world projects.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-border">
            <Image
              src="/me/profile.png"
              alt="Profile picture of Abdul Nasirin"
              width={260}
              height={260}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
