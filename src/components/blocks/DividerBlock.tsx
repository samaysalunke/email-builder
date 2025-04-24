import React from 'react';

interface DividerBlockProps {
  content: {
    color: string;
    style: 'solid' | 'dashed' | 'dotted';
    width: string;
    height: string;
  };
}

const DividerBlock: React.FC<DividerBlockProps> = ({ content }) => {
  const { color, style, width, height } = content;

  return (
    <div className="py-2 px-6">
      <hr
        style={{
          borderStyle: style || 'solid',
          borderColor: color,
          width: width || '100%',
          height: height || '1px',
          borderWidth: '0 0 1px 0',
        }}
      />
    </div>
  );
};

export default DividerBlock;