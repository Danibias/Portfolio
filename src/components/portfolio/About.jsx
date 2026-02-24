import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Clarity first.",
    description:
      "I believe every design decision should have a reason. Clarity isn't about simplicity — it's about intentionality. If it doesn't serve the user, it doesn't belong.",
  },
  {
    number: "02",
    title: "Build to connect.",
    description:
      "Code is a tool. The real product is the experience. I focus on the human side of development — crafting interfaces that feel natural and intuitive from the first touch.",
  },
  {
    number: "03",
    title: "Evolve constantly.",
    description:
      "I started with static HTML. Today I architect design systems. Tomorrow? Whatever the next paradigm demands. Growth isn't optional — it's how I work.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-lime-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="index-number mb-10"
        >
          02 — Philosophy & Story
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Big statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            >
              I don't just write{" "}
              <span className="relative">
                code.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              </span>
              <br />I craft{" "}
              <span className="italic font-normal">experiences.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-foreground/70 text-base lg:text-lg leading-relaxed"
            >
              My journey began building simple websites for local businesses. Each project revealed a new layer — 
              performance optimization, accessibility, motion design, component architecture. 
              I didn't follow a curriculum; I followed problems. And every solved problem opened three more doors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-foreground/70 text-base lg:text-lg leading-relaxed mt-4"
            >
              Today, I bridge the gap between design and engineering — speaking both languages fluently, 
              and using that duality to build products that are as beautiful as they are functional.
            </motion.p>
          </div>

          {/* Right: Value pillars */}
          <div className="flex flex-col gap-0">
            {values.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
                className="group border-t border-foreground/15 py-8 last:border-b hover:bg-foreground/5 px-4 -mx-4 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start gap-6">
                  <span className="text-sm font-bold text-accent-green tabular-nums shrink-0 mt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
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
