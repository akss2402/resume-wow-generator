import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Tailwind CSS", "Flask", "JDBC", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Redis"],
  },
  {
    title: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Software Engineering",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-12">
          Technologies I work with
          <br />
          <span className="text-gradient">day to day.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1.5 rounded-lg bg-surface-elevated text-foreground/90 border border-border"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
