import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
    ],
    [],
  );

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Small delay to let menu close, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: '#12093B' }}>
      <header className="h-[80px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home">
            <img src="/JommLogo.png" alt="" className="w-[130px]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-2xl font-medium text-white h-[24px]" style={{fontFamily: 'pixelGridS'}}>
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-[#FED52E]">
                {label}
              </a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              className="block w-6 h-0.5 bg-white mb-1.5"
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-white mb-1.5"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-white"
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-[80px] left-0 right-0 bg-[#12093B] border-t border-[#2a2a5a]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-4 gap-4" style={{fontFamily: 'pixelGridS'}}>
              {links.map(({ label, href }) => (
                <a 
                  key={href} 
                  href={href} 
                  className="text-xl text-white transition hover:text-[#FED52E] py-2"
                  onClick={(e) => handleLinkClick(e, href)}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
