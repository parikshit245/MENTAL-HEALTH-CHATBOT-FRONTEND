import { useState } from 'react';
import ModelSelector from './ModelSelector';
import MessageForm from './MessageForm';

function MainContent() {
  const [view, setView] = useState('new-chat');
  const [selectedModel, setSelectedModel] = useState('gpt-3');

  return (
    <main className="flex-1 flex flex-col justify-between pt-16">
      {view === 'new-chat' && (
        <div className="flex flex-col items-center">
          <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
          <div className="text-silver-500 font-bold text-3xl z-10">Empathetic AI</div>
        </div>
      )}
      {view === 'conversation' && (
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gray-900 text-gray-200 text-center p-6 border-b border-gray-700 text-sm">
            <i className="fa fa-bolt mr-2 text-orange-500" /> Default (GPT-3.5)
          </div>
        </div>
      )}
      <MessageForm />
    </main>
  );
}

export default MainContent;