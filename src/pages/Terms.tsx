import React from 'react';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing or using BGRemover ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service. We reserve the right to update these terms at any time, and your continued use of the Service constitutes acceptance of any changes.`,
    },
    {
      title: 'Description of Service',
      content: `BGRemover provides an AI-powered background removal service for images. The Service is provided "as is" and is intended for lawful use only. We use the remove.bg API to process images and cannot guarantee 100% accuracy on all image types. Processing quality may vary depending on image content, lighting, and complexity.`,
    },
    {
      title: 'Acceptable Use',
      content: `You agree to use BGRemover only for lawful purposes. You must not upload images that contain illegal content, violate the rights of others, or depict minors in inappropriate contexts. You are solely responsible for ensuring you have the necessary rights to process any images you upload. Commercial use of the background removal service is permitted subject to the usage limits of your selected plan.`,
    },
    {
      title: 'Intellectual Property',
      content: `You retain all intellectual property rights to the images you upload and process through BGRemover. By uploading images, you grant us a limited, temporary license to process those images solely to provide the Service. We claim no ownership of your images. The BGRemover brand, logo, and website design are protected by intellectual property laws and may not be reproduced without permission.`,
    },
    {
      title: 'Limitations of Liability',
      content: `BGRemover is provided on an "as available" basis. We do not warrant that the Service will be uninterrupted, error-free, or produce perfect results for all images. To the maximum extent permitted by law, BGRemover and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to loss of data, loss of profits, or business interruption.`,
    },
    {
      title: 'Third-Party Services',
      content: `BGRemover relies on the remove.bg API for image processing. Service availability and quality are subject to remove.bg's own service levels and terms. We are not responsible for any downtime, errors, or issues arising from the remove.bg API or any other third-party services we use to provide BGRemover.`,
    },
    {
      title: 'Free Service Limitations',
      content: `The free tier of BGRemover is provided as-is with certain limitations. We reserve the right to modify, restrict, or discontinue the free tier at any time without notice. For high-volume or commercial usage, users are encouraged to obtain their own remove.bg API key and configure it in their deployment of BGRemover.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or your use of the Service shall be resolved through binding arbitration or in the appropriate courts of jurisdiction.`,
    },
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions — BGRemover"
        description="Read BGRemover's Terms and Conditions. Understand your rights and responsibilities when using our AI background removal service."
        canonical="https://bgremover.app/terms"
      />

      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mx-auto mb-5 border border-cyan-500/20">
              <FileText size={26} className="text-cyan-400" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-slate-400 text-lg">
              Please read these terms carefully before using BGRemover.
            </p>
            <p className="text-slate-600 text-sm mt-3">Last updated: January 1, 2025</p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} className="glass rounded-2xl p-7">
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                  <span className="text-cyan-400 text-sm font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 glass rounded-2xl p-7 border border-cyan-500/20">
            <h2 className="text-white font-semibold text-xl mb-3">Questions About These Terms?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              If you have questions about these Terms and Conditions, please{' '}
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                contact us
              </a>
              . We're happy to clarify any part of these terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
