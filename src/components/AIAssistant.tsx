import React, { useState } from 'react';
import { Sparkles, Image, Type, Loader } from 'lucide-react';
import { generateContent, AIGenerationProps } from '../services/ai';

interface AIAssistantProps {
  onContentGenerated: (content: string) => void;
  type: 'copy' | 'image';
  placeholder?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ 
  onContentGenerated, 
  type,
  placeholder 
}) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsLoading(true);
    try {
      const props: AIGenerationProps = {
        prompt,
        type,
        context: {
          industry: 'ecommerce',
          tone: 'professional'
        }
      };

      const content = await generateContent(props);
      if (content) {
        onContentGenerated(content);
        setPrompt('');
      }
    } catch (error) {
      console.error('Generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-2">
        {type === 'copy' ? (
          <Type className="h-4 w-4 text-purple-600" />
        ) : (
          <Image className="h-4 w-4 text-purple-600" />
        )}
        <span className="text-xs font-medium text-gray-700">
          AI Assistant
        </span>
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={placeholder || `Describe the ${type} you want to generate...`}
          className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt}
          className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          {isLoading ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          <span className="text-sm">Generate</span>
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;