
async function test() {
    try {
        const response = await fetch("https://nova-ai-backend-6sxn.onrender.com/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: "Testing Gemini API" })
        });

        console.log("Response Status:", response.status);
        const data = await response.json();
        console.log("Response Body:");
        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("Test Request Failed:", error);
    }
}

test();
