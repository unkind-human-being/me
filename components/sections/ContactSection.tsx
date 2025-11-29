// components/sections/ContactSection.tsx

export default function ContactSection() {
  return (
    <div
      style={{
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          Contact
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
          }}
        >
          Let&apos;s work together or talk about a project.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >
        {/* Info card */}
        <div
          style={{
            padding: "14px 16px",
            borderRadius: "16px",
            border: "1px solid rgba(55,65,81,0.9)",
            background:
              "linear-gradient(to bottom right, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#d1d5db",
              marginBottom: "10px",
              lineHeight: 1.6,
            }}
          >
            If you&apos;re interested in working with me, collaborating, or just
            want to say hi, feel free to reach out. I&apos;m always open to new
            ideas and projects.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              color: "#e5e7eb",
            }}
          >
            <li style={{ marginBottom: "6px" }}>
              <span
                style={{ color: "#9ca3af", fontSize: "13px", marginRight: 4 }}
              >
                Email:
              </span>
              <a
                href="mailto:youremail@example.com"
                style={{
                  color: "#22c55e",
                  textDecoration: "none",
                }}
              >
                youremail@example.com
              </a>
            </li>
            <li>
              <span
                style={{ color: "#9ca3af", fontSize: "13px", marginRight: 4 }}
              >
                Location:
              </span>
              <span>Philippines</span>
            </li>
          </ul>
        </div>

        {/* Simple form (no JS handler yet) */}
        <form
          style={{
            padding: "14px 16px",
            borderRadius: "16px",
            border: "1px solid rgba(55,65,81,0.9)",
            background:
              "radial-gradient(circle at top, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
            display: "grid",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "10px",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#d1d5db",
                  marginBottom: "4px",
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid rgba(55,65,81,1)",
                  backgroundColor: "rgba(15,23,42,0.95)",
                  padding: "8px 10px",
                  fontSize: "14px",
                  color: "#e5e7eb",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#d1d5db",
                  marginBottom: "4px",
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid rgba(55,65,81,1)",
                  backgroundColor: "rgba(15,23,42,0.95)",
                  padding: "8px 10px",
                  fontSize: "14px",
                  color: "#e5e7eb",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#d1d5db",
                marginBottom: "4px",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "1px solid rgba(55,65,81,1)",
                backgroundColor: "rgba(15,23,42,0.95)",
                padding: "8px 10px",
                fontSize: "14px",
                color: "#e5e7eb",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "4px",
              borderRadius: "999px",
              padding: "8px 16px",
              border: "1px solid rgba(34,197,94,0.8)",
              background:
                "radial-gradient(circle at top, #22c55e 0%, #16a34a 45%, #052e16 100%)",
              color: "#f9fafb",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow:
                "0 0 14px rgba(34,197,94,0.9), 0 0 6px rgba(22,163,74,0.8)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
