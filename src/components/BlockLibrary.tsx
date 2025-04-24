import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EmailBlock } from '../types';
import { Type, Image, Box, ShoppingBag, Scissors, Grip, Square, Rows } from 'lucide-react';

interface BlockLibraryProps {
  onAddBlock: (block: EmailBlock) => void;
}

const BlockLibrary: React.FC<BlockLibraryProps> = ({ onAddBlock }) => {
  const blockCategories = [
    {
      name: 'Basic',
      blocks: [
        {
          type: 'header',
          icon: <Type className="h-5 w-5" />,
          label: 'Header',
          getContent: () => ({
            title: 'Welcome to our store',
            subtitle: 'Check out our latest products',
            logoUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alignment: 'center',
            backgroundColor: '#ffffff',
            textColor: '#000000',
          }),
        },
        {
          type: 'text',
          icon: <Type className="h-5 w-5" />,
          label: 'Text',
          getContent: () => ({
            text: 'Add your text content here. This could be a welcome message, product description, or any other information you want to share with your customers.',
            alignment: 'left',
            backgroundColor: '#ffffff',
            textColor: '#000000',
          }),
        },
        {
          type: 'image',
          icon: <Image className="h-5 w-5" />,
          label: 'Image',
          getContent: () => ({
            imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            altText: 'Image description',
            alignment: 'center',
            width: '100%',
          }),
        },
        {
          type: 'button',
          icon: <Box className="h-5 w-5" />,
          label: 'Button',
          getContent: () => ({
            text: 'Shop Now',
            url: '#',
            alignment: 'center',
            backgroundColor: '#8B5CF6',
            textColor: '#ffffff',
            borderRadius: '4px',
          }),
        },
        {
          type: 'divider',
          icon: <Rows className="h-5 w-5" />,
          label: 'Divider',
          getContent: () => ({
            color: '#e5e7eb',
            style: 'solid',
            width: '100%',
            height: '1px',
          }),
        },
        {
          type: 'spacer',
          icon: <Square className="h-5 w-5" />,
          label: 'Spacer',
          getContent: () => ({
            height: '20px',
          }),
        },
      ],
    },
    {
      name: 'E-commerce',
      blocks: [
        {
          type: 'product',
          icon: <ShoppingBag className="h-5 w-5" />,
          label: 'Product',
          getContent: () => ({
            productId: '',
            imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Product Name',
            description: 'This is a product description that briefly explains the main features and benefits of the product.',
            price: 99.99,
            salePrice: 79.99,
            buttonText: 'Buy Now',
            buttonUrl: '#',
          }),
        },
        {
          type: 'promo',
          icon: <Scissors className="h-5 w-5" />,
          label: 'Promotion',
          getContent: () => ({
            code: 'SUMMER20',
            title: 'Summer Sale',
            description: '20% off all products',
            expiryDate: '2023-08-31',
            backgroundColor: '#f9fafb',
            highlightColor: '#8B5CF6',
            textColor: '#000000',
          }),
        },
      ],
    },
  ];

  const handleAddBlock = (type: string, getContent: () => Record<string, any>) => {
    const newBlock: EmailBlock = {
      id: uuidv4(),
      type: type as EmailBlock['type'],
      content: getContent(),
    };
    onAddBlock(newBlock);
  };

  return (
    <div className="p-4">
      {blockCategories.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {category.name}
          </h3>
          <div className="space-y-2">
            {category.blocks.map((block) => (
              <button
                key={block.type}
                className="w-full flex items-center p-2 text-left bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition group"
                onClick={() => handleAddBlock(block.type, block.getContent)}
              >
                <div className="flex-shrink-0 mr-3 text-gray-400 group-hover:text-purple-600">
                  {block.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {block.label}
                </span>
                <Grip className="h-4 w-4 ml-auto text-gray-300 opacity-0 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockLibrary;