import React from 'react';

interface SpacerBlockProps {
  content: {
    height: string;
  };
}

const SpacerBlock: React.FC<SpacerBlockProps> = ({ content }) => {
  const { height } = content;

  return (
    <div style={{ height: height || '20px' }}></div>
  );
};

export default SpacerBlock;