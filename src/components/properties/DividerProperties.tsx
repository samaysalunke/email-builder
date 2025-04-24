import React from 'react';

interface DividerPropertiesProps {
  content: {
    color: string;
    style: 'solid' | 'dashed' | 'dotted';
    width: string;
    height: string;
  };
  onChange: (newContent: Partial<DividerPropertiesProps['content']>) => void;
}

const DividerProperties: React.FC<DividerPropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Color
        </label>
        <div className="flex">
          <input
            type="color"
            value={content.color}
            onChange={(e) => onChange({ color: e.target.value })}
            className="w-10 h-10 border border-gray-300 rounded-md cursor-pointer"
          />
          <input
            type="text"
            value={content.color}
            onChange={(e) => onChange({ color: e.target.value })}
            className="flex-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Style
        </label>
        <select
          value={content.style}
          onChange={(e) => onChange({ style: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
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
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="100%"
          />
          <span className="ml-2 text-xs text-gray-500">
            (px, %)
          </span>
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Height
        </label>
        <div className="flex items-center">
          <input
            type="text"
            value={content.height}
            onChange={(e) => onChange({ height: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="1px"
          />
          <span className="ml-2 text-xs text-gray-500">
            (px)
          </span>
        </div>
      </div>
    </div>
  );
};

export default DividerProperties;