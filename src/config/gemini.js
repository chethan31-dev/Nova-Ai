/**
 * Frontend Gemini helper
 * Calls backend API (Node.js), NOT Google directly
 */
export async function runChat(prompt) {
  const response = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Backend API failed");
  }

  const data = await response.json();
  return data.reply;
}
