import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy } from "lucide-react";

const highlights = [
  {
    Icon: GraduationCap,
    title: "Education",
    body: "B.Tech in Computer Science & Engineering at IIIT Kalyani (2022–2026), CGPA 7.32.",
  },
  {
    Icon: Code2,
    title: "Engineering",
    body: "Full-stack development with Java, Python, React and MySQL. Strong DSA and OOP foundations.",
  },
  {
    Icon: Trophy,
    title: "Recognition",
    body: "GATE 2025 & 2026 qualified. Top 3 at Codacharya Coding Fest among 400+ participants.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionLabel>About</SectionLabel>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mt-8">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            A focused engineer
            <br />
            shaping <span className="text-gradient">resilient systems.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm Akash — a final-year computer science student passionate about
              writing software that's clean, performant and built to last. My
              work spans desktop banking systems, ML-driven prediction tools,
              and computer-vision pipelines.
            </p>
            <p>
              I care about fundamentals — algorithms, database design, and the
              quiet craft of architecture — and bring that rigor to every project
              I ship.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground mb-4">
                <h.Icon className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold text-lg mb-2">{h.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-sm font-mono text-primary uppercase tracking-widest">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}
