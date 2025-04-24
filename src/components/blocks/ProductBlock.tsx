import React from 'react';

interface ProductBlockProps {
  content: {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    salePrice?: number;
    buttonText: string;
    buttonUrl: string;
  };
}

const ProductBlock: React.FC<ProductBlockProps> = ({ content }) => {
  const { imageUrl, name, description, price, salePrice, buttonText, buttonUrl } = content;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const formattedSalePrice = salePrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(salePrice)
    : null;

  return (
    <div className="p-6 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          
          <div className="mt-auto">
            <div className="mb-4">
              {formattedSalePrice ? (
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{formattedSalePrice}</span>
                  <span className="text-sm text-gray-500 line-through">{formattedPrice}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">{formattedPrice}</span>
              )}
            </div>
            
            <a
              href={buttonUrl}
              className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;