import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Premium scroll-reveal wrapper — fades in with gentle upward motion.
 *
 * Props:
 *   - delay      : seconds before animation starts (default 0)
 *   - duration   : animation duration in seconds (default 0.7)
 *   - y          : vertical travel in px (default 32)
 *   - scale      : start scale (default 0.98 → 1)
 *   - once       : animate only once? (default true)
 *   - threshold  : % of element visible to trigger (default 0.15)
 *   - className  : passthrough className
 *   - as         : HTML element tag (default 'div')
 *   - children
 */
const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 32,
  scale = 0.98,
  once = true,
  threshold = 0.15,
  className = '',
  as = 'div',
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, scale }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad – smooth & premium
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

/**
 * Stagger container — wraps children to stagger their reveals.
 * Each direct child must be a ScrollReveal (or accept motion props).
 *
 * Props:
 *   - stagger    : delay increment per child (default 0.1s)
 *   - baseDelay  : delay before first child (default 0)
 *   - className  : passthrough
 */
const StaggerGroup = ({
  children,
  stagger = 0.1,
  baseDelay = 0,
  className = '',
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className={className} {...rest}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (!child) return null;
            // Clone with added delay prop for ScrollReveal children
            if (child.type === ScrollReveal) {
              return (
                <ScrollReveal
                  key={child.key ?? i}
                  {...child.props}
                  delay={baseDelay + i * stagger}
                />
              );
            }
            // For non-ScrollReveal children, wrap them
            return (
              <ScrollReveal key={child.key ?? i} delay={baseDelay + i * stagger}>
                {child}
              </ScrollReveal>
            );
          })
        : children}
    </div>
  );
};

export { ScrollReveal, StaggerGroup };
export default ScrollReveal;
