import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const goals = [
  {
    title: "Lead with design systems",
    description:
      "Build the infrastructure that lets entire teams move faster. A great design system is invisible — and that's the point.",
  },
  {
    title: "Bridge East & West design thinking",
    description:
      "Combine the precision of Swiss grid typography with the experiential boldness of modern product studios. No borders, just good work.",
  },
  {
    title: "Open source contributions",
    description:
      "Give back to the ecosystem that built me. Working toward releasing accessible, production-grade component libraries.",
  },
  {
    title: "Creative technology studio",
    description:
      "The long game: a small, elite studio at the intersection of engineering and artistic vision. Quality over volume. Always.",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" ref={ref} className="bg-lime-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="index-number mb-10"
        >
          05 — Vision & Goals
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-8"
            >
              Where I'm
              <br />
              going{" "}
              <span className="relative inline-block">
                next.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 8"
                  fill="none"
                >
                  <motion.path
                    d="M2 6 Q50 2 98 6"
                    stroke="hsl(116, 99%, 46%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.svg>
              </span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-2 border-primary pl-6 text-foreground/70 text-lg italic leading-relaxed"
            >
              "The future of front-end development isn't just faster frameworks or fancier animations — 
              it's the seamless translation of human intention into digital experience."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-foreground/60 leading-relaxed"
            >
              I'm actively seeking long-term partnerships with ambitious startups and agencies 
              who treat front-end as a strategic advantage — not an afterthought.
            </motion.p>
          </div>

          {/* Right: Goals */}
          <div className="flex flex-col gap-0">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="group border-t border-foreground/15 py-7 last:border-b hover:bg-foreground/5 px-4 -mx-4 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
