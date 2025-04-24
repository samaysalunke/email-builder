import React, { useState } from 'react';
import { EmailTemplate } from '../types';
import { Smartphone, Monitor } from 'lucide-react';

interface PreviewPanelProps {
  template: EmailTemplate;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ template }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const getEmailHtml = () => {
    // This is a simplified version - in a real app, you'd generate proper email HTML
    const styles = `
      body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
      .email-container { max-width: 600px; margin: 0 auto; }
      @media only screen and (max-width: 480px) {
        .email-container { width: 100% !important; }
      }
    `;

    const head = `
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>${styles}</style>
        <title>${template.subject}</title>
      </head>
    `;

    const body = `
      <body>
        <div class="email-container">
          ${template.blocks.map(block => {
            // This is simplified - in a real app you'd have proper renderers for each block type
            return `<div class="block ${block.type}">${JSON.stringify(block.content)}</div>`;
          }).join('')}
        </div>
      </body>
    `;

    return `<!DOCTYPE html><html>${head}${body}</html>`;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">Email Preview</h3>
        
        <div className="flex p-1 bg-gray-100 rounded-md">
          <button
            className={`p-1 rounded ${viewMode === 'desktop' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setViewMode('desktop')}
            title="Desktop view"
          >
            <Monitor className="h-4 w-4 text-gray-600" />
          </button>
          <button
            className={`p-1 rounded ${viewMode === 'mobile' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setViewMode('mobile')}
            title="Mobile view"
          >
            <Smartphone className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Subject Line
        </label>
        <div className="text-sm text-gray-900 bg-gray-50 p-2 rounded border border-gray-200">
          {template.subject}
        </div>
      </div>
      
      <div 
        className={`border border-gray-200 rounded-md overflow-hidden bg-white ${
          viewMode === 'mobile' ? 'w-[320px] mx-auto' : 'w-full'
        }`}
      >
        <div className="h-[400px] overflow-y-auto">
          {template.blocks.length === 0 ? (
            <div className="flex items-center justify-center h-full bg-gray-50 text-gray-400 text-sm">
              No content to preview
            </div>
          ) : (
            <iframe
              title="Email Preview"
              srcDoc={getEmailHtml()}
              className="w-full h-full border-0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;