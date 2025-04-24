import React from 'react';
import { EmailBlock } from '../types';
import HeaderProperties from './properties/HeaderProperties';
import ProductProperties from './properties/ProductProperties';
import PromoProperties from './properties/PromoProperties';
import TextProperties from './properties/TextProperties';
import ImageProperties from './properties/ImageProperties';
import ButtonProperties from './properties/ButtonProperties';
import DividerProperties from './properties/DividerProperties';
import SpacerProperties from './properties/SpacerProperties';

interface PropertyPanelProps {
  block: EmailBlock;
  onUpdateBlock: (block: EmailBlock) => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({ block, onUpdateBlock }) => {
  const handleContentChange = (newContent: Record<string, any>) => {
    onUpdateBlock({
      ...block,
      content: {
        ...block.content,
        ...newContent,
      },
    });
  };

  const renderProperties = () => {
    switch (block.type) {
      case 'header':
        return <HeaderProperties content={block.content} onChange={handleContentChange} />;
      case 'product':
        return <ProductProperties content={block.content} onChange={handleContentChange} />;
      case 'promo':
        return <PromoProperties content={block.content} onChange={handleContentChange} />;
      case 'text':
        return <TextProperties content={block.content} onChange={handleContentChange} />;
      case 'image':
        return <ImageProperties content={block.content} onChange={handleContentChange} />;
      case 'button':
        return <ButtonProperties content={block.content} onChange={handleContentChange} />;
      case 'divider':
        return <DividerProperties content={block.content} onChange={handleContentChange} />;
      case 'spacer':
        return <SpacerProperties content={block.content} onChange={handleContentChange} />;
      default:
        return <div className="p-4">No properties available for this block type</div>;
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        {block.type.charAt(0).toUpperCase() + block.type.slice(1)} Properties
      </h3>
      {renderProperties()}
    </div>
  );
};

export default PropertyPanel;