import React from 'react';
import AIAssistant from '../AIAssistant';

interface ImagePropertiesProps {
  content: {
    imageUrl: string;
    altText: string;
    alignment: 'left' | 'center' | 'right';
    width: string;
  };
  onChange: (newContent: Partial<ImagePropertiesProps['content']>) => void;
}

const ImageProperties: React.FC<ImagePropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input
          type="text"
          value={content.imageUrl}
          onChange={(e) => onChange({ imageUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          placeholder="https://example.com/image.jpg"
        />
        
        <AIAssistant
          type="image"
          onContentGenerated={(url) => onChange({ imageUrl: url })}
          placeholder="Describe the image you want to generate..."
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Alt Text
        </label>
        <input
          type="text"
          value={content.altText}
          onChange={(e) => onChange({ altText: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Alignment
        </label>
        <select
          value={content.alignment}
          onChange={(e) => onChange({ alignment: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Width
        </label>
        <div className="flex items-center">
          <input
            type="text"
            value={content.width}
            onChange={(e) => onChange({ width: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="100%"
          />
          <span className="ml-2 text-xs text-gray-500">
            (px, %, vw)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageProperties;