import React from 'react';
import { X, MessageCircle, BookOpen, Users, FileText, Settings, HelpCircle, Trophy, GraduationCap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <MessageCircle className="h-5 w-5" />, label: "Nouvelle conversation", active: true },
    { icon: <BookOpen className="h-5 w-5" />, label: "Programmes d'études" },
    { icon: <Trophy className="h-5 w-5" />, label: "Concours d'accès" },
    { icon: <GraduationCap className="h-5 w-5" />, label: "Masters & Doctorats" },
    { icon: <Users className="h-5 w-5" />, label: "Vie étudiante" },
    { icon: <FileText className="h-5 w-5" />, label: "Démarches administratives" },
    { icon: <HelpCircle className="h-5 w-5" />, label: "FAQ" },
    { icon: <Settings className="h-5 w-5" />, label: "Paramètres" }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out border-r border-gray-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu FSM</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4 lg:mt-0">
          <div className="px-4 py-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Navigation
            </h3>
          </div>
          
          <ul className="mt-2 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-200 ${
                    item.active 
                      ? 'bg-gradient-to-r from-orange-100 to-blue-100 text-orange-700 border-l-4 border-orange-500' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                  }`}
                >
                  <div className={item.active ? 'text-orange-600' : ''}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-bold">FSM</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">FSM Meknès</p>
              <p className="text-xs text-gray-600">Assistant Intelligent v2.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};