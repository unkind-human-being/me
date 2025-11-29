"use client";

import Link from "next/link";

export default function OfflinePage() {
  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="offline-page">
      <div className="glow-orb orb-top" />
      <div className="glow-orb orb-bottom" />

      <main className="offline-card">
        <div className="icon-wrap">
          <span className="icon">📴</span>
        </div>

        <h1 className="title">You&apos;re Offline</h1>
        <p className="subtitle">
          Don&apos;t worry — this fallback page still works even without
          internet. Once your connection is back, you can reload the app.
        </p>

        <div className="status-pill">
          <span className="dot" />
          <span>Offline mode enabled</span>
        </div>

        <div className="buttons">
          <button type="button" className="btn btn-primary" onClick={handleRetry}>
            Retry Connection
          </button>
          <Link href="/" className="btn btn-secondary">
            Go to Home
          </Link>
        </div>

        <p className="hint">
          Built as a <span className="highlight">PWA</span> so you can still
          access key screens, even when your network drops.
        </p>
      </main>

      <style jsx>{`
        .offline-page {
          min-height: 100vh;
          padding: 24px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(
            circle at top,
            #1f2933 0,
            #020617 55%,
            #000000 100%
          );
          color: #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          position: relative;
          overflow: hidden;
        }

        .glow-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(40px);
          opacity: 0.7;
          pointer-events: none;
        }

        .orb-top {
          width: 260px;
          height: 260px;
          top: -60px;
          right: -80px;
          background: radial-gradient(circle, #ec4899, transparent 60%);
        }

        .orb-bottom {
          width: 260px;
          height: 260px;
          bottom: -80px;
          left: -60px;
          background: radial-gradient(circle, #22c55e, transparent 60%);
        }

        .offline-card {
          position: relative;
          max-width: 420px;
          width: 100%;
          padding: 24px 20px 26px;
          border-radius: 22px;
          background: linear-gradient(
            to bottom right,
            rgba(15, 23, 42, 0.98),
            rgba(15, 23, 42, 0.9)
          );
          border: 1px solid rgba(75, 85, 99, 0.9);
          box-shadow: 0 0 28px rgba(15, 23, 42, 0.95);
          text-align: center;
          z-index: 2;
        }

        .icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 999px;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #0f172a, #020617);
          border: 1px solid rgba(148, 163, 184, 0.6);
          box-shadow: 0 0 18px rgba(15, 23, 42, 1);
        }

        .icon {
          font-size: 34px;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
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
            rgba(15, 23, 42, 0.8)
          );
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #d1d5db;
          margin-bottom: 18px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #f97316;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.9);
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 14px;
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

        .highlight {
          color: #22c55e;
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .offline-page {
            padding: 32px;
          }

          .offline-card {
            padding: 26px 24px 28px;
          }
        }
      `}</style>
    </div>
  );
}
