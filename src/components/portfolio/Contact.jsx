import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="bg-dark-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="index-number text-primary mb-10"
        >
          06 — Contact
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-8xl font-bold text-white leading-none mb-8"
            >
              Let's
              <br />
              <span className="text-accent-green">build</span>
              <br />
              together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-md"
            >
              Open to freelance projects, long-term partnerships, and strategic collaborations. 
              If you're building something that matters, let's talk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:danielebiasetti1@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(116_99%_46%/0.5)]"
              >
                Send Me an Email
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Links + info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 mb-12">
              {[
                { label: "Email", value: "danielebiasetti1@gmail.com", href: "mailto:danielebiasetti1@gmail.com" },
                { label: "LinkedIn", value: "/in/daniele-biasetti", href: "https://www.linkedin.com/in/daniele-biasetti/" },
                { label: "GitHub", value: "github.com/danibias", href: "https://github.com/Danibias" },
                { label: "Based in", value: "Aberdeen, UK · Available remotely", href: null },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-white/10 pb-6 last:border-0">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm font-medium underline-reveal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-5 border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <p className="text-sm text-white/60">
                <span className="text-primary font-semibold">Typical response: &lt; 24h.</span>{" "}
                I read every message personally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <span className="text-white/30 text-xs font-medium">
            © 2026 Daniele Biasetti. All rights reserved.
          </span>
          <span className="text-white/20 text-xs">
            Designed & built with intention.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
