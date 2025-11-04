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
    <div className="fixed inset-x-0 top-0 z-10" style={{ backgroundColor: '#2AA0D6' }}>
      <header className="z-20 bg-white/80 backdrop-blur border-b border-sky-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold text-sky-700">
            JOMM.
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-sky-800">
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-sky-500">
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
