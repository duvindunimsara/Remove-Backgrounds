import React from 'react';

interface AdBannerProps {
  variant?: 'horizontal' | 'sidebar' | 'square';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ variant = 'horizontal', className = '' }) => {
  const dimensions = {
    horizontal: 'w-full h-24 sm:h-28',
    sidebar: 'w-full h-64',
    square: 'w-full h-60',
  };

  return (
    <div className={`ad-placeholder rounded-xl ${dimensions[variant]} ${className}`}>
      {/* Replace this div with your Google AdSense code:
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
      */}
      <div className="text-center">
        <p className="text-xs tracking-widest opacity-40">Advertisement</p>
        <p className="text-[10px] opacity-20 mt-1">
          {variant === 'horizontal' ? '728×90 Banner' : variant === 'sidebar' ? '300×250 Sidebar' : '336×280 Square'}
        </p>
      </div>
    </div>
  );
};

export default AdBanner;
