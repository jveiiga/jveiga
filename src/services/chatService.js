const CHAT_WEBHOOK = process.env.REACT_APP_N8N_CHAT_WEBHOOK;

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
