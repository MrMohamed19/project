## Pizza Project : mohdammed kharbouche

This is a modern web application for a pizza ordering chatbot interface, built with React, TypeScript, Vite, and Tailwind CSS.

### Features

- **Chatbot Interface**: Interact with a smart pizza ordering assistant that can answer FAQs, take orders, and provide recommendations.
- **Real-time Messaging**: Send and receive messages in a chat-like interface with message bubbles and typing indicators.
- **Quick Actions**: Use quick action buttons for common tasks like viewing the menu, tracking orders, or getting help.
- **Sidebar Navigation**: Access different sections of the app easily through a sidebar.
- **Welcome Screen**: Friendly welcome screen to greet users and introduce the chatbot.
- **FAQ Support**: Frequently asked questions are available for instant help.
- **Responsive Design**: Fully responsive UI using Tailwind CSS for seamless experience on all devices.

### Project Structure

```
src/
  App.tsx                # Main app component
  index.css               # Global styles (Tailwind)
  main.tsx                # App entry point
  components/             # UI components
    ChatInterface.tsx     # Chat UI and logic
    Header.tsx            # App header
    MessageBubble.tsx     # Chat message bubbles
    QuickActions.tsx      # Quick action buttons
    Sidebar.tsx           # Sidebar navigation
    TypingIndicator.tsx   # Shows when bot is typing
    WelcomeScreen.tsx     # Welcome/landing screen
  contexts/
    ChatContext.tsx       # React context for chat state
  data/
    faqData.ts            # FAQ data for chatbot
  services/
    chatbotService.ts     # Handles chatbot logic and API
  types/
    chat.ts               # TypeScript types for chat
```

### How to Run

1. **Install dependencies**:
   ```sh
   npm install
   ```
2. **Start the development server**:
   ```sh
   npm run dev
   ```
3. **Open in browser**: Visit [http://localhost:5173](http://localhost:5173)

### Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Functionalities

- **Order Pizza**: Place pizza orders through the chatbot.
- **Get Recommendations**: Ask for pizza suggestions based on preferences.
- **Track Orders**: Check the status of your order.
- **FAQ Support**: Get instant answers to common questions.
- **Quick Actions**: Use buttons for fast navigation and actions.
- **Chat History**: View previous messages in the chat.

### Folder Overview

- `components/`: All UI components for the chat and navigation.
- `contexts/`: React context for managing chat state.
- `data/`: Static data such as FAQs.
- `services/`: Business logic and chatbot service.
- `types/`: TypeScript type definitions.

### License

MIT
