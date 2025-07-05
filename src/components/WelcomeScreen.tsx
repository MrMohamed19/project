import React from 'react';
import { MessageCircle, BookOpen, Users, HelpCircle, Clock, Globe, Trophy, FileText } from 'lucide-react';

interface WelcomeScreenProps {
  onStartChat: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat }) => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Programmes & Filières",
      description: "Informations sur tous les cursus, licences et masters disponibles"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Concours & Examens",
      description: "Dates, modalités et résultats des concours d'accès"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Inscriptions & Démarches",
      description: "Procédures d'inscription, documents requis et délais"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vie Étudiante",
      description: "Clubs, activités, bourses et services aux étudiants"
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Support Administratif",
      description: "Aide pour toutes vos démarches administratives"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Disponible 24/7",
      description: "Réponses instantanées à toute heure"
    }
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full mb-6 shadow-lg">
            <MessageCircle className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">FSM Assistant</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Votre assistant virtuel intelligent pour la <strong>Faculté des Sciences de Meknès</strong>. 
            Obtenez des réponses instantanées sur les programmes, concours, inscriptions et tous les services universitaires.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Globe className="h-4 w-4 text-orange-500" />
              <span>Français • العربية • English</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Service 24h/24</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg mb-4">
                <div className="text-orange-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onStartChat}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Commencer la conversation</span>
          </button>
          
          <p className="text-sm text-gray-500 mt-6">
            Posez vos questions sur les études, concours, inscriptions et services de la FSM
          </p>
        </div>
      </div>
    </div>
  );
};