import React, { useState, useEffect } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('fsm-chatbot-visited');
    if (hasVisited) {
      setShowWelcome(false);
    }
  }, []);

  const handleStartChat = () => {
    localStorage.setItem('fsm-chatbot-visited', 'true');
    setShowWelcome(false);
  };

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="flex-1 flex flex-col">
            {showWelcome ? (
              <WelcomeScreen onStartChat={handleStartChat} />
            ) : (
              <ChatInterface />
            )}
          </main>
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;