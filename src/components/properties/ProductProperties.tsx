import React from 'react';

interface ProductPropertiesProps {
  content: {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    salePrice?: number;
    buttonText: string;
    buttonUrl: string;
  };
  onChange: (newContent: Partial<ProductPropertiesProps['content']>) => void;
}

const ProductProperties: React.FC<ProductPropertiesProps> = ({ content, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Product Image URL
        </label>
        <input
          type="text"
          value={content.imageUrl}
          onChange={(e) => onChange({ imageUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="https://example.com/product.jpg"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          value={content.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={content.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            value={content.price}
            onChange={(e) => onChange({ price: parseFloat(e.target.value) })}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Sale Price (Optional)
          </label>
          <input
            type="number"
            value={content.salePrice || ''}
            onChange={(e) => {
              const value = e.target.value ? parseFloat(e.target.value) : undefined;
              onChange({ salePrice: value });
            }}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Button Text
        </label>
        <input
          type="text"
          value={content.buttonText}
          onChange={(e) => onChange({ buttonText: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Button URL
        </label>
        <input
          type="text"
          value={content.buttonUrl}
          onChange={(e) => onChange({ buttonUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="https://example.com/product"
        />
      </div>
    </div>
  );
};

export default ProductProperties;