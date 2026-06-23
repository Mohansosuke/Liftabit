import QuoteImg1 from "../../assets/Quote_Img.png";
import ScrollReveal from '../ScrollReveal';

const Quote = () => {
  return (
    <section id="quote" className="px-8 mx-12 py-16 bg-white">
      <ScrollReveal y={36} scale={0.97} duration={0.8}>
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-sky-400 shadow-md"
          style={{
            backgroundImage: `url(${QuoteImg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <ScrollReveal delay={0.15} y={24} duration={0.6}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight font-manrope">
                Have a project in mind?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.25} y={20} duration={0.6}>
              <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-manrope">
                We have immediate availability and can begin your project within 24 hours of onboarding.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35} y={16} duration={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white font-bold text-sm rounded-xl hover:bg-brand-orange-dark transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/30 active:scale-95 text-center"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 bg-white text-brand-orange font-bold text-sm rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md active:scale-95 text-center"
                >
                  View Services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Quote;
