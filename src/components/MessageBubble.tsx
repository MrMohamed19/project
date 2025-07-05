import React from 'react';
import { Bot, User, Clock, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const timestamp = new Date(message.timestamp).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const getMessageIcon = () => {
    if (message.type === 'success') return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (message.type === 'warning') return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    if (message.type === 'error') return <AlertCircle className="h-4 w-4 text-red-500" />;
    return null;
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-xs lg:max-w-2xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
            isUser 
              ? 'bg-gradient-to-br from-orange-500 to-blue-600' 
              : 'bg-gradient-to-br from-gray-100 to-gray-200'
          }`}>
            {isUser ? (
              <User className="h-5 w-5 text-white" />
            ) : (
              <Bot className="h-5 w-5 text-gray-700" />
            )}
          </div>
        </div>

        {/* Message Content */}
        <div className={`rounded-2xl px-4 py-3 shadow-md ${
          isUser 
            ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white' 
            : 'bg-white text-gray-900 border border-gray-200'
        }`}>
          <div className="flex items-start space-x-2">
            <div className="flex-1">
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
              
              {/* Metadata */}
              <div className={`flex items-center space-x-2 mt-2 ${
                isUser ? 'text-orange-100' : 'text-gray-500'
              }`}>
                <Clock className="h-3 w-3" />
                <span className="text-xs">{timestamp}</span>
                {getMessageIcon()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};