import React, { useState } from 'react';
import EmailBuilder from './components/EmailBuilder';
import Header from './components/Header';
import { EmailTemplate } from './types';

function App() {
  const [currentTemplate, setCurrentTemplate] = useState<EmailTemplate>({
    id: '1',
    name: 'New Email Template',
    subject: 'Check out our latest products!',
    blocks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const handleSaveTemplate = () => {
    // In a real app, this would save to a backend
    const savedTemplates = JSON.parse(localStorage.getItem('emailTemplates') || '[]');
    const existingIndex = savedTemplates.findIndex((t: EmailTemplate) => t.id === currentTemplate.id);
    
    if (existingIndex >= 0) {
      savedTemplates[existingIndex] = currentTemplate;
    } else {
      savedTemplates.push(currentTemplate);
    }
    
    localStorage.setItem('emailTemplates', JSON.stringify(savedTemplates));
    alert('Template saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        templateName={currentTemplate.name}
        template={currentTemplate}
        onTemplateNameChange={(name) => 
          setCurrentTemplate({...currentTemplate, name, updatedAt: new Date().toISOString()})
        }
        onSaveTemplate={handleSaveTemplate}
      />
      <main className="flex-1 overflow-hidden">
        <EmailBuilder 
          template={currentTemplate}
          onTemplateChange={(template) => setCurrentTemplate(template)}
        />
      </main>
    </div>
  );
}

export default App;