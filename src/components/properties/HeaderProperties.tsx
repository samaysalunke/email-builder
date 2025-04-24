import React from 'react';

interface HeaderPropertiesProps {
  content: {
    title: string;
    subtitle?: string;
    logoUrl?: string;
    alignment: 'left' | 'center' | 'right';
    backgroundColor: string;
    textColor: string;
  };
  onChange: (newContent: Partial<HeaderPropertiesProps['content']>) => void;
}

const HeaderProperties: React.FC<HeaderPropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={content.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Subtitle
        </label>
        <input
          type="text"
          value={content.subtitle || ''}
          onChange={(e) => onChange({ subtitle: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Logo URL
        </label>
        <input
          type="text"
          value={content.logoUrl || ''}
          onChange={(e) => onChange({ logoUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="https://example.com/logo.png"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Alignment
        </label>
        <select
          value={content.alignment}
          onChange={(e) => onChange({ alignment: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Background Color
        </label>
        <div className="flex">
          <input
            type="color"
            value={content.backgroundColor}
            onChange={(e) => onChange({ backgroundColor: e.target.value })}
            className="w-10 h-10 border border-gray-300 rounded-md cursor-pointer"
          />
          <input
            type="text"
            value={content.backgroundColor}
            onChange={(e) => onChange({ backgroundColor: e.target.value })}
            className="flex-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Text Color
        </label>
        <div className="flex">
          <input
            type="color"
            value={content.textColor}
            onChange={(e) => onChange({ textColor: e.target.value })}
            className="w-10 h-10 border border-gray-300 rounded-md cursor-pointer"
          />
          <input
            type="text"
            value={content.textColor}
            onChange={(e) => onChange({ textColor: e.target.value })}
            className="flex-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderProperties;