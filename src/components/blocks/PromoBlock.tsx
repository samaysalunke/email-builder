import React from 'react';

interface PromoBlockProps {
  content: {
    code: string;
    title: string;
    description: string;
    expiryDate?: string;
    backgroundColor: string;
    highlightColor: string;
    textColor: string;
  };
}

const PromoBlock: React.FC<PromoBlockProps> = ({ content }) => {
  const { 
    code, 
    title, 
    description, 
    expiryDate, 
    backgroundColor, 
    highlightColor, 
    textColor 
  } = content;

  const formattedDate = expiryDate 
    ? new Date(expiryDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <div 
      className="p-6 text-center"
      style={{ backgroundColor, color: textColor }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      
      <div 
        className="px-4 py-3 mb-3 mx-auto inline-block rounded"
        style={{ backgroundColor: highlightColor }}
      >
        <span className="font-mono font-bold text-lg">{code}</span>
      </div>
      
      {formattedDate && (
        <p className="text-xs opacity-80">
          Valid until {formattedDate}
        </p>
      )}
    </div>
  );
};

export default PromoBlock;