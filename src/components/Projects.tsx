import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    name: "Solar Vision",
    tagline: "YOLO-based rooftop detection from satellite imagery",
    description:
      "Estimates solar energy potential with area and annual generation insights at 78.6% accuracy. Flask backend with Redis queue for distributed workload management; React frontend for upload, visualization and interactive analysis.",
    stack: ["Python", "React", "Redis", "YOLOv12", "Flask"],
    metric: "78.6%",
    metricLabel: "detection accuracy",
  },
  {
    name: "Bank Management System",
    tagline: "Desktop banking with secure auth & DAO architecture",
    description:
      "Three-tier architecture (GUI, business logic, database) with JDBC and DAO pattern. Optimized SQL queries, MySQL schema across accounts, users and transactions, plus an admin dashboard for user management and stats.",
    stack: ["Java", "MySQL", "JDBC", "OOP", "DAO"],
    metric: "5+",
    metricLabel: "core operations",
  },
  {
    name: "Disease Predictor",
    tagline: "Rule-based symptom-to-disease web application",
    description:
      "Predicts probable diseases from user-input symptoms using a rules-based knowledge base. Flask backend with symptom–disease mapping logic; interactive JS frontend; MySQL stores symptoms, diseases and user history with secure auth.",
    stack: ["Python", "Flask", "JavaScript", "MySQL"],
    metric: "Web",
    metricLabel: "full-stack app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Projects I've <span className="text-gradient">shipped.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A handful of builds that span backend systems, machine learning and
            full-stack web applications.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass rounded-3xl p-8 sm:p-10 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.16 195 / 0.08), transparent 40%)",
                }}
              />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-primary">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-border max-w-12" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3 flex-wrap">
                    {p.name}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                  </h3>
                  <p className="text-primary text-sm mb-4">{p.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-3 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:text-right lg:min-w-40">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                    {p.metric}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {p.metricLabel}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
