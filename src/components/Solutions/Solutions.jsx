import { solutions } from '../../data/solutions';
import SolutionImg1 from "../../assets/Solution_Img1.png";
import SolutionImg2 from "../../assets/Solution_Img2.png";
import SolutionImg3 from "../../assets/Solution_Img3.png";
import SolutionImg4 from "../../assets/Solution_Img4.png";
import SolutionImg5 from "../../assets/Solution_Img5.png";
import ScrollReveal from '../ScrollReveal';

const iconMap = {
  '📁': SolutionImg1,
  '</>': SolutionImg2,
  '🖌️': SolutionImg3,
  '$': SolutionImg4,
  '👤': SolutionImg5,
};

const SolutionCard = ({ solution, delay }) => (
  <ScrollReveal delay={delay} y={28} scale={0.97} duration={0.6}>
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:shadow-orange-50 hover:border-orange-100 transition-all duration-300 group h-full">
      {/* Icon */}
      <div className="w-12 h-12 mb-5 flex items-center justify-center">
        <img
          src={iconMap[solution.icon]}
          alt={solution.title}
          className="w-full h-full object-contain"
        />
      </div>
      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2">{solution.title}</h3>
      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">{solution.description}</p>
    </div>
  </ScrollReveal>
);

const Solutions = () => {
  const firstRow = solutions.slice(0, 3);
  const secondRow = solutions.slice(3);

  return (
    <section
      id="solutions"
      className="px-8 py-20 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(253, 186, 116, 0.2) 0%, rgba(237, 233, 254, 0.15) 60%, transparent 100%)',
      }}
    >
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-100/50 rounded-full filter blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <ScrollReveal y={20} duration={0.6}>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-purple/30 bg-white text-brand-purple text-xs font-semibold tracking-wide uppercase mb-4">
            Why Choose Liftabit
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1} y={24} duration={0.6}>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">
            Customizable Solutions for Every Need
          </h2>
        </ScrollReveal>
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-5xl mx-auto">
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {firstRow.map((solution, i) => (
            <SolutionCard key={solution.id} solution={solution} delay={0.05 + i * 0.1} />
          ))}
        </div>
        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {secondRow.map((solution, i) => (
            <SolutionCard key={solution.id} solution={solution} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
