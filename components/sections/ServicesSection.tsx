// components/sections/ServicesSection.tsx

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with modern frameworks and best practices.",
  },
  {
    title: "Responsive Design",
    description:
      "Layouts that look great on desktop, tablet, and mobile devices.",
  },
  {
    title: "Performance & Optimization",
    description:
      "Fast-loading pages, optimized assets, and smooth user experiences.",
  },
  {
    title: "API Integration",
    description:
      "Connect your app to third-party services, databases, or backends.",
  },
];

export default function ServicesSection() {
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
          Services
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
          }}
        >
          What I can help you build or improve.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              borderRadius: "16px",
              padding: "12px 14px",
              border: "1px solid rgba(55,65,81,0.9)",
              background:
                "linear-gradient(to right, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "4px",
                color: "#22c55e",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#d1d5db",
                lineHeight: 1.6,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
