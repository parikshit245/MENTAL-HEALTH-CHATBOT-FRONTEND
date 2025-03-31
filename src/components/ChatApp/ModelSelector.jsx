import { FaBolt } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
function ModelSelector({ selectedModel, setSelectedModel }) {
  return (
    <div className="relative bg-gray-800 rounded-xl flex gap-1 p-1 m-6 mx-auto">
      <button
        onClick={() => setSelectedModel('gpt-3')}
        className={`w-36 rounded-lg text-center font-bold text-white py-2 flex items-center justify-center gap-1 ${
          selectedModel === 'gpt-3' ? 'bg-blue-700 border border-gray-500 opacity-100' : 'opacity-50 hover:opacity-100'
        }`}
      >
        <FaBolt className="text-orange-500" /> GPT-3.5
        {selectedModel !== 'gpt-3' && (
          <div className="absolute top-full left-0 mt-2 p-4 bg-gray-800 rounded-xl text-white hidden group-hover:block">
            <p className="text-sm">Our fastest model, great for most every day tasks.</p>
            <p className="text-xs text-purple-300 mt-2">Available to Free and Plus users</p>
          </div>
        )}
      </button>
      <button
        onClick={() => setSelectedModel('gpt-4')}
        className={`w-36 rounded-lg text-center font-bold text-white py-2 flex items-center justify-center gap-1 ${
          selectedModel === 'gpt-4' ? 'bg-blue-700 border border-gray-500 opacity-100' : 'opacity-50 hover:opacity-100'
        }`}
      >
        <FaWandMagicSparkles className="text-magenta-500" /> GPT-4
        {selectedModel !== 'gpt-4' && (
          <div className="absolute top-full right-0 mt-2 p-4 bg-gray-800 rounded-xl text-white hidden group-hover:block">
            <p className="text-sm">Our most capable model, great for creative stuff.</p>
            <p className="text-xs text-purple-300 mt-2">Available for Plus users.</p>
          </div>
        )}
      </button>
    </div>
  );
}

export default ModelSelector;