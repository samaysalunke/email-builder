import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
        <Mail className="h-8 w-8 text-purple-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Start building your email
      </h3>
      <p className="text-sm text-gray-500 mb-6 max-w-md">
        Drag and drop blocks from the left panel to create your email template. 
        You can customize each block to fit your brand.
      </p>
      <div className="flex items-center text-sm text-purple-600 font-medium">
        <span>Add a block to get started</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
};

export default EmptyState;