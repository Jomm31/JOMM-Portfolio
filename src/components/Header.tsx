import { useMemo } from 'react';

const Header = () => {
  const links = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  );

  return (
    <div className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: '#12093B' }}>
      <header className="h-[80px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home">
            <img src="/JommLogo.png" alt="" className="w-[130px]" />
          </a>
          <nav className="flex items-center gap-6 text-2xl font-medium text-white h-[24px]" style={{fontFamily: 'pixelGridS'}}>
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-[#FED52E]">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
