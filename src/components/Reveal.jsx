import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

const lineParent = {
  hidden: {},
  show: (delay = 0) => ({ transition: { staggerChildren: 0.09, delayChildren: delay } }),
};

const lineChild = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

// Masked, line-by-line text reveal. Each entry in `lines` is one visual line.
export function RevealLines({ lines, as = "span", className, delay = 0, animateOnMount = false, id }) {
  const Tag = motion[as];
  const trigger = animateOnMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, amount: 0.5 } };

  return (
    <Tag id={id} className={className} variants={lineParent} initial="hidden" custom={delay} {...trigger}>
      {lines.map((line, i) => (
        <span className="reveal-line" key={i}>
          <motion.span variants={lineChild}>{line}</motion.span>
        </span>
      ))}
    </Tag>
  );
}

// Simple fade-and-rise for blocks entering the viewport.
export function FadeUp({ as = "div", delay = 0, y = 28, amount = 0.2, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
