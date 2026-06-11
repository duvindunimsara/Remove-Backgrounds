import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'API Access',
    'Billing Question',
    'Privacy Concern',
    'Feature Request',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SEO
        title="Contact Us — BGRemover"
        description="Get in touch with the BGRemover team. We're here to help with technical support, API questions, and general inquiries."
        canonical="https://bgremover.app/contact"
      />

      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center mx-auto mb-5 border border-violet-500/20">
              <MessageSquare size={26} className="text-violet-400" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Have a question or need help? We'd love to hear from you. Reach out and we'll get back to you quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={20} className="text-violet-400" />,
                  title: 'Email Us',
                  desc: 'hello@bgremover.app',
                  note: 'For general inquiries',
                },
                {
                  icon: <Clock size={20} className="text-cyan-400" />,
                  title: 'Response Time',
                  desc: 'Within 24 hours',
                  note: 'Mon–Fri, 9am–6pm UTC',
                },
                {
                  icon: <MessageSquare size={20} className="text-violet-400" />,
                  title: 'Support',
                  desc: 'support@bgremover.app',
                  note: 'For technical issues',
                },
              ].map((item, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-dark-600 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ note */}
              <div className="glass rounded-2xl p-6 border border-violet-500/20">
                <h3 className="text-white font-semibold mb-2">Quick Answers</h3>
                <div className="space-y-3">
                  {[
                    { q: 'Is it free?', a: 'Yes, basic usage is completely free.' },
                    { q: 'Are images stored?', a: 'No, images are never stored on our servers.' },
                    { q: 'What formats are supported?', a: 'JPG, PNG, and WEBP up to 10MB.' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-slate-300 text-sm font-medium">{item.q}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thanks for reaching out. We'll get back to you at <strong className="text-white">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' }); }}
                    className="mt-6 px-6 py-3 rounded-xl glass hover:bg-white/[0.1] text-white text-sm font-medium transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-white font-semibold text-xl mb-6">Send a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-dark-600 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-dark-600 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-dark-600 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                      >
                        {subjects.map(s => (
                          <option key={s} value={s} className="bg-dark-700">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl bg-dark-600 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] shadow-lg shadow-violet-500/25"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
