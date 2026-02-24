import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    index: "01",
    title: "NESCOL",
    category: "Foundations",
    problem: "Understand hierarchy and design practices in implementing digital interfaces that address a need",
    solution: "Workflow management based on Scrum and Agile development.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    result: "Feasible and organised proposals from the user's perspective, aligned with UI/UX principles.",
    caseLinks: [
      { label: "Adidas", url: "https://loopdownthestreets.netlify.app/"},
      { label: "Report", url: "https://mobile-industry-report.netlify.app/"},
      { label: "NSA", url: "https://nescolnsa.netlify.app/"},
    ],
    color: "from-primary/10 to-transparent",
    year: "2022 - 2024",
  },
  {
    index: "02",
    title: "Freelance",
    category: "Design Systems to Frontend",
    problem: "Translate visual and functional requirements into well-structured and coherent interfaces between the design proposal and the final frontend result.",
    solution: "Using Figma as a tool to create interface prototypes and organise reusable components before developing in HTML, CSS and JavaScript to obtain functional, responsive and visually robust results.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    result: "Deliver projects with alignment between design and development, and with fewer corrections in the final stage.",
    caseLinks: [
      { label: "WinKit", url: "https://wearewinkit.netlify.app/"},
      { label: "Ruben Dario", url: "https://chefrubencedeno.netlify.app/"},
      { label: "Leo Sarmiento", url: "https://leosarmiento.netlify.app/"},
      { label: "Crust Aberdeen", url: "https://crustaberdeen.co.uk/"},
    ],
    color: "from-lime/30 to-transparent",
    year: "2023 - 2025",
  },
  {
    index: "03",
    title: "3D experimental",
    category: "Three.js + Blender",
    problem: "Combine creative exploration with technical execution, without affecting performance or clarity in the user experience",
    solution: "Create 3D models with Blender and Three.js to integrate them into interactive experiences within the browser. ",
    tech: ["React", "R3F", "Three.js", "Vite", "Node.js", "Blender"],
    result: "Stronger experimental approach to the development of 3D techniques, immersive and functional web experiences.",
    caseLinks: [
      { label: "Animated Galaxy", url: "https://galaxy-3d-experiment.netlify.app/"},
      { label: "Physics", url: "https://r3f-physics.netlify.app/"},
      { label: "Hologram", url: "https://3d-hologram-effect.netlify.app/"},
      { label: "Text", url: "https://3d-text-with-r3f.netlify.app/"},
      { label: "Game", url: "https://3d-game-with-r3f.netlify.app/"},
    ],
    color: "from-foreground/5 to-transparent",
    year: "2024 - 2026",
  },
  {
    index: "04",
    title: "Full Stack JavaScript",
    category: "In Progress",
    problem: "Build solid foundations in full-stack JavaScript, connecting frontend and backend knowledge in the same process.",
    solution: "Projects that reinforce each topic from a practical approach, which allow me to strengthen fundamentals, improve my programming logic and develop a more organised methodology.",
    tech: ["Advanced HTML/CSS", "JavaScript", "Linux"],
    result: "The skill to develop solutions in a more autonomous, structured and oriented way towards real projects.",
    caseLinks: [
      { label: "Etch a Sketch", url: "https://danibias.github.io/Etch-a-Sketch/"},
      { label: "Calculator", url: "https://danibias.github.io/Calculator/"},
      { label: "Form", url: "https://danibias.github.io/form/"},
      { label: "Dashboard", url: "https://danibias.github.io/dashboard-project/"}
    ],
    color: "from-primary/5 to-transparent",
    year: "2026",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" ref={ref} className="bg-dark-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="index-number text-primary mb-10"
        >
          04 — Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-7xl font-bold text-white leading-none mb-16"
        >
          Learning 
          <br />
          <span className="text-accent-green">by Building.</span>
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className="group border-t border-white/10 last:border-b"
              onClick={() => setActiveProject(activeProject === i ? null : i)}
            >
              <div className="py-8 lg:py-10 flex items-start justify-between gap-6 cursor-pointer">
                <div className="flex items-start gap-6 lg:gap-10 flex-1">
                  <span className="text-xs font-bold text-primary tabular-nums mt-1.5 shrink-0">
                    {project.index}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-2xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="tag-chip border-white/20 text-white/40 text-[10px]">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/30 ml-auto">{project.year}</span>
                    </div>

                    <AnimatePresence>
                      {activeProject === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pb-2">
                            <div>
                              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Problem</p>
                              <p className="text-sm text-white/60 leading-relaxed">{project.problem}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Solution</p>
                              <p className="text-sm text-white/60 leading-relaxed">{project.solution}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Result</p>
                              <p className="text-sm text-white/80 font-medium leading-relaxed">{project.result}</p>
                              
                              {/* case links */}
                              {project.caseLinks?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {project.caseLinks.map((link, idx) => (
                                    <a
                                      key={`${project.index}-${idx}`}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="tag-chip cursor-pointer"
                                    >
                                      {link.label}
                                    </a>
                                  ))}
                                </div>
                              )}

                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 pb-4">
                            {project.tech.map((t) => (
                              <span key={t} className="tag-green text-[10px] px-2 py-1">
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="shrink-0 mt-2">
                  <motion.div
                    animate={{ rotate: activeProject === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 border border-white/20 group-hover:border-primary flex items-center justify-center transition-colors duration-300"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white/40 group-hover:text-primary transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
