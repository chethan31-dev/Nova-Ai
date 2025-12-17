import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context.jsx';

const Main = () => {
  const {
    onSent,
    setInput,
    input,
    showResult,
    loading,
    messages,
    theme,
    toggleTheme
  } = React.useContext(Context);

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  return (
    <div className="main">
      {/* Top Navbar */}
      <div className="nav">
        <p>Nova AI Assistant</p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <img src={assets.user_icon} alt="User profile" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {!showResult ? (
          <>
            {/* Greeting Section */}
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>Your AI-powered assistant. How can I help you today?</p>
            </div>

            {/* Suggestion Cards */}
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Travel suggestions" />
              </div>

              <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Team activities" />
              </div>

              <div className="card" onClick={() => handleCardClick("Briefly summarise this concept: urban planning")}>
                <p>Briefly summarise this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Concept explanation" />
              </div>

              <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code improvement" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.type === 'bot' && <img src={assets.gemini_icon} alt="AI" />}
                <div className="chat-bubble">
                  {msg.type === 'bot' ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>
                {msg.type === 'user' && <img src={assets.user_icon} alt="User" />}
              </div>
            ))}

            {loading && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Bottom Prompt Input */}
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                onSent();
              }
            }}
          />
          <div>
            <img src={assets.gallery_icon} alt="Upload image" />
            <img src={assets.mic_icon} alt="Voice input" />
            {input && <img onClick={() => onSent()} src={assets.send_icon} alt="Send message" />}
          </div>
        </div>

        <p className="bottom-info">
          Powered by Gemini AI • Nova AI Assistant
        </p>
      </div>
    </div>
  );
};

export default Main;

