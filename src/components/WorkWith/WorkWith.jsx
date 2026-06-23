import { useState } from 'react';
import { workWithItems } from '../../data/workWith';
import ScrollReveal from '../ScrollReveal';

const WorkWith = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(workWithItems[0].id);

  return (
    <section
      id="work-with"
      className="bg-black breakout-section font-manrope"
    >
      <div className="max-w-[1400px] mx-auto border-[2px] border[#EEEEEE] border-y-0 px-8 py-20">
        {/* Section Label */}
        <ScrollReveal y={20} duration={0.6}>
          <p className="text-center text-white text-[35px] font-semibold mb-10">
            Who We Work With
          </p>
        </ScrollReveal>

        {/* Items */}
        <div className="max-w-7.5xl mx-auto ">
          {workWithItems.map((item, index) => {
            const isActive = item.id === activeId;
            const isHovered = item.id === hoveredId;
            const highlighted = isActive || isHovered;

            return (
              <ScrollReveal key={item.id} delay={0.05 + index * 0.08} y={24} duration={0.6}>
                <div
                  className="group flex items-center justify-between py-6"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveId(item.id)}
                >
                  <h3
                    className={`text-4xl p-7 md:text-6xl font-semibold transition-all duration-300 ${
                      highlighted
                        ? 'text-white translate-x-2'
                        : 'text-[#555555]'
                    }`}
                  >
                    {item.label}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkWith;
