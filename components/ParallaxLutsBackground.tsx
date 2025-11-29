"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number; // 0–100 (viewport %)
  y: number; // 0–100 (viewport %)
  delay: number;
  duration: number;
  size: number;
  layer: 1 | 2 | 3; // depth layer for parallax effect
};

function createParticles(count: number): Particle[] {
  const arr: Particle[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 18 + Math.random() * 20, // 18–38s
      size: 10 + Math.random() * 10, // 10–20px
      layer: ((i % 3) + 1) as 1 | 2 | 3,
    });
  }
  return arr;
}

export default function ParallaxLutsBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(createParticles(60));
  }, []);

  return (
    <div className="luts-bg" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`luts-particle layer-${p.layer}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          LUTS
        </span>
      ))}

      <style jsx>{`
        .luts-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0; /* content (main + navbar) stays on top */
        }

        .luts-particle {
          position: absolute;
          color: rgba(236, 72, 153, 0.12); /* soft pink */
          letter-spacing: 0.25em;
          font-weight: 600;
          white-space: nowrap;
          text-shadow: 0 0 8px rgba(236, 72, 153, 0.55);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-name: float-down;
        }

        /* depth layers = fake parallax */
        .layer-1 {
          opacity: 0.25;
        }

        .layer-2 {
          opacity: 0.4;
          animation-name: float-diagonal;
        }

        .layer-3 {
          opacity: 0.6;
          animation-name: float-up;
        }

        @keyframes float-down {
          from {
            transform: translate3d(0, -40px, 0);
          }
          to {
            transform: translate3d(0, 60px, 0);
          }
        }

        @keyframes float-diagonal {
          from {
            transform: translate3d(-40px, 40px, 0);
          }
          to {
            transform: translate3d(60px, -60px, 0);
          }
        }

        @keyframes float-up {
          from {
            transform: translate3d(0, 40px, 0);
          }
          to {
            transform: translate3d(0, -60px, 0);
          }
        }

        /* Respect users who don’t want motion */
        @media (prefers-reduced-motion: reduce) {
          .luts-particle {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
