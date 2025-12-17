import { useEffect, useState } from 'react';
import { runChat } from './config/gemini';

const TestGemini = () => {
    const [response, setResponse] = useState('Waiting...');
    const [error, setError] = useState(null);

    useEffect(() => {
        const testApi = async () => {
            try {
                const text = await runChat("Hello there");
                setResponse(text);
            } catch (err) {
                setError(err.toString());
            }
        };
        testApi();
    }, []);

    return (
        <div style={{ padding: '20px', color: 'black', background: 'white' }}>
            <h1>Gemini API Test</h1>
            {error && <div style={{ color: 'red' }} id="test-error">Error: {error}</div>}
            <div id="test-response">Response: {response}</div>
        </div>
    );
};

export default TestGemini;
