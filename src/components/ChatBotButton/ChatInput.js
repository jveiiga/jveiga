import { useState } from "react";
import { sendMessage } from "../../services/chatService";
import { InputArea } from "./ChatModal.styled";

const ChatInput = ({ sessionId, onBotReply, onUserMessage }) => {
  // Linha corrigida: use a desestruturação de array []
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    onUserMessage(text);
    setText("");

    const botMessageText = await sendMessage(text, sessionId);
    onBotReply(botMessageText);
  };

  return (
    <InputArea>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Enviar</button>
    </InputArea>
  );
};

export default ChatInput;
