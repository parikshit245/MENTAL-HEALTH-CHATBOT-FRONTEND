import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function MessageForm() {
  const [message, setMessage] = useState('');

  const handleKeyUp = (e) => {
    e.target.style.height = 'auto';
    let height = e.target.scrollHeight + 2;
    if (height > 200) height = 200;
    e.target.style.height = `${height}px`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-12 pb-8 text-center shadow-[0_0_50px_rgba(68,48,103,0.9)]">
      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Send a message"
          className="w-full bg-blue-700 rounded-xl border border-gray-700 p-4 pr-20 text-white resize-none outline-none shadow-lg"
          rows="1"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded p-2 text-white hover:bg-orange-600">
          <FaPaperPlane />
        </button>
      </div>
      <div className="mt-3 text-gray-300 text-xs">
        This is a ChatGPT UI Clone for personal use and educational purposes only.
      </div>
    </div>
  );
}

export default MessageForm;