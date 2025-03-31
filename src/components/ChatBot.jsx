import Header from './ChatApp/Header';
import Sidebar from './ChatApp/Sidebar';
import MainContent from './ChatApp/MainContent';

function ChatBot() {
  const handleNewChat = () => {
    document.querySelector('main').children[0].style.display = 'flex';
    document.querySelector('main').children[1].style.display = 'none';
  };

  const handleConversationSelect = () => {
    document.querySelector('main').children[0].style.display = 'none';
    document.querySelector('main').children[1].style.display = 'flex';
  };

  return (
    <div className="flex h-screen w-screen bg-main bg-[url('/5143888.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay font-sans">
      <Sidebar onNewChat={handleNewChat} onConversationSelect={handleConversationSelect} />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default ChatBot;