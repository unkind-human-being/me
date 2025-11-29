"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Top row: brand + mobile button */}
        <div className="navbar-top">
          {/* Logo / Brand */}
          <a href="#home" className="brand">
            <div className="brand-logo">
              <Image
                src="/icons/icon/512x512.png"
                alt="Abdul Nasirin logo"
                width={32}
                height={32}
                className="brand-logo-img"
              />
            </div>
            <div className="brand-text">
              <div className="brand-name">Abdul Nasirin</div>
              <div className="brand-sub">Developer · Web · Mobile · Games</div>
            </div>
          </a>

          {/* Mobile menu button (hidden on desktop) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="menu-btn"
          >
            <span className="menu-icon">{isOpen ? "✕" : "☰"}</span>
            <span className="menu-label">Menu</span>
          </button>
        </div>

        {/* Nav links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
              <span className="nav-arrow">▶</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 10px 16px;
          max-width: 1200px;
          margin: 0 auto;
          color: #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .navbar-inner {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .navbar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .brand-logo {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          overflow: hidden;
          box-shadow: 0 0 14px rgba(236, 72, 153, 0.9),
            0 0 4px rgba(219, 39, 119, 0.8);
          flex-shrink: 0;
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .brand-text {
          line-height: 1.2;
        }

        .brand-name {
          font-size: 14px;
          font-weight: 600;
        }

        .brand-sub {
          font-size: 11px;
          color: #9ca3af;
        }

        .menu-btn {
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.95),
            rgba(15, 23, 42, 0.9)
          );
          border-radius: 999px;
          padding: 6px 10px;
          color: #e5e7eb;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          cursor: pointer;
        }

        .menu-icon {
          font-size: 16px;
          line-height: 1;
        }

        .nav-links {
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease, margin-top 0.25s ease;
        }

        .nav-links.open {
          margin-top: 8px;
          max-height: 300px;
        }

        .nav-link {
          text-decoration: none;
          color: #d1d5db;
          font-size: 14px;
          padding: 8px 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.9),
            rgba(17, 24, 39, 0.9)
          );
          border: 1px solid rgba(31, 41, 55, 1);
          margin-top: 4px;
        }

        .nav-arrow {
          font-size: 11px;
          color: #ec4899;
        }

        /* Desktop layout */
        @media (min-width: 768px) {
          .navbar-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }

          .menu-btn {
            display: none;
          }

          .nav-links {
            margin-top: 0;
            max-height: none;
            display: flex;
            flex-direction: row;
            gap: 10px;
            overflow: visible;
          }

          .nav-link {
            margin-top: 0;
            padding: 8px 12px;
            border-radius: 999px;
            background: linear-gradient(
              to right,
              rgba(15, 23, 42, 0.9),
              rgba(15, 23, 42, 0.7)
            );
            border: 1px solid rgba(55, 65, 81, 0.9);
          }

          .nav-link:hover {
            border-color: rgba(236, 72, 153, 0.9);
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
          }
        }
      `}</style>
    </nav>
  );
}
