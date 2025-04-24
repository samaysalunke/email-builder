import React from 'react';

interface ButtonBlockProps {
  content: {
    text: string;
    url: string;
    alignment: 'left' | 'center' | 'right';
    backgroundColor: string;
    textColor: string;
    borderRadius: string;
  };
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ content }) => {
  const { text, url, alignment, backgroundColor, textColor, borderRadius } = content;

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment || 'center'];

  return (
    <div className={`p-6 ${alignmentClass}`}>
      <a
        href={url}
        className="inline-block px-6 py-3 font-medium text-sm"
        style={{ 
          backgroundColor, 
          color: textColor,
          borderRadius: borderRadius || '4px'
        }}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonBlock;