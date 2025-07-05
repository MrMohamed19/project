export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'success' | 'warning' | 'error';
}

export interface ChatResponse {
  message: string;
  type?: 'text' | 'success' | 'warning' | 'error';
  suggestions?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}