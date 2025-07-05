import { ChatResponse, FAQItem } from '../types/chat';
import { faqData } from '../data/faqData';

class ChatbotService {
  private faqItems: FAQItem[] = faqData;

  async getResponse(userInput: string): Promise<ChatResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const input = userInput.toLowerCase().trim();
    
    // Find matching FAQ item
    const matchingItem = this.findBestMatch(input);
    
    if (matchingItem) {
      return {
        message: matchingItem.answer,
        type: 'text'
      };
    }

    // Default response for unrecognized queries
    return {
      message: `Je ne trouve pas d'information spécifique pour "${userInput}". 

Voici quelques sujets sur lesquels je peux vous aider :
• Programmes d'études et cursus
• Procédures d'inscription
• Horaires et calendrier académique
• Vie étudiante et clubs
• Démarches administratives
• Contact et localisation

Pourriez-vous reformuler votre question ou choisir un des sujets ci-dessus ?`,
      type: 'warning'
    };
  }

  private findBestMatch(input: string): FAQItem | null {
    let bestMatch: FAQItem | null = null;
    let bestScore = 0;

    for (const item of this.faqItems) {
      const score = this.calculateMatchScore(input, item);
      if (score > bestScore && score > 0.3) {
        bestScore = score;
        bestMatch = item;
      }
    }

    return bestMatch;
  }

  private calculateMatchScore(input: string, item: FAQItem): number {
    const inputWords = input.split(/\s+/);
    const allKeywords = [...item.keywords, ...item.question.toLowerCase().split(/\s+/)];
    
    let matches = 0;
    
    for (const word of inputWords) {
      for (const keyword of allKeywords) {
        if (keyword.includes(word) || word.includes(keyword)) {
          matches++;
          break;
        }
      }
    }
    
    return matches / inputWords.length;
  }

  getCategories(): string[] {
    const categories = new Set(this.faqItems.map(item => item.category));
    return Array.from(categories);
  }

  getFAQByCategory(category: string): FAQItem[] {
    return this.faqItems.filter(item => item.category === category);
  }
}

export const chatbotService = new ChatbotService();