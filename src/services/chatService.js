const isProduction = window.location.hostname !== 'localhost';

const CHAT_WEBHOOK = isProduction 
  ? "https://jveiga.app.n8n.cloud/webhook/12dd23ea-01bd-49d6-99cc-e8066280c6c1"
  : "/webhook/12dd23ea-01bd-49d6-99cc-e8066280c6c1";

export const sendMessage = async (chatInput, sessionId) => {
    const response = await fetch(CHAT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatInput,
        sessionId,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Erro ao comunicar com o n8n");
    }

    // Leia a resposta como texto simples
    const resultText = await response.text(); 
    console.log("Resposta do N8N:", resultText);
    console.log("SESSION ID:", sessionId);
    
    // Retorne o texto puro diretamente
    return resultText;
};
