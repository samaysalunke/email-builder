import React, { useState } from 'react';
import { EmailTemplate, EmailBlock } from '../types';
import BlockLibrary from './BlockLibrary';
import EmailCanvas from './EmailCanvas';
import PropertyPanel from './PropertyPanel';
import IntegrationPanel from './IntegrationPanel';
import PreviewPanel from './PreviewPanel';

interface EmailBuilderProps {
  template: EmailTemplate;
  onTemplateChange: (template: EmailTemplate) => void;
}

const EmailBuilder: React.FC<EmailBuilderProps> = ({ template, onTemplateChange }) => {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'blocks' | 'properties' | 'preview' | 'integration'>('blocks');

  const selectedBlock = selectedBlockId 
    ? template.blocks.find(block => block.id === selectedBlockId) || null 
    : null;

  const handleAddBlock = (block: EmailBlock) => {
    const updatedTemplate = {
      ...template,
      blocks: [...template.blocks, block],
      updatedAt: new Date().toISOString()
    };
    onTemplateChange(updatedTemplate);
    setSelectedBlockId(block.id);
    setActiveTab('properties');
  };

  const handleUpdateBlock = (updatedBlock: EmailBlock) => {
    const updatedTemplate = {
      ...template,
      blocks: template.blocks.map(block => 
        block.id === updatedBlock.id ? updatedBlock : block
      ),
      updatedAt: new Date().toISOString()
    };
    onTemplateChange(updatedTemplate);
  };

  const handleDeleteBlock = (blockId: string) => {
    const updatedTemplate = {
      ...template,
      blocks: template.blocks.filter(block => block.id !== blockId),
      updatedAt: new Date().toISOString()
    };
    onTemplateChange(updatedTemplate);
    setSelectedBlockId(null);
  };

  const handleReorderBlocks = (newBlocks: EmailBlock[]) => {
    const updatedTemplate = {
      ...template,
      blocks: newBlocks,
      updatedAt: new Date().toISOString()
    };
    onTemplateChange(updatedTemplate);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 px-3 text-sm font-medium ${
              activeTab === 'blocks' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('blocks')}
          >
            Blocks
          </button>
          <button
            className={`flex-1 py-3 px-3 text-sm font-medium ${
              activeTab === 'integration' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('integration')}
          >
            Connect
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'blocks' && (
            <BlockLibrary onAddBlock={handleAddBlock} />
          )}
          {activeTab === 'integration' && (
            <IntegrationPanel />
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <EmailCanvas 
            blocks={template.blocks}
            selectedBlockId={selectedBlockId}
            onSelectBlock={setSelectedBlockId}
            onDeleteBlock={handleDeleteBlock}
            onReorderBlocks={handleReorderBlocks}
          />
        </div>
      </div>

      <div className="w-72 bg-white border-l border-gray-200 flex flex-col">
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 px-3 text-sm font-medium ${
              activeTab === 'properties' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('properties')}
          >
            Properties
          </button>
          <button
            className={`flex-1 py-3 px-3 text-sm font-medium ${
              activeTab === 'preview' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'properties' && selectedBlock && (
            <PropertyPanel 
              block={selectedBlock}
              onUpdateBlock={handleUpdateBlock}
            />
          )}
          {activeTab === 'properties' && !selectedBlock && (
            <div className="p-4 text-center text-gray-500">
              Select a block to edit its properties
            </div>
          )}
          {activeTab === 'preview' && (
            <PreviewPanel template={template} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailBuilder;