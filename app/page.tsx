"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ParallaxLutsBackground from "@/components/ParallaxLutsBackground";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageSrc?: string;
};

type ChatMessage = {
  id: number;
  from: "user" | "bot";
  text: string;
};

const projects: Project[] = [
  {
    title: "Tawi Tawi Basketball",
    description:
      "A scheduling and player tracker web app for basketball games in Tawi-Tawi, helping organizers manage match schedules, teams, and player stats.",
    tags: ["Web App", "Scheduling", "Sports"],
  },
  {
    title: "Social Media IICT",
    description:
      "A social platform for the IICT department where users can post updates, share projects, and chat with others in the community.",
    tags: ["Social Media", "Chat", "Community"],
  },
  {
    title: "Enrollment System Template",
    description:
      "A clean and reusable enrollment system template, designed as a base for schools and institutions to manage student registration.",
    tags: ["Template", "Enrollment", "Admin Panel"],
  },
  {
    title: "Picart",
    description:
      "A complete e-commerce mobile application built with Kotlin, designed for browsing, adding to cart, and purchasing products on the go.",
    tags: ["Mobile App", "Kotlin", "E-commerce"],
  },
  {
    title: "Bongao Explore",
    description:
      "A 2D Unity game where the player explores Bongao, discovers local heritage, and learns about its culture through gameplay.",
    tags: ["Unity", "2D Game", "Heritage"],
  },
  {
    title: "Storage",
    description:
      "A native Android storage application that lets users save notes, lists, and photos offline—everything stored locally and accessible anytime.",
    tags: ["Android", "Offline", "Productivity"],
  },
  {
    title: "Budget Tracker",
    description:
      "A web app to track the budget of any department, with separate roles for super admin and admin to manage and monitor spending.",
    tags: ["Web App", "Finance", "Multi-role"],
  },
  {
    title: "Color Game",
    description:
      "A native Android mobile color-based game built with Flutter and Dart, fully integrated with Google Ads for monetization.",
    tags: ["Flutter", "Game", "Google Ads"],
  },
  {
    title: "SMM Reel – Restaurant Promo",
    description:
      "Short-form social media video content showcasing restaurant offers and brand personality.",
    tags: ["SMM", "Video", "Facebook"],
    link: "https://www.facebook.com/reel/1510845763397986",
  },
  {
    title: "SMM Reel – Storytelling Content",
    description:
      "Engaging storytelling reel designed to boost engagement and brand connection.",
    tags: ["SMM", "Storytelling", "Facebook"],
    link: "https://www.facebook.com/reel/1589284595769296",
  },
  {
    title: "SMM Reel – Quick Highlights",
    description:
      "Fast-paced highlight reel optimized for scroll-stopping visuals on social media.",
    tags: ["SMM", "Highlights", "Facebook"],
    link: "https://www.facebook.com/reel/1329765208318923",
  },
  {
    title: "Graphic Design Sample",
    description:
      "A custom graphic design sample created for social media—balancing clean layout and eye-catching color.",
    tags: ["Graphic Design", "Branding"],
    imageSrc: "/graphic/picture1.png",
  },
];

