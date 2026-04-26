import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="relative glass rounded-3xl p-10 sm:p-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-5">
                Let's build
                <br />
                <span className="text-gradient">something great.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                I'm open to SDE roles, internships and collaborative projects.
                Reach out — I usually reply within a day.
              </p>
            </div>

            <div className="space-y-3">
              <ContactRow
                Icon={Mail}
                label="Email"
                value="akss240215@gmail.com"
                href="mailto:akss240215@gmail.com"
              />
              <ContactRow
                Icon={Phone}
                label="Phone"
                value="+91 95699 73891"
                href="tel:+919569973891"
              />
              <ContactRow
                Icon={Github}
                label="GitHub"
                value="View profile"
                href="https://github.com/akss2402"
              />
              <ContactRow
                Icon={Linkedin}
                label="LinkedIn"
                value="Connect with me"
                href="https://www.linkedin.com/in/akashchauhan2402/"
              />
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Akash Chauhan. Crafted with intent.</div>
          <div className="font-mono">IIIT Kalyani · India</div>
        </footer>
      </div>
    </section>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl bg-surface-elevated/60 border border-border px-5 py-4 hover:border-primary/40 hover:bg-surface-elevated transition-all"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
    </a>
  );
}
