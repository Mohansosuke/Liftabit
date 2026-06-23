import { useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';

const Footer = () => {
  const [time, setTime] = useState('09:31:02 AM');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format to Asia/Kolkata (South India) timezone
      try {
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(now);
        
        let hour = parts.find(p => p.type === 'hour').value;
        const minute = parts.find(p => p.type === 'minute').value;
        const second = parts.find(p => p.type === 'second').value;
        const dayPeriod = parts.find(p => p.type === 'dayPeriod').value;
        
        // Ensure double digits
        if (hour.length === 1) hour = '0' + hour;
        
        setTime(`${hour}:${minute}:${second} ${dayPeriod}`);
      } catch (e) {
        // Fallback manual formatting if Intl fails
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const hoursStr = String(hours).padStart(2, '0');
        setTime(`${hoursStr}:${minutes}:${seconds} ${ampm}`);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-black text-gray-400 font-sans breakout-section rounded-b-4xl font-manrope">
      <div className="max-w-[1400px] mx-auto border-[2px] border[#EEEEEE] border-y-0 px-8 ">
        {/* Main Footer Container */}
        <div className="px-8 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Span 6) */}
            <div className="md:col-span-6 space-y-8">
              <ScrollReveal y={24} duration={0.6}>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 font-medium tracking-wide">
                    Have a Project in mind:
                  </p>
                  <a
                    href="mailto:contact@liftabit.com"
                    className="block text-2xl md:text-3xl font-bold text-white hover:text-brand-orange transition-colors"
                  >
                    contact@liftabit.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1} y={20} duration={0.6}>
                <p className="text-sm text-gray-500 font-medium">
                  Based in South India. <span className="text-white font-semibold">Serving clients globally</span>
                </p>
              </ScrollReveal>

              {/* Dynamic Clock */}
              <ScrollReveal delay={0.2} y={20} duration={0.6}>
                <div className="text-5xl md:text-6xl font-bold text-white tracking-tight flex items-baseline gap-3">
                  <span className="font-mono">{time.split(' ')[0]}</span>
                  <span className="text-base font-semibold text-gray-400">{time.split(' ')[1]}</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Spacer Column (Span 2) */}
            <div className="hidden md:block md:col-span-2" />

            {/* Pages Column (Span 2) */}
            <ScrollReveal delay={0.1} y={24} duration={0.6} className="md:col-span-2 space-y-4">
              <h4 className="text-base font-bold text-white tracking-wide">Pages</h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Resource', 'Contact'].map((page) => (
                  <li key={page}>
                    <a
                      href={`#${page.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Connect Column (Span 2) */}
            <ScrollReveal delay={0.2} y={24} duration={0.6} className="md:col-span-2 space-y-4">
              <h4 className="text-base font-bold text-white tracking-wide">Connect</h4>
              <ul className="space-y-3">
                {['LinkedIn', 'WhatsApp', 'Instagram'].map((network) => (
                  <li key={network}>
                    <a
                      href={`#${network.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {network}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Bottom Row inside the dark background container */}
          <ScrollReveal delay={0.3} y={16} duration={0.5}>
            <div className="pt-8 flex flex-col sm:flex-row justify-end gap-[100px] text-xs text-gray-500 mr-[70px]">
              <a href="#terms" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</a>
              <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policies</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
