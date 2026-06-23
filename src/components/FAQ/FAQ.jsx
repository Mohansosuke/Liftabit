import { useState } from 'react';
import { faqItems } from '../../data/faq';
import ScrollReveal from '../ScrollReveal';

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="w-full">
      {isOpen ? (
        // Active/expanded card style
        <div className="bg-orange-50/40 border border-orange-200/60 rounded-2xl p-6 my-4 transition-all duration-300 shadow-sm">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between text-left group"
            id={`faq-btn-${item.id}`}
            aria-expanded={isOpen}
            aria-controls={`faq-panel-${item.id}`}
          >
            <span className="text-base md:text-lg font-bold text-gray-900">
              {item.question}
            </span>
            <div className="shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-all duration-200">
              {/* "x" close icon */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </button>
          <div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed font-normal max-h-[500px] overflow-y-auto"
          >
            {item.answer}
          </div>
        </div>
      ) : (
        // Inactive/collapsed list style
        <div className="border-b border-gray-100 last:border-b-0 py-5 transition-colors">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between text-left group"
            id={`faq-btn-${item.id}`}
            aria-expanded={isOpen}
            aria-controls={`faq-panel-${item.id}`}
          >
            <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
              {item.question}
            </span>
            <div className="shrink-0 w-8 h-8 text-gray-500 flex items-center justify-center">
              {/* plus icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:scale-110">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(faqItems[0].id);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-8 py-20 bg-white min-h-[800px] max-h-[800px] overflow-y-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <ScrollReveal y={20} duration={0.6}>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-purple/40 bg-brand-purple/5 text-brand-purple text-xs font-semibold tracking-wide uppercase mb-4">
            Trusted Answers
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1} y={24} duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto flex flex-col space-y-4">
        {faqItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={0.05 + i * 0.08} y={20} duration={0.5}>
            <FAQItem
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          </ScrollReveal>
          ))}
      </div>
    </section>
  );
};

export default FAQ;
