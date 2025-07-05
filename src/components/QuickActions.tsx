import React from 'react';
import { BookOpen, Calendar, FileText, Users, MapPin, Phone, Trophy, GraduationCap } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  const actions = [
    { 
      icon: <BookOpen className="h-4 w-4" />, 
      label: "Programmes", 
      query: "Quels sont les programmes et filières disponibles à la FSM ?" 
    },
    { 
      icon: <Trophy className="h-4 w-4" />, 
      label: "Concours", 
      query: "Informations sur les concours d'accès et examens" 
    },
    { 
      icon: <FileText className="h-4 w-4" />, 
      label: "Inscription", 
      query: "Comment s'inscrire à la Faculté des Sciences Meknès ?" 
    },
    { 
      icon: <GraduationCap className="h-4 w-4" />, 
      label: "Masters", 
      query: "Quels sont les masters disponibles à la FSM ?" 
    },
    { 
      icon: <Users className="h-4 w-4" />, 
      label: "Vie Étudiante", 
      query: "Informations sur la vie étudiante et les activités" 
    },
    { 
      icon: <Calendar className="h-4 w-4" />, 
      label: "Calendrier", 
      query: "Calendrier universitaire et dates importantes" 
    },
    { 
      icon: <MapPin className="h-4 w-4" />, 
      label: "Localisation", 
      query: "Où se trouve la Faculté des Sciences Meknès ?" 
    },
    { 
      icon: <Phone className="h-4 w-4" />, 
      label: "Contact", 
      query: "Comment contacter l'administration de la FSM ?" 
    }
  ];

  return (
    <div className="border-t border-gray-200 p-4 bg-gradient-to-r from-orange-50 to-blue-50">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Questions fréquentes</h3>
      <div className="flex flex-wrap gap-2">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => onActionClick(action.query)}
            className="inline-flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:border-orange-300 transition-all duration-200 shadow-sm"
          >
            <div className="text-orange-600">
              {action.icon}
            </div>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};