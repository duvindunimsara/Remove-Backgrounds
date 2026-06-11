import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tool', label: 'Remove Background' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-white/[0.06]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display font-700 text-white text-lg tracking-tight">
              BG<span className="gradient-text">Remover</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/tool"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
            >
              Try Free →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/[0.06]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/tool"
              className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white text-center"
            >
              Try Free →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
