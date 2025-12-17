import { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [messages, setMessages] = useState([]); // Store chat history
    const [theme, setTheme] = useState("dark"); // Default dark mode

    // Load theme from local storage on mount
    useState(() => {
        const savedTheme = localStorage.getItem("nova-theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        } else {
            document.body.className = "dark";
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("nova-theme", newTheme);
        document.body.className = newTheme;
    };

    /**
     * Start a new chat session
     */
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setInput("");
        setMessages([]);
    };

    /**
     * Parse simple markdown styles
     */
    const formatResponse = (response) => {
        let formatted = response;

        // Code blocks
        formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

        // Inline code
        formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        // Line breaks
        formatted = formatted.replace(/\n/g, '<br />');

        return formatted;
    };

    /**
     * Send prompt to Gemini API and display response
     */
    const onSent = async (prompt) => {
        const userPrompt = prompt !== undefined ? prompt : input;

        if (!userPrompt.trim()) return;

        setInput("");
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(userPrompt);

        // Add User Message
        setMessages(prev => [...prev, { type: "user", text: userPrompt }]);

        // Add "Thinking" placeholder or just wait (we use 'loading' state for dots)
        // Optionally update history sidebar
        if (!prevPrompts.includes(userPrompt)) {
            setPrevPrompts(prev => [...prev, userPrompt]);
        }

        try {
            const response = await runChat(userPrompt);
            const formattedResponse = formatResponse(response);

            // Add Bot Message
            setMessages(prev => [...prev, { type: "bot", text: formattedResponse }]);

        } catch (error) {
            console.error("Error in onSent:", error);
            setMessages(prev => [...prev, {
                type: "bot",
                text: "<span style='color: #ff4444;'>Error: Failed to fetch response.</span>"
            }]);
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        messages,
        theme,
        toggleTheme
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

