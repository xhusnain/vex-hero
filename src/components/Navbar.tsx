import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6 transition-all duration-700"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
      }}
    >
      <div className="liquid-glass rounded-xl flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-white">
          VEX
        </a>
        <div className="hidden md:flex gap-8 text-sm text-white">
          <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
          <a href="#stack" className="hover:text-gray-300 transition-colors">Stack</a>
          <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
          <a href="#process" className="hover:text-gray-300 transition-colors">Process</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Start a Chat
        </a>
      </div>
    </nav>
  );
}
