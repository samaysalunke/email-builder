import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const IntegrationPanel: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<'klaviyo' | 'postscript' | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = (provider: 'klaviyo' | 'postscript') => {
    setSelectedProvider(provider);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey) {
      setIsConnected(true);
    }
  };

  const handleDisconnect = () => {
    setApiKey('');
    setIsConnected(false);
  };

  if (isConnected && selectedProvider) {
    return (
      <div className="p-4">
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              {selectedProvider === 'klaviyo' ? (
                <Mail className="h-5 w-5 text-green-600" />
              ) : (
                <MessageSquare className="h-5 w-5 text-green-600" />
              )}
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                Connected to {selectedProvider === 'klaviyo' ? 'Klaviyo' : 'Postscript'}
              </h3>
              <p className="text-xs text-green-700 mt-1">
                Your account is successfully connected
              </p>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleDisconnect}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Disconnect
        </button>
      </div>
    );
  }

  if (selectedProvider) {
    return (
      <div className="p-4">
        <button
          onClick={() => setSelectedProvider(null)}
          className="text-sm text-purple-600 hover:text-purple-800 flex items-center mb-4"
        >
          ← Back to providers
        </button>
        
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Connect to {selectedProvider === 'klaviyo' ? 'Klaviyo' : 'Postscript'}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              API Key
            </label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Enter your API key"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              You can find your API key in your {selectedProvider === 'klaviyo' ? 'Klaviyo' : 'Postscript'} account settings.
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Connect
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Choose a Provider
      </h3>
      
      <div className="space-y-3">
        <button
          onClick={() => handleConnect('klaviyo')}
          className="w-full p-4 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <Mail className="h-6 w-6 text-purple-600 mr-3" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Klaviyo</h4>
            <p className="text-xs text-gray-500 mt-1">
              Connect to your Klaviyo account to send email campaigns
            </p>
          </div>
        </button>
        
        <button
          onClick={() => handleConnect('postscript')}
          className="w-full p-4 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <MessageSquare className="h-6 w-6 text-purple-600 mr-3" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Postscript</h4>
            <p className="text-xs text-gray-500 mt-1">
              Connect to your Postscript account to send SMS campaigns
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default IntegrationPanel;