import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import akashPhoto from "@/assets/akash.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Open to SDE 2026 opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              Building scalable
              <br />
              software with
              <br />
              <span className="text-gradient">precision & intent.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              CS undergraduate at IIIT Kalyani. Full-stack engineer with deep
              roots in DSA, OOP and SQL. GATE 2025 & 2026 qualified.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/akash-chauhan-resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 font-medium text-primary-foreground glow-shadow hover:opacity-90 transition-all"
              >
                <ArrowDownToLine className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-foreground hover:bg-white/5 transition-colors"
              >
                View Projects
              </a>

              <div className="flex items-center gap-2 ml-2">
                <SocialIcon href="https://github.com/" Icon={Github} />
                <SocialIcon href="https://linkedin.com/" Icon={Linkedin} />
                <SocialIcon href="mailto:akss240215@gmail.com" Icon={Mail} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-border pt-8"
            >
              <Stat value="7.32" label="CGPA" />
              <Stat value="3+" label="Projects" />
              <Stat value="2x" label="GATE Qualified" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-6 bg-gradient-accent opacity-30 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] w-72 sm:w-80 rounded-3xl overflow-hidden glass p-2">
              <img
                src={akashPhoto}
                alt="Portrait of Akash Chauhan, software engineer"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-sm">
              <div className="text-muted-foreground text-xs">Currently</div>
              <div className="text-foreground font-medium">B.Tech @ IIIT Kalyani</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function SocialIcon({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
