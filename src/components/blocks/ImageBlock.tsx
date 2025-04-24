import React from 'react';

interface ImageBlockProps {
  content: {
    imageUrl: string;
    altText: string;
    alignment: 'left' | 'center' | 'right';
    width: string;
  };
}

const ImageBlock: React.FC<ImageBlockProps> = ({ content }) => {
  const { imageUrl, altText, alignment, width } = content;

  const alignmentClass = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  }[alignment || 'center'];

  return (
    <div className="p-6 bg-white">
      <img
        src={imageUrl}
        alt={altText}
        className={`${alignmentClass} object-cover`}
        style={{ width: width || '100%' }}
      />
    </div>
  );
};

export default ImageBlock;