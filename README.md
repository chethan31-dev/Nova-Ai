# Nova AI Assistant 🤖

A modern, AI-powered conversational assistant built with **React**, **Vite**, and **Google's Gemini AI**. This project showcases professional React development practices, clean code architecture, and responsive UI/UX design.

![Nova AI Assistant](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-Powered-4285F4?style=for-the-badge&logo=google&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast & Efficient** - Built with Vite for lightning-fast development
- 🎯 **Type-Safe** - Proper error handling and loading states
- ♿ **Accessible** - Semantic HTML and keyboard navigation support
- 🎭 **Animated Responses** - Typing effect for AI responses
- 💾 **Conversation History** - Recent prompts displayed in sidebar

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm 10.0 or higher
- A valid Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gemini-cloune
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Add your Gemini API key to `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔑 Getting a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key
5. Paste it into your `.env` file

### Important Notes:
- Make sure the **Generative Language API** is enabled in your Google Cloud Console
- The API key must have access to Gemini models
- Free tier includes generous usage limits

### Troubleshooting API Issues

If you see a `404 models/gemini-xxx is not found` error:

1. **Verify your API key** is correctly set in `.env`
2. **Check API is enabled**: Visit [Google Cloud Console](https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com)
3. **Restart the dev server** after changing `.env`
4. **Try a different model**: Edit `src/config/gemini.js` and try:
   - `gemini-pro`
   - `gemini-1.5-flash`
   - `gemini-1.5-pro`

## 📁 Project Structure

```
gemini-cloune/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── Main/       # Main chat interface
│   │   └── Sidebar/    # Navigation sidebar
│   ├── config/         # Configuration files
│   │   └── gemini.js   # Gemini API setup
│   ├── context/        # React Context for state
│   │   └── Context.jsx # Global state management
│   ├── App.jsx         # Root component
│   ├── App.css         # App-level styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .env                # Environment variables (not in git)
├── .env.example        # Example env file
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Features Breakdown

### 1. Intelligent Chat Interface
- Send prompts to Gemini AI
- Receive formatted responses with typing animation
- Error handling with user-friendly messages

### 2. Suggestion Cards
- Pre-defined prompts for quick access
- Click to auto-fill input
- Responsive grid layout

### 3. Sidebar Navigation
- Toggle expand/collapse
- Recent conversation history
- Quick access to settings

### 4. Responsive Design
- **Mobile** (≤ 480px): Single column, compact layout
- **Tablet** (≤ 768px): Optimized touch targets
- **Desktop** (> 768px): Full sidebar, grid layout

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Technologies Used

- **React 19.2** - UI library
- **Vite 7.2** - Build tool
- **Google Generative AI SDK** - AI integration
- **CSS3** - Styling (no frameworks)
- **ESLint** - Code quality

## 🔒 Security Best Practices

- ✅ API keys stored in environment variables
- ✅ `.env` file in `.gitignore`
- ✅ No sensitive data in client-side code
- ✅ Proper error handling without exposing internals

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a portfolio project, but suggestions are welcome!

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 👨‍💻 Author

**Your Name**
- Portfolio: [your-portfolio.com]
- LinkedIn: [your-linkedin]
- GitHub: [@your-github]

## 🙏 Acknowledgments

- Google Gemini AI for the powerful language model
- React team for the amazing framework
- Vite team for the blazing-fast build tool

---

**⭐ If you found this project helpful, please give it a star!**

## 📸 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

### AI Response
![AI Response](screenshots/response.png)

---

Made with ❤️ and React
