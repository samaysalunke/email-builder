import React from 'react';

interface TextBlockProps {
  content: {
    text: string;
    alignment: 'left' | 'center' | 'right';
    backgroundColor: string;
    textColor: string;
  };
}

const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
  const { text, alignment, backgroundColor, textColor } = content;

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment || 'left'];

  return (
    <div 
      className={`p-6 ${textAlignClass}`}
      style={{ backgroundColor, color: textColor }}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default TextBlock;