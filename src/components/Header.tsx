import React, { useState } from 'react';
import { Mail, Settings, UploadCloud, Save } from 'lucide-react';
import { downloadEmailHtml } from '../utils/emailExporter';
import { EmailTemplate } from '../types';

interface HeaderProps {
  templateName: string;
  template: EmailTemplate;
  onTemplateNameChange: (name: string) => void;
  onSaveTemplate: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  templateName, 
  template,
  onTemplateNameChange,
  onSaveTemplate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(templateName);

  const handleSave = () => {
    onTemplateNameChange(tempName);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setTempName(templateName);
      setIsEditing(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Mail className="h-8 w-8 text-purple-600 mr-2" />
            <h1 className="text-lg font-semibold text-gray-900">E-mail Builder</h1>
          </div>
          
          <div className="flex items-center">
            {isEditing ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSave}
                  className="ml-2 px-2 py-1 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <h2
                onClick={() => setIsEditing(true)}
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-purple-600 transition mr-4"
              >
                {templateName}
              </h2>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onSaveTemplate}
              className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center"
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </button>
            <button 
              onClick={() => downloadEmailHtml(template)}
              className="px-3 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center"
            >
              <UploadCloud className="h-4 w-4 mr-1" />
              Export
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;