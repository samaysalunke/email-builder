import React from 'react';

interface PromoPropertiesProps {
  content: {
    code: string;
    title: string;
    description: string;
    expiryDate?: string;
    backgroundColor: string;
    highlightColor: string;
    textColor: string;
  };
  onChange: (newContent: Partial<PromoPropertiesProps['content']>) => void;
}

const PromoProperties: React.FC<PromoPropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Promo Code
        </label>
        <input
          type="text"
          value={content.code}
          onChange={(e) => onChange({ code: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
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
          Description
        </label>
        <input
          type="text"
          value={content.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Expiry Date (Optional)
        </label>
        <input
          type="date"
          value={content.expiryDate || ''}
          onChange={(e) => onChange({ expiryDate: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
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
          Highlight Color
        </label>
        <div className="flex">
          <input
            type="color"
            value={content.highlightColor}
            onChange={(e) => onChange({ highlightColor: e.target.value })}
            className="w-10 h-10 border border-gray-300 rounded-md cursor-pointer"
          />
          <input
            type="text"
            value={content.highlightColor}
            onChange={(e) => onChange({ highlightColor: e.target.value })}
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

export default PromoProperties;