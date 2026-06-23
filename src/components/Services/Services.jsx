import { useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { services } from '../../data/services';

// ─── Animation Variants ───────────────────────────────────────────────────────
const variants = {
  enter: (dir) => ({ opacity: 0, y: dir > 0 ? 48 : -48 }),
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    opacity: 0,
    y: dir > 0 ? -48 : 48,
    transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
  }),
};

// ─── One service panel ────────────────────────────────────────────────────────
const ServiceCard = ({ service, direction }) => (
  <motion.div
    key={service.id}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-0"
  >
      {/* Left: text */}
      <div className="w-full md:w-[80%] flex flex-col items-center md:items-start text-center md:text-left">

        {/* Right: image */}
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          className="w-[300px] mb-1 "
        />

        <p className="text-sm md:text-base font-semibold mb-7 leading-relaxed max-w-md">
          {service.description}
        </p>
      </div>
   </motion.div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const Services = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Track scroll progress over the full 280 vh container
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.25 ? 0 : v < 0.5 ? 1 : v < 0.75 ? 2 : 3;
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const scrollToService = (i) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    const fracs = [0.08, 0.35, 0.61, 0.87];
    window.scrollTo({ top: top + fracs[i] * total, behavior: 'smooth' });
  };

  return (
    /*
      Scroll track: 280 vh of height creates the scroll budget.
      The inner "sticky" div stays pinned at top:0 while the user
      scrolls through it, then un-sticks naturally when they reach
      the end of the track.
      IMPORTANT: requires no `overflow:hidden/auto` on any ancestor
      (App.jsx uses overflowX:'clip' which does NOT create a scroll container).
    */
    <section
      ref={trackRef}
      id="services"
      className="relative w-full bg-white font-urbanist "
      style={{ height: '280vh' }}
    >
      {/* ── sticky shell ─────────────────────────────────────────────────── */}
      <div
        className="sticky top-0 w-full bg-white"
        style={{ height: '100vh' }}
      >
        {/* Grid: [nav col | panel col] inside a centered max-width wrapper */}
        <div className="h-full flex flex-col max-w-6xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="flex-shrink-0 text-center pt-24 pb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-purple/80 bg-brand-purple/5 text-brand-purple text-s font-medium tracking-wide mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              What we do?
            </h2>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-row gap-0 min-h-0 pb-6">

            {/* Left nav */}
            <div className="hidden md:flex flex-col gap-8 justify-center items-start pr-12 border-r border-gray-100 w-1/2">
              {services.map((svc, i) => {
                const active = i === activeIndex;
                return (
                  <button
                    key={svc.id}
                    onClick={() => scrollToService(i)}
                    className="flex items-center gap-3 group focus:outline-none w-full"
                  >
                    <div className="relative flex items-center justify-center w-12 h-6">

  {active && (
    <motion.span
      layoutId="line-glow"
      className="absolute w-10 h-4 rounded-full bg-brand-purple/15"
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
    />
  )}

  <span
    className={`w-4 h-[2px] rounded-full transition-colors duration-300 ${
      active
        ? "bg-brand-purple"
        : "bg-gray-300 group-hover:bg-gray-400"
    }`}
  />

</div>
                    <div className="flex flex-col items-start">
  <span
    className={`text-2xl font-semibold leading-tight transition-colors duration-300 ${
      active
        ? 'text-gray-900'
        : 'text-gray-400 group-hover:text-gray-600'
    }`}
  >
    {svc.name}
  </span>
</div>
                  </button>
                );
              })}
            </div>

            {/* Panel area — flex-1 so it fills remaining width AND height */}
            <div className="flex-1 min-w-0 relative -ml-[90px]">
              <AnimatePresence custom={direction} mode="wait">
                <ServiceCard
                  key={activeIndex}
                  service={services[activeIndex]}
                  direction={direction}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex md:hidden justify-center gap-2.5 pb-5 flex-shrink-0">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToService(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-purple' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;