"use client";

import Link from "next/link";
import Image from "next/image";
import ParallaxLutsBackground from "@/components/ParallaxLutsBackground";

export default function OfflinePage() {
  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="offline-page">
      {/* Reuse LUTS parallax background */}
      <ParallaxLutsBackground />

      <main className="offline-main">
        <section className="offline-card">
          {/* Top label */}
          <p className="offline-tagline">PWA · OFFLINE EXPERIENCE</p>

          {/* Main title + subtitle */}
          <h1 className="offline-title">
            You&apos;re currently{" "}
            <span className="offline-gradient">offline</span>
          </h1>
          <p className="offline-subtitle">
            No worries — Abdul&apos;s portfolio is built as a{" "}
            <span className="highlight">Progressive Web App</span>.  
            You can still open this screen even without internet.
          </p>

          {/* Profile snapshot style like hero card */}
          <div className="offline-profile">
            <div className="offline-avatar-wrap">
              <div className="offline-avatar-ring">
                <Image
                  src="/me/profile.png"
                  alt="Profile of Abdul M. Nasirin"
                  width={96}
                  height={96}
                  className="offline-avatar"
                />
              </div>
            </div>

            <div className="offline-profile-text">
              <p className="offline-label">Profile Snapshot</p>
              <h2 className="offline-name">Abdul M. Nasirin</h2>
              <p className="offline-role">
                Freelancer · Web &amp; Mobile Dev · Game &amp; SMM
              </p>

              <div className="offline-meta">
                <span>Location:</span>
                <span>Bongao, Tawi-Tawi, Philippines</span>
              </div>
              <div className="offline-meta">
                <span>Status:</span>
                <span>App ready · Waiting for connection</span>
              </div>
            </div>
          </div>

          {/* Status pills */}
          <div className="offline-status-row">
            <div className="status-pill">
              <span className="dot dot-orange" />
              <span>Offline mode active</span>
            </div>
            <div className="status-pill secondary">
              <span className="dot dot-green" />
              <span>PWA installed &amp; cached</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRetry}
            >
              Retry Connection
            </button>
            <Link href="/" className="btn btn-secondary">
              Go to Home
            </Link>
          </div>

          {/* Small hint */}
          <p className="hint">
            Tip: If you installed this as an app on your phone, you can reopen
            it anytime from your home screen — no browser UI, no URL bar.
          </p>
        </section>
      </main>

      <style jsx>{`
        .offline-page {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
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

        .offline-main {
          position: relative;
          z-index: 10;
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 18px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .offline-card {
          width: 100%;
          max-width: 720px;
          border-radius: 24px;
          padding: 24px 20px 26px;
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          border: 1px solid rgba(55, 65, 81, 0.9);
          box-shadow: 0 0 28px rgba(15, 23, 42, 0.95);
        }

        .offline-tagline {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 10px;
        }

        .offline-title {
          font-size: clamp(24px, 5.5vw, 32px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .offline-gradient {
          background: linear-gradient(
            to right,
            #f97316,
            #ec4899,
            #22c55e,
            #a855f7
          );
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
        }

        .offline-subtitle {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 18px;
          max-width: 540px;
        }

        .highlight {
          color: #22c55e;
          font-weight: 600;
        }

        .offline-profile {
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: center;
          border-radius: 20px;
          padding: 14px 14px;
          background: radial-gradient(
              circle at top left,
              rgba(236, 72, 153, 0.12),
              transparent 55%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(56, 189, 248, 0.12),
              transparent 55%
            ),
            rgba(15, 23, 42, 0.96);
          border: 1px solid rgba(75, 85, 99, 0.9);
          margin-bottom: 18px;
        }

        .offline-avatar-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .offline-avatar-ring {
          padding: 3px;
          border-radius: 999px;
          background: conic-gradient(
            from 180deg,
            #ec4899,
            #22c55e,
            #a855f7,
            #ec4899
          );
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.75);
        }

        .offline-avatar {
          border-radius: 999px;
          border: 3px solid #020617;
          object-fit: cover;
        }

        .offline-profile-text {
          flex: 1;
          min-width: 0;
        }

        .offline-label {
          font-size: 11px;
          color: #9ca3af;
          margin-bottom: 2px;
        }

        .offline-name {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .offline-role {
          font-size: 12px;
          color: #9ca3af;
          margin-bottom: 6px;
        }

        .offline-meta {
          font-size: 11px;
          color: #9ca3af;
          display: flex;
          gap: 4px;
          line-height: 1.4;
        }

        .offline-meta span:first-child {
          color: #6b7280;
        }

        .offline-status-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(55, 65, 81, 0.9);
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.95),
            rgba(15, 23, 42, 0.85)
          );
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #d1d5db;
        }

        .status-pill.secondary {
          opacity: 0.95;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.9);
        }

        .dot-orange {
          background: #f97316;
        }

        .dot-green {
          background: #22c55e;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-start;
          margin-bottom: 12px;
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
          border: 1px solid transparent;
        }

        .btn-primary {
          border-color: rgba(236, 72, 153, 0.9);
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
          border-color: rgba(148, 163, 184, 0.8);
          background: linear-gradient(
            to right,
            rgba(15, 23, 42, 0.95),
            rgba(15, 23, 42, 0.8)
          );
          color: #e5e7eb;
        }

        .hint {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 4px;
        }

        @media (max-width: 480px) {
          .offline-profile {
            flex-direction: column;
            align-items: flex-start;
          }

          .offline-profile-text {
            width: 100%;
          }

          .buttons {
            justify-content: center;
          }

          .offline-subtitle {
            max-width: 100%;
          }
        }

        @media (min-width: 768px) {
          .offline-main {
            padding: 40px 24px 48px;
          }

          .offline-card {
            padding: 26px 24px 30px;
          }
        }
      `}</style>
    </div>
  );
}
