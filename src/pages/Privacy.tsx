import React from 'react';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `When you use BGRemover, we collect only the minimal information necessary to provide our service. This includes images you upload for processing, which are transmitted directly to the remove.bg API and are not stored on our servers. We may collect standard web analytics data such as page views and general usage patterns through anonymous analytics tools.`,
    },
    {
      title: 'How We Use Your Images',
      content: `Your uploaded images are processed solely for the purpose of removing their backgrounds. Images are sent to the remove.bg API over an encrypted HTTPS connection and are not retained by BGRemover after processing is complete. We do not use your images for training AI models, advertising, or any purpose other than providing the background removal service.`,
    },
    {
      title: 'Third-Party Services',
      content: `BGRemover uses the remove.bg API to perform background removal. Your images are subject to remove.bg's own privacy policy when processed through their service. We may also use Google Analytics to understand general usage patterns. This service may use cookies to collect anonymous data about how visitors use our site.`,
    },
    {
      title: 'Cookies and Tracking',
      content: `BGRemover may use cookies to improve your browsing experience. These include essential cookies required for the site to function properly, and analytics cookies to understand how users interact with our service. We may display Google AdSense advertisements, which may use cookies to show you relevant ads based on your browsing history.`,
    },
    {
      title: 'Data Retention',
      content: `We do not store uploaded images beyond the duration of your processing session. Once a background removal task is complete and you download your result, no image data is retained on our systems. Analytics data is retained in anonymized form for up to 26 months to help us improve the service.`,
    },
    {
      title: 'Your Rights',
      content: `Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete information we hold about you. Since we do not store your images, there is generally no personal image data to request or delete. For analytics data, you can opt out by using browser privacy settings or ad blockers.`,
    },
    {
      title: 'Children\'s Privacy',
      content: `BGRemover is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the "Last Updated" date at the top of this page. Your continued use of BGRemover after any changes constitutes your acceptance of the updated policy.`,
    },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy — BGRemover"
        description="Learn how BGRemover handles your data. We prioritize your privacy — images are processed securely and never stored on our servers."
        canonical="https://bgremover.app/privacy"
      />

      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center mx-auto mb-5 border border-violet-500/20">
              <Shield size={26} className="text-violet-400" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg">
              Your privacy matters. Here's exactly how we handle your data.
            </p>
            <p className="text-slate-600 text-sm mt-3">Last updated: January 1, 2025</p>
          </div>

          {/* Intro highlight */}
          <div className="glass rounded-2xl p-6 mb-10 border border-green-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Shield size={18} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">The short version</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We don't store your images. They're processed in real-time and discarded. We don't sell your data.
                  We use minimal analytics to improve the service. That's it.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} className="glass rounded-2xl p-7">
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                  <span className="text-violet-400 text-sm font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 glass rounded-2xl p-7 border border-violet-500/20">
            <h2 className="text-white font-semibold text-xl mb-3">Contact Us</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, please{' '}
              <a href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
                contact us
              </a>
              . We aim to respond to all privacy-related inquiries within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
