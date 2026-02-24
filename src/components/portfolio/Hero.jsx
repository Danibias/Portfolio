import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-dark-surface">
      {/* Background image */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-24 left-6 lg:left-12 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary">
          Available for projects
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-rl]">
          Scroll Down
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-primary" />
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20 lg:pb-28"
      >
        {/* Label */}
        <motion.p variants={fadeUp} className="index-number mb-6">
          Front-End Developer — UI/UX Thinker
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-white font-bold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          Daniele
          <br />
          <span className="text-accent-green">Biasetti.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-white/60 text-lg lg:text-xl font-normal max-w-xl mb-10 leading-relaxed"
        >
          Building digital products that solve problems
          <br className="hidden lg:block" /> and{" "}
          <em className="text-white not-italic font-medium">connect with people instantly.</em>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(116_99%_46%/0.5)]"
          >
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm"
      >
        {/* <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-3 divide-x divide-white/10">
          {[
            { value: "4+", label: "Years experience" },
            { value: "30+", label: "Projects delivered" },
            { value: "12+", label: "Satisfied clients" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 first:pl-0 last:pr-0 flex flex-col gap-0.5">
              <span className="text-2xl font-bold text-accent-green">{stat.value}</span>
              <span className="text-xs text-white/40 font-medium tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
}
