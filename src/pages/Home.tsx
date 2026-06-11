import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Shield, Download, ArrowRight, Check, Star, Image, Layers, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import AdBanner from '../components/AdBanner';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Cpu size={20} className="text-violet-400" />,
      title: 'AI-Powered Precision',
      desc: 'Advanced neural networks detect and remove backgrounds with pixel-perfect accuracy on any subject.',
    },
    {
      icon: <Zap size={20} className="text-cyan-400" />,
      title: 'Instant Processing',
      desc: 'Get results in under 5 seconds. No waiting, no queues — just upload and download.',
    },
    {
      icon: <Shield size={20} className="text-violet-400" />,
      title: 'Privacy First',
      desc: 'Your images are processed securely and never stored on our servers. Your data stays yours.',
    },
    {
      icon: <Download size={20} className="text-cyan-400" />,
      title: 'High-Res PNG Output',
      desc: 'Download full-resolution transparent PNG files ready for any professional use.',
    },
    {
      icon: <Layers size={20} className="text-violet-400" />,
      title: 'Before/After Preview',
      desc: 'Interactive comparison slider so you can inspect every detail before downloading.',
    },
    {
      icon: <Image size={20} className="text-cyan-400" />,
      title: 'Works on Everything',
      desc: 'People, products, animals, cars, logos — our model handles complex edges and fine hair.',
    },
  ];

  const useCases = [
    { title: 'Product Photography', emoji: '📦', desc: 'Clean white or transparent backgrounds for e-commerce.' },
    { title: 'Portrait Editing', emoji: '🧑', desc: 'Swap backgrounds in profile photos instantly.' },
    { title: 'Logo Design', emoji: '✏️', desc: 'Extract logos from any background for brand use.' },
    { title: 'Social Media', emoji: '📱', desc: 'Create standout visuals for posts and stories.' },
  ];

  const steps = [
    { num: '01', title: 'Upload Your Image', desc: 'Drag and drop or click to select any JPG or PNG up to 10MB.' },
    { num: '02', title: 'AI Processes It', desc: 'Our AI analyzes your image and removes the background in seconds.' },
    { num: '03', title: 'Download Result', desc: 'Preview the result with our comparison slider, then download your transparent PNG.' },
  ];

  return (
    <>
      <SEO
        title="BGRemover — Free AI Background Remover Online"
        description="Remove image backgrounds instantly with AI. Free, fast, and accurate background removal for photos, products, and portraits. Download transparent PNG in seconds."
        canonical="https://bgremover.app/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm text-violet-300 mb-8">
              <Sparkles size={14} />
              <span>Powered by remove.bg AI Technology</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Remove Backgrounds{' '}
              <span className="gradient-text">Instantly</span>{' '}
              with AI
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Upload any image and our AI removes the background in under 5 seconds.
              Perfect results on people, products, animals, and complex scenes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/tool"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold text-lg hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
              >
                Remove Background Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Check size={14} className="text-green-400" />
                No sign-up required
              </div>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { val: '10M+', label: 'Images Processed' },
                { val: '4.9/5', label: 'User Rating', icon: <Star size={12} className="text-yellow-400 fill-yellow-400" /> },
                { val: '<5s', label: 'Processing Time' },
                { val: '100%', label: 'Free to Use' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                  {stat.icon}
                  <span className="text-white font-semibold">{stat.val}</span>
                  <span className="text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo visual */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-black/50">
              <div className="rounded-xl overflow-hidden grid grid-cols-2 gap-3 h-64 sm:h-80">
                <div className="rounded-lg bg-dark-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 mx-auto mb-3 flex items-center justify-center">
                      <Image size={32} className="text-slate-500" />
                    </div>
                    <p className="text-slate-600 text-xs">Original</p>
                  </div>
                </div>
                <div className="rounded-lg checker-bg flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white/10 mx-auto mb-3 flex items-center justify-center">
                      <Sparkles size={32} className="text-violet-400" />
                    </div>
                    <p className="text-slate-400 text-xs">Background Removed ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner variant="horizontal" />
      </div>

      {/* How it works */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Simple Process</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Three steps to a clean image
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative glass rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-300 group">
              <div className="text-5xl font-display font-black text-violet-500/10 group-hover:text-violet-500/20 transition-colors mb-4 leading-none">
                {step.num}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10 text-slate-700">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tool"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
          >
            Start Now — It's Free <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Why BGRemover</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Built for professionals
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Every feature designed to save you time and deliver results that hold up under scrutiny.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:border-violet-500/20 hover:bg-violet-500/[0.03] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-dark-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Use Cases</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Works for every workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center hover:border-violet-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">{u.emoji}</div>
              <h3 className="text-white font-semibold mb-2">{u.title}</h3>
              <p className="text-slate-500 text-sm">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Second ad banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner variant="horizontal" />
      </div>

      {/* CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-border rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to remove backgrounds?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Free, instant, and no sign-up required. Try it now and see the difference AI makes.
            </p>
            <Link
              to="/tool"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:scale-105 transition-transform duration-200"
            >
              <Sparkles size={20} />
              Remove Background Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
