import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GitFork, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                BG<span className="gradient-text">Remover</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Professional AI-powered background removal. Clean, fast, and accurate — 
              powered by advanced machine learning.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://twitter.com" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-violet-400 transition-colors">
                <Globe size={16} />
              </a>
              <a href="https://github.com" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-violet-400 transition-colors">
                <GitFork size={16} />
              </a>
              <a href="mailto:hello@bgremover.app" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-violet-400 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { to: '/tool', label: 'Background Remover' },
                { to: '/', label: 'Features' },
                { to: '/', label: 'Pricing' },
                { to: '/', label: 'API Access' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms & Conditions' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/', label: 'Cookie Policy' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} BGRemover. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Powered by{' '}
            <a href="https://remove.bg" className="text-violet-400 hover:text-violet-300 transition-colors">
              remove.bg
            </a>{' '}
            API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
