import ScrollReveal from '../ScrollReveal';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-8 pt-40 pb-20 flex flex-col items-center text-center "
      style={{
        background:
          '',
      }}
    >
      {/* Decorative blur blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-orange-100 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      {/* Badge */}
      {/* <div className="relative mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-purple text-xs font-semibold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
          Software Agency
        </span>
      </div> */}

      {/* Heading */}
      <ScrollReveal delay={0} duration={0.8} y={40}>
        <h1 className="relative max-w-4xl text-4xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
          Custom Software Solutions for{' '}
          <span className="text-gradient-orange">Web, Mobile</span>{' '}
          &amp; Design Needs
        </h1>
      </ScrollReveal>

      {/* Sub-heading */}
      <ScrollReveal delay={0.15} duration={0.7} y={30}>
        <p className="relative max-w-xl text-base md:text-lg text-gray-500 leading-relaxed mb-10">
          We build websites, web apps, mobile apps, and UI/UX solutions tailored
          for startups and businesses.
        </p>
      </ScrollReveal>

      {/* CTAs */}
      <ScrollReveal delay={0.3} duration={0.7} y={24}>
        <div className="relative flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#quote"
            className="btn-primary text-base px-8 py-3.5 shadow-md shadow-orange-100"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="btn-outline text-base px-8 py-3.5"
          >
            View Services
          </a>
        </div>
      </ScrollReveal>

      {/* Trust badges */}
      {/* <div className="relative mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          No contracts, cancel anytime
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Free discovery call
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          100% ownership of deliverables
        </span>
      </div> */}
    </section>
  );
};

export default Hero;