export default function HomePage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // AI Lhuts chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      from: "bot",
      text: "Hey, I’m AI Lhuts 🤖 Ask me anything about Abdul’s projects, services, or how we can work together.",
    },
  ]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat to bottom when messages change
  useEffect(() => {
    if (!isChatOpen) return;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatOpen]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      from: "user",
      text: trimmed,
    };

    // Basic fake AI reply (you can later replace with real API call)
    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      from: "bot",
      text:
        "Nice question! I’m a demo version of AI Lhuts. In the real version, I’ll answer based on Abdul’s projects, pricing, and services. 👨‍💻",
    };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
    setChatInput("");
  };

  // Typing animation for "Abdul M. Nasirin"
  useEffect(() => {
    const fullName = "Abdul M. Nasirin";
    let index = 0;
    let direction: "forward" | "back" = "forward";

    const interval = setInterval(() => {
      if (direction === "forward") {
        index++;
        if (index >= fullName.length) {
          index = fullName.length;
          direction = "back";
        }
      } else {
        index--;
        if (index <= 0) {
          index = 0;
          direction = "forward";
        }
      }
      setTypedName(fullName.slice(0, index));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Scroll reveal for sections
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[data-section-id]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-section-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Register service worker for PWA / offline
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .catch((err) =>
          console.error("Service worker registration failed", err)
        );
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  const isSectionVisible = (id: string) => visibleSections.includes(id);

  return (
    <div className="page">
      {/* Parallax LUTS background */}
      <ParallaxLutsBackground />

      {/* Sticky nav wrapper */}
      <div className="sticky-nav">
        <Navbar />
      </div>

      <main className="main">
        {/* HOME */}
        <section
          id="home"
          data-section-id="home"
          className={`section hero-section ${
            isSectionVisible("home") ? "section-visible" : ""
          }`}
        >
          <div className="section-card hero-card-wrap">
            <div className="hero-grid">
              {/* Left: intro */}
              <div className="hero-text">
                <p className="hero-tagline">FULL-STACK FREELANCER</p>
                <h1 className="hero-title">
                  I build clean, modern
                  <span className="hero-gradient">
                    {" "}
                    Website &amp; Mobile experiences
                  </span>
                </h1>
                <p className="hero-subtitle">
                  I help brands, students, and teams turn ideas into working
                  apps—whether it&apos;s a portfolio, internal system, mobile
                  app, or a small game. Professional, fast, and grounded in real
                  use cases.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary">
                    View Projects
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    Work With Me
                  </a>
                </div>

                <div className="hero-pills">
                  <span>Web Development</span>
                  <span>Mobile Apps</span>
                  <span>Game Dev</span>
                  <span>Social Media Strategy</span>
                </div>
              </div>

              {/* Right: profile card simplified */}
              <div className="hero-card">
                <div className="hero-card-inner">
                  <div className="hero-card-header">
                    <span className="hero-card-label">Profile Snapshot</span>
                    <span className="hero-card-status">
                      Available for projects
                    </span>
                  </div>

                  <div className="hero-card-body">
                    <div className="hero-avatar-wrapper">
                      <Image
                        src="/me/profile.png"
                        alt="Profile of Abdul Nasirin"
                        width={110}
                        height={110}
                        className="hero-avatar"
                      />
                    </div>

                    <div className="hero-card-info">
                      <h2 className="hero-name">Abdul M. Nasirin</h2>
                      <p className="hero-role">
                        Freelancer · Web &amp; Mobile Developer · Game &amp;
                        SMM
                      </p>

                      <div className="hero-meta-row">
                        <span>Location:</span>
                        <span>Bongao, Tawi-Tawi, Philippines</span>
                      </div>
                      <div className="hero-meta-row">
                        <span>Focus:</span>
                        <span>Clean UI, real projects, solid execution</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          data-section-id="about"
          className={`section ${
            isSectionVisible("about") ? "section-visible" : ""
          }`}
        >
          <div className="section-card about-card">
            <div className="section-header">
              <h2>About Me</h2>
              <p>Who I am and what I love building.</p>
            </div>

            <div className="about-grid">
              {/* Left: photo */}
              <div className="about-photo-wrapper">
                <div className="about-photo-border">
                  <Image
                    src="/me/profile.png"
                    alt="Profile of Abdul M. Nasirin"
                    width={260}
                    height={260}
                    className="about-photo"
                  />
                </div>
              </div>

              {/* Right: text */}
              <div className="about-text">
                <div className="typing-box">
                  <span className="typing-label">Hi, I&apos;m</span>
                  <span className="typing-name">
                    {typedName}
                    <span className="typing-cursor">|</span>
                  </span>
                </div>

                <p>
                  I&apos;m a <strong>Freelancer</strong>,{" "}
                  <strong>Website Developer</strong>,{" "}
                  <strong>Social Media Content Strategist</strong>,{" "}
                  <strong>Game Developer</strong>, and{" "}
                  <strong>Mobile Developer</strong>.
                </p>
                <p>
                  I enjoy working on real-world projects—things that people
                  actually use. From scheduling systems and enrollment
                  templates, to mobile apps, 2D games, and content for social
                  media, I like connecting development with actual problems and
                  goals.
                </p>
                <p>
                  My style is simple: keep the UI clear, make everything work
                  smoothly on mobile, and always look for ways to improve on the
                  next build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          data-section-id="projects"
          className={`section ${
            isSectionVisible("projects") ? "section-visible" : ""
          }`}
        >
          <div className="section-card">
            <div className="section-header">
              <h2>Projects</h2>
              <p>A sample of what I&apos;ve built and worked on.</p>
            </div>

            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <div key={project.title} className="project-card">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {project.imageSrc && (
                    <div className="project-image-wrapper">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        width={600}
                        height={340}
                        className="project-image"
                      />
                    </div>
                  )}

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Live Demo / Reel ↗
                      </a>
                    )}

                    <a href="#contact" className="project-contact-link">
                      Discuss this project →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowAllProjects((prev) => !prev)}
              >
                {showAllProjects ? "Show less projects" : "View more projects"}
              </button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          data-section-id="services"
          className={`section ${
            isSectionVisible("services") ? "section-visible" : ""
          }`}
        >
          <div className="section-card">
            <div className="section-header">
              <h2>Services</h2>
              <p>How I can help you or your team.</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Website Development</h3>
                <p>
                  Custom portfolio sites, landing pages, and simple web apps
                  built with modern stacks and mobile-first design.
                </p>
                <ul>
                  <li>Responsive layout</li>
                  <li>Clean, professional UI</li>
                  <li>Real-world features, not just templates</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Mobile App Development</h3>
                <p>
                  Native and cross-platform mobile apps—from tools and
                  utilities to simple games and interactive experiences.
                </p>
                <ul>
                  <li>Android native (Kotlin)</li>
                  <li>Flutter &amp; Dart</li>
                  <li>Offline-first experiences</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Social Media &amp; SMM</h3>
                <p>
                  Strategy, content ideas, reels, and graphics that match your
                  brand and speak to your audience.
                </p>
                <ul>
                  <li>Short-form videos &amp; reels</li>
                  <li>Content planning &amp; ideas</li>
                  <li>Graphics for posts and promos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER STYLE */}
        <section
          id="contact"
          data-section-id="contact"
          className={`section ${
            isSectionVisible("contact") ? "section-visible" : ""
          }`}
        >
          <div className="section-card footer-card">
            <div className="footer-grid">
              {/* Brand / intro */}
              <div className="footer-brand">
                <h3 className="footer-title">ABDUL NASIRIN</h3>
                <p className="footer-text">
                  Turning ideas into digital experiences — from Bongao to the
                  world. I enjoy building apps, games, and tools that people
                  actually use.
                </p>
                <p className="footer-text">
                  Clean UI, working features, and projects that feel grounded in
                  real life.
                </p>
                <p className="footer-copy">
                  © 2025 Abdul Nasirin. All rights reserved.
                </p>
              </div>

              {/* Quick links */}
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Contact info + map + socials */}
              <div className="footer-contact">
                <h3>Contact Info</h3>

                <div className="footer-contact-item">
                  <span className="footer-icon">📍</span>
                  <div>
                    <p>Philippines, Bongao, Tawi-Tawi, BARMM</p>
                    <p className="footer-muted">Available for remote work</p>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <span className="footer-icon">✉️</span>
                  <div>
                    <a
                      href="mailto:nasirinzafier@gmail.com"
                      className="contact-link"
                    >
                      nasirinzafier@gmail.com
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <span className="footer-icon">📱</span>
                  <div>
                    <a href="tel:+639272315866" className="contact-link">
                      +63 927 231 5866
                    </a>
                  </div>
                </div>

                <div className="footer-social">
                  <p className="footer-muted">Social & Profiles</p>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/unkind-human-being"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub – unkind-human-being
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@lhutsdev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube – @lhutsdev
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/lhutss33"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram – @lhutss33
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/lhutsdev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn – lhutsdev
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tiktok.com/@lhutsdev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TikTok – @lhutsdev
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://onlinejobs.ph/jobseekers/info/3691926"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OnlineJobs.ph Profile
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-map">
                  <iframe
                    title="Bongao Map"
                    src="https://www.google.com/maps?q=Bongao%20Poblacion%20Bongao%20Tawi-Tawi&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING AI Lhuts CHAT */}
      {!isChatOpen && (
        <button
          type="button"
          className="chat-launcher"
          onClick={() => setIsChatOpen(true)}
        >
          🤖 Chat with AI Lhuts
        </button>
      )}

      {isChatOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div>
              <p className="chat-title">AI Lhuts</p>
              <p className="chat-subtitle">Portfolio Assistant</p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setIsChatOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-body">
            {chatMessages.map((m) => (
              <div
                key={m.id}
                className={`chat-message ${
                  m.from === "user" ? "chat-message-user" : "chat-message-bot"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form className="chat-input-row" onSubmit={handleSendChat}>
            <input
              type="text"
              className="chat-input"
              placeholder="Ask about projects, pricing, or services…"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className="chat-send">
              ↗
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        .page {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(
            circle at top,
            #1f2933 0,
            #020617 55%,
            #000000 100%
          );
          color: #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 30;
          backdrop-filter: blur(12px);
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.96),
            rgba(15, 23, 42, 0.9)
          );
          border-bottom: 1px solid rgba(148, 163, 184, 0.35);
        }

        .main {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 18px 56px;
        }

        .section {
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(24px) scale(0.98);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .section-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .section-card {
          border-radius: 22px;
          padding: 24px 18px;
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          border: 1px solid rgba(55, 65, 81, 0.9);
          box-shadow: 0 0 24px rgba(15, 23, 42, 0.9);
        }

        .section-header h2 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .section-header p {
          font-size: 14px;
          color: #9ca3af;
        }

        /* Hero section */
        .hero-section {
          margin-bottom: 36px;
        }

        .hero-card-wrap {
          padding-top: 22px;
          padding-bottom: 22px;
        }

        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .hero-text {
          max-width: 640px;
        }

        .hero-tagline {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .hero-title {
          font-size: clamp(28px, 7vw, 40px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .hero-gradient {
          display: block;
          background: linear-gradient(
            to right,
            #f9fafb,
            #ec4899,
            #22c55e,
            #a855f7
          );
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
        }

        .hero-subtitle {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }

        .btn {
          border-radius: 999px;
          padding: 9px 18px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn-primary {
          border: 1px solid rgba(236, 72, 153, 0.9);
          background: radial-gradient(
            circle at top,
            #ec4899 0%,
            #db2777 45%,
            #4c0519 100%
          );
          color: #f9fafb;
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.9),
            0 0 6px rgba(219, 39, 119, 0.7);
        }

        .btn-secondary {
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.9),
            rgba(31, 41, 55, 0.9)
          );
          color: #e5e7eb;
        }

        .btn-outline {
          border: 1px solid rgba(148, 163, 184, 0.8);
          background: transparent;
          color: #e5e7eb;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 11px;
        }

        .hero-pills span {
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(75, 85, 99, 0.9);
          background: linear-gradient(
            to right,
            rgba(31, 41, 55, 0.9),
            rgba(15, 23, 42, 0.9)
          );
          color: #d1d5db;
        }

        .hero-card {
          max-width: 380px;
        }

        .hero-card-inner {
          border-radius: 20px;
          padding: 14px;
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          border: 1px solid rgba(55, 65, 81, 0.9);
          transform-origin: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .hero-card:hover .hero-card-inner {
          transform: translateY(-4px) scale(1.03);
          border-color: rgba(236, 72, 153, 0.95);
          box-shadow: 0 0 26px rgba(236, 72, 153, 0.85),
            0 0 40px rgba(15, 23, 42, 1);
        }

        .hero-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-size: 11px;
          color: #9ca3af;
        }

        .hero-card-status {
          color: #22c55e;
        }

        .hero-card-body {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .hero-avatar-wrapper {
          width: 110px;
          height: 110px;
          border-radius: 999px;
          overflow: hidden;
          border: 2px solid rgba(236, 72, 153, 0.9);
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.7),
            0 0 24px rgba(15, 23, 42, 1);
          flex-shrink: 0;
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-name {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .hero-role {
          font-size: 12px;
          color: #9ca3af;
          margin-bottom: 10px;
        }

        .hero-meta-row {
          font-size: 11px;
          color: #9ca3af;
          margin-bottom: 2px;
        }

        .hero-meta-row span:first-child {
          color: #6b7280;
          margin-right: 4px;
        }

        /* About */
        .about-card {
          margin-top: 4px;
        }

        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 12px;
        }

        .about-photo-wrapper {
          display: flex;
          justify-content: center;
        }

        .about-photo-border {
          padding: 3px;
          border-radius: 999px;
          background: conic-gradient(
            from 180deg,
            #ec4899,
            #22c55e,
            #a855f7,
            #ec4899
          );
        }

        .about-photo {
          border-radius: 999px;
          border: 3px solid #020617;
          object-fit: cover;
        }

        .about-text p {
          font-size: 14px;
          color: #d1d5db;
          line-height: 1.7;
          margin-bottom: 8px;
        }

        .typing-box {
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .typing-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #9ca3af;
        }

        .typing-name {
          font-size: 20px;
          font-weight: 700;
          color: #f9fafb;
        }

        .typing-cursor {
          color: #ec4899;
          margin-left: 2px;
        }

        /* Projects */
        .projects-grid {
          display: grid;
          gap: 16px;
          margin-top: 16px;
        }

        .project-card {
          border-radius: 16px;
          padding: 12px 14px;
          border: 1px solid rgba(55, 65, 81, 0.9);
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          transform-origin: center;
          transition: transform 0.22s ease, box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .project-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(148, 163, 184, 0.95);
          box-shadow: 0 0 20px rgba(15, 23, 42, 0.95);
        }

        .project-card h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .project-description {
          font-size: 13px;
          color: #d1d5db;
          margin-bottom: 8px;
        }

        .project-image-wrapper {
          margin-bottom: 8px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(75, 85, 99, 0.9);
        }

        .project-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .project-tags span {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 999px;
          border: 1px solid rgba(75, 85, 99, 0.9);
          background: linear-gradient(
            to right,
            rgba(31, 41, 55, 0.95),
            rgba(15, 23, 42, 0.9)
          );
        }

        .project-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .project-link {
          color: #ec4899;
          text-decoration: none;
        }

        .project-contact-link {
          color: #22c55e;
          text-decoration: none;
        }

        .projects-actions {
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }

        /* Services */
        .services-grid {
          display: grid;
          gap: 14px;
          margin-top: 16px;
        }

        .service-card {
          border-radius: 16px;
          padding: 12px 14px;
          border: 1px solid rgba(55, 65, 81, 0.9);
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          transition: transform 0.15s ease, box-shadow 0.15s ease,
            border-color 0.15s ease;
        }

        .service-card h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #ec4899;
        }

        .service-card p {
          font-size: 13px;
          color: #d1d5db;
          margin-bottom: 8px;
        }

        .service-card ul {
          list-style: disc;
          padding-left: 16px;
          margin: 0;
          font-size: 12px;
          color: #9ca3af;
        }

        .service-card li {
          margin-bottom: 2px;
        }

        .service-card:hover {
          transform: translateY(-3px);
          border-color: rgba(236, 72, 153, 0.9);
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.7);
        }

        /* Footer / Contact */
        .footer-card {
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .footer-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-brand {
          max-width: 380px;
        }

        .footer-title {
          font-size: 20px;
          font-weight: 800;
          color: #ec4899;
          margin-bottom: 8px;
        }

        .footer-text {
          font-size: 13px;
          color: #d1d5db;
          margin-bottom: 6px;
        }

        .footer-copy {
          margin-top: 8px;
          font-size: 12px;
          color: #6b7280;
        }

        .footer-links h3,
        .footer-contact h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
        }

        .footer-links li {
          margin-bottom: 4px;
        }

        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #ec4899;
        }

        .footer-contact {
          font-size: 13px;
        }

        .footer-contact-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .footer-icon {
          font-size: 16px;
          margin-top: 2px;
        }

        .footer-muted {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 2px;
        }

        .contact-link {
          color: #22c55e;
          text-decoration: none;
          word-break: break-all;
        }

        .footer-social {
          margin-top: 10px;
        }

        .footer-social ul {
          list-style: none;
          padding: 0;
          margin: 4px 0 0 0;
        }

        .footer-social li {
          margin-bottom: 4px;
        }

        .footer-social a {
          color: #ec4899;
          text-decoration: none;
          word-break: break-all;
        }

        .footer-map {
          margin-top: 10px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(75, 85, 99, 0.9);
        }

        .footer-map iframe {
          width: 100%;
          height: 180px;
          border: 0;
        }

        /* AI Lhuts Floating Chat */
        .chat-launcher {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 40;
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(236, 72, 153, 0.9);
          background: radial-gradient(
            circle at top,
            #ec4899 0%,
            #db2777 45%,
            #4c0519 100%
          );
          color: #f9fafb;
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.9),
            0 0 6px rgba(219, 39, 119, 0.7);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chat-widget {
          position: fixed;
          right: 18px;
          bottom: 18px;
          width: 320px;
          max-height: 420px;
          z-index: 50;
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.95)
          );
          border: 1px solid rgba(55, 65, 81, 0.9);
          box-shadow: 0 0 28px rgba(15, 23, 42, 1);
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: radial-gradient(
            circle at top left,
            rgba(236, 72, 153, 0.3),
            rgba(15, 23, 42, 0.95)
          );
          border-bottom: 1px solid rgba(55, 65, 81, 0.9);
        }

        .chat-title {
          font-size: 14px;
          font-weight: 700;
        }

        .chat-subtitle {
          font-size: 11px;
          color: #9ca3af;
        }

        .chat-close {
          border: none;
          background: transparent;
          color: #e5e7eb;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
        }

        .chat-body {
          padding: 10px;
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chat-message {
          max-width: 85%;
          padding: 7px 10px;
          border-radius: 10px;
          font-size: 12px;
          line-height: 1.4;
        }

        .chat-message-bot {
          align-self: flex-start;
          background: rgba(31, 41, 55, 0.95);
          border: 1px solid rgba(55, 65, 81, 0.9);
        }

        .chat-message-user {
          align-self: flex-end;
          background: rgba(34, 197, 94, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.8);
        }

        .chat-input-row {
          display: flex;
          padding: 8px;
          gap: 6px;
          border-top: 1px solid rgba(31, 41, 55, 0.9);
          background: rgba(15, 23, 42, 0.98);
        }

        .chat-input {
          flex: 1;
          border-radius: 999px;
          border: 1px solid rgba(55, 65, 81, 0.9);
          background: rgba(15, 23, 42, 0.95);
          padding: 6px 10px;
          font-size: 12px;
          color: #e5e7eb;
          outline: none;
        }

        .chat-input::placeholder {
          color: #6b7280;
        }

        .chat-send {
          border-radius: 999px;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(236, 72, 153, 0.9);
          background: radial-gradient(
            circle at top,
            #ec4899 0%,
            #db2777 45%,
            #4c0519 100%
          );
          color: #f9fafb;
          font-size: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .main {
            padding-top: 40px;
          }

          .hero-grid {
            flex-direction: row;
            align-items: center;
          }

          .hero-text {
            flex: 1.2;
          }

          .hero-card {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }

          .about-grid {
            flex-direction: row;
          }

          .about-photo-wrapper {
            flex: 0 0 260px;
            justify-content: flex-start;
          }

          .about-text {
            flex: 1;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .footer-grid {
            flex-direction: row;
            align-items: flex-start;
          }

          .footer-brand {
            flex: 1.1;
          }

          .footer-links {
            flex: 0.8;
          }

          .footer-contact {
            flex: 1.4;
          }

          .footer-map iframe {
            height: 200px;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .footer-map iframe {
            height: 220px;
          }
        }

        @media (max-width: 420px) {
          .chat-widget {
            width: calc(100% - 24px);
            right: 12px;
          }

          .chat-launcher {
            right: 12px;
          }
        }
      `}</style>
    </div>
  );
}
