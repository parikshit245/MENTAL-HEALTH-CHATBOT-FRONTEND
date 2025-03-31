import { useState } from 'react';
import { FaPlus, FaChevronLeft, FaEdit, FaTrash, FaEllipsisH } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

function Sidebar({ onNewChat, onConversationSelect }) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const conversations = [
    { title: "This is a conversation title", time: "Today", active: true },
    { title: "This is a conversation title", time: "Yesterday" },
    { title: "This is a very super long conversation title that doesn't fit", time: "Yesterday" },
    // Add more conversations as needed
  ];

  return (
    <nav className={`bg-gray-800 w-64 p-2 flex flex-col justify-between transition-all duration-200 ${isHidden ? '-ml-64' : ''}`}>
      <div className="flex-1">
        <div className="flex gap-2 mb-2">
          <button 
            onClick={onNewChat}
            className="flex-1 flex items-center gap-3 border border-gray-500 rounded p-3 text-white hover:bg-magenta-500"
          >
            <FaPlus /> New chat
          </button>
          <button 
            onClick={() => setIsHidden(!isHidden)}
            className={`border border-gray-500 rounded p-3 text-white hover:bg-magenta-500 ${isHidden ? 'rotate-180' : ''}`}
          >
            <FaChevronLeft />
          </button>
        </div>
        <ul className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {["Today", "Yesterday", "Previous 7 days"].map((group) => (
            <>
              <li className="text-yellow-400 text-sm font-bold p-3">{group}</li>
              {conversations.filter(c => c.time === group).map((conv, index) => (
                <li key={index} className={`relative group ${conv.active ? 'bg-gray-900' : ''}`}>
                  <button 
                    onClick={() => onConversationSelect()}
                    className="w-full flex items-center gap-2 p-3 text-white text-sm truncate hover:bg-magenta-500"
                  >
                    <FaMessage /> {conv.title}
                  </button>
                  <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-r from-transparent to-gray-800 group-hover:to-magenta-500 group-hover:w-20" />
                  <div className="absolute right-2 top-0 hidden group-hover:flex gap-1 p-3">
                    <button className="text-white opacity-70 hover:opacity-100"><FaEdit /></button>
                    <button className="text-white opacity-70 hover:opacity-100"><FaTrash /></button>
                  </div>
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-500 relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between p-3 text-white hover:bg-magenta-500"
        >
          <span className="flex items-center gap-2">
            <i className="bg-cyan-400 text-white rounded px-2 py-1 text-sm">u</i>
            username
          </span>
          <FaEllipsisH className="opacity-70" />
        </button>
        <ul 
          className={`absolute bottom-full left-0 w-full bg-black rounded-lg transition-all duration-200 ${
            isMenuOpen ? 'opacity-100 mb-2' : 'opacity-0 -translate-y-full hidden'
          }`}
        >
          <li><button className="w-full text-left p-3 hover:bg-blue-700 rounded-t-lg">My plan</button></li>
          <li><button className="w-full text-left p-3 hover:bg-blue-700">Custom instructions</button></li>
          <li><button className="w-full text-left p-3 hover:bg-blue-700">Settings & Beta</button></li>
          <li><button className="w-full text-left p-3 hover:bg-blue-700 border-t border-gray-600 rounded-b-lg">Log out</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;