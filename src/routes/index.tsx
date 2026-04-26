import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akash Chauhan — Software Engineer & CS Undergraduate" },
      {
        name: "description",
        content:
          "Portfolio of Akash Chauhan — IIIT Kalyani CS undergraduate, full-stack engineer skilled in Java, Python, React and MySQL. GATE 2025 & 2026 qualified.",
      },
      { property: "og:title", content: "Akash Chauhan — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer building resilient systems. CS undergrad at IIIT Kalyani, GATE 2025 & 2026 qualified.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
