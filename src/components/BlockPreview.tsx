import React from 'react';
import { EmailBlock } from '../types';
import { Trash2, GripVertical } from 'lucide-react';
import HeaderBlock from './blocks/HeaderBlock';
import ProductBlock from './blocks/ProductBlock';
import PromoBlock from './blocks/PromoBlock';
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import ButtonBlock from './blocks/ButtonBlock';
import DividerBlock from './blocks/DividerBlock';
import SpacerBlock from './blocks/SpacerBlock';

interface BlockPreviewProps {
  block: EmailBlock;
  isSelected: boolean;
  onDelete: () => void;
}

const BlockPreview: React.FC<BlockPreviewProps> = ({ block, isSelected, onDelete }) => {
  const renderBlockContent = () => {
    switch (block.type) {
      case 'header':
        return <HeaderBlock content={block.content} />;
      case 'product':
        return <ProductBlock content={block.content} />;
      case 'promo':
        return <PromoBlock content={block.content} />;
      case 'text':
        return <TextBlock content={block.content} />;
      case 'image':
        return <ImageBlock content={block.content} />;
      case 'button':
        return <ButtonBlock content={block.content} />;
      case 'divider':
        return <DividerBlock content={block.content} />;
      case 'spacer':
        return <SpacerBlock content={block.content} />;
      default:
        return <div>Unknown block type</div>;
    }
  };

  return (
    <div className="group relative">
      {isSelected && (
        <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <div className="p-1 bg-white rounded shadow-sm border border-gray-200 text-gray-500 cursor-move">
            <GripVertical className="h-4 w-4" />
          </div>
          <button 
            className="p-1 bg-white rounded shadow-sm border border-gray-200 text-gray-500 hover:text-red-500 transition"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Delete block"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}
      
      {renderBlockContent()}
    </div>
  );
};

export default BlockPreview;