import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const coreSkills = [
  { name: "HTML"},
  { name: "CSS / Boostrap / Tailwind"},
  { name: "JavaScript"},
  { name: "UI / UX Design Patterns"},
  { name: "React"},

];

const stack = [
  "Figma", "Git / GitHub", "Vite", "Testing (Vitest)","SEO Practices", "Storybook", "Vercel / Netlify", "Three.js", "Blender",
];

const SkillBar = ({ name, level, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{name}</span>
      </div>
      <div className="h-px bg-foreground/15 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-y-0 left-0 bg-primary"
          style={{ height: "1px" }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="bg-background py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="index-number mb-10"
        >
          03 — Skills & Stack
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Core skills */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-foreground mb-12 leading-tight"
            >
              Core
              <br />
              <span className="text-accent-green">Expertise.</span>
            </motion.h2>
            <div className="flex flex-col gap-6">
              {coreSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          {/* Supporting stack */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl lg:text-5xl font-bold text-foreground mb-12 leading-tight"
            >
              Supporting
              <br />
              <span className="text-muted-foreground font-normal italic">Tools.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {stack.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.04 + 0.3 }}
                  className="tag-chip cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 p-6 border border-primary/30 bg-primary/5"
            >
              <p className="text-sm text-foreground/70 leading-relaxed">
                <span className="text-accent-green font-semibold">I choose tools that serve the product</span>,
                not the other way around. The right stack for the right problem — always.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
