import React from 'react';

interface HeaderBlockProps {
  content: {
    title: string;
    subtitle?: string;
    logoUrl?: string;
    alignment: 'left' | 'center' | 'right';
    backgroundColor: string;
    textColor: string;
  };
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ content }) => {
  const { title, subtitle, logoUrl, alignment, backgroundColor, textColor } = content;

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment || 'center'];

  return (
    <div 
      className={`p-6 ${textAlignClass}`}
      style={{ backgroundColor, color: textColor }}
    >
      {logoUrl && (
        <div className={`mb-4 ${alignment === 'center' ? 'flex justify-center' : ''}`}>
          <img
            src={logoUrl}
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>
      )}
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
    </div>
  );
};

export default HeaderBlock;