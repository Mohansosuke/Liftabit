import { useState } from 'react';
import Logo from "../../assets/Logo.png";
import LogoName from "../../assets/Logo_Name.png";
import NavArrowBtn from "../../assets/Nav_Arrow_Btn.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className=" bg-white">
      <div className="">
        <div className="flex items-center justify-between px-6 py-3 ">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 ml-20  select-none">
            <img
              src={Logo}
              alt="Liftabit Logo"
              className="w-8 h-8 object-contain"
            />

            <img
              src={LogoName}
              alt="Liftabit"
              className="h-5.5 w-27.5 object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">About</a>

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-gray-100 rounded-xl shadow-xl p-3 w-56 z-50">
                  <a href="#services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange rounded-lg transition-colors" onClick={() => setServicesOpen(false)}>Website Development</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange rounded-lg transition-colors" onClick={() => setServicesOpen(false)}>Web & Mobile Apps</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange rounded-lg transition-colors" onClick={() => setServicesOpen(false)}>UI/UX Design</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange rounded-lg transition-colors" onClick={() => setServicesOpen(false)}>Custom Software</a>
                </div>
              )}
            </div>

            <a href="#resources" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
            <a href="#contact" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex mr-20">
            <a
              href="#quote"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#5E00FF] hover:bg-[#3E00CC] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-200 active:scale-95"
            >
              Start your Project
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <img
                  src={NavArrowBtn}
                  alt="Arrow"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 space-y-1">
            <a href="#about" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl">About</a>
            <a href="#services" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Services</a>
            <a href="#resources" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Resources</a>
            <a href="#contact" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Contact</a>
            <div className="pt-2">
              <a href="#quote" className="block text-center px-4 py-3 bg-brand-purple text-white text-sm font-semibold rounded-xl">Start your Project →</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
