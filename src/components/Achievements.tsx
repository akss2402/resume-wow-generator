import { motion } from "framer-motion";
import { Award, Users, Medal } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  {
    Icon: Award,
    date: "March 2025",
    title: "Qualified GATE 2025 & GATE 2026",
    body: "Qualified GATE in Computer Science & Engineering both years — strong command over Data Structures, Algorithms, Operating Systems and DBMS.",
  },
  {
    Icon: Users,
    date: "August 2024",
    title: "Status Code 1 — Hackathon Organizer",
    body: "Co-led a 36-hour national hackathon at IIIT Kalyani with 2000+ participants. Coordinated mentors and logistics, ensuring 20+ prototype submissions.",
  },
  {
    Icon: Medal,
    date: "October 2024",
    title: "3rd Place — Codacharya Coding Fest",
    body: "Secured third position among 400+ participants in a competitive algorithmic programming contest.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionLabel>Milestones</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-12">
          Recognition & <span className="text-gradient">wins.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative grid sm:grid-cols-[auto_1fr] gap-5 items-start"
              >
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground glow-shadow">
                  <it.Icon className="h-5 w-5" />
                </div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <div className="font-mono text-xs text-primary mb-2">
                    {it.date}
                  </div>
                  <div className="font-display font-semibold text-xl mb-2">
                    {it.title}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
