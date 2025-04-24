import React from 'react';

interface SpacerPropertiesProps {
  content: {
    height: string;
  };
  onChange: (newContent: Partial<SpacerPropertiesProps['content']>) => void;
}

const SpacerProperties: React.FC<SpacerPropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
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
            placeholder="20px"
          />
          <span className="ml-2 text-xs text-gray-500">
            (px)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpacerProperties;