import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Solutions from '../../components/Solutions/Solutions';
import WorkWith from '../../components/WorkWith/WorkWith';
import Quote from '../../components/Quote/Quote';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Website Wrapper — bordered container Hero through Footer */}
      <main className="w-full max-w-[1400px] mx-auto border-[2px] border-b-0 border-[#EEEEEE] bg-white shadow-sm">
        <Hero />
        <Services />
        <Solutions />
        <WorkWith />
        <Quote />
        <FAQ />
        <Footer />
      </main>

      {/* Outer Copyright / Branding Bar below Main Website Wrapper */}
      {/* <div className="w-full max-w-5xl mx-auto py-16 flex flex-col items-center justify-center gap-6"> */}
        {/* Large Centered Logo */}
        {/* <div className="flex items-center gap-4"> */}
          {/* <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            <path d="M35 20 L22 62 A 12 12 0 0 0 34 76 L76 76 A 10 10 0 0 0 86 66 L86 66 A 10 10 0 0 0 76 56 L46 56" />
          </svg>
          <span className="text-5xl font-black text-black tracking-tight select-none">Liftabit</span>
        </div> */}
        
        {/* Copyright */}
        {/* <p className="text-sm text-gray-400 font-medium">
          Copyright 2024 Liftabit. All rights reserved.
        </p> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
