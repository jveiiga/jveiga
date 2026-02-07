import { useState } from "react";
import ChatInput from "./ChatInput";
import {
  CloseButton,
  ContainerDateChat,
  ContainerNameImage,
  Header,
  ImageAvatar,
  Message,
  MessageBubble,
  Messages,
  Modal,
  Overlay,
  UserIcon,
} from "./ChatModal.styled";
import { v4 as uuidv4 } from "uuid";
import avatar from "../../assets/images/avatar.png";
import { FaUser } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
const ChatModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [sessionId] = useState(uuidv4());

  if (!open) return null;

  const handleUserMessage = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
  };

  const handleBotReply = (text) => {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  };

  return (
    <>
      <Overlay />

      <Modal>
        <Header>
          <ContainerDateChat>
            <ContainerNameImage>
              <ImageAvatar src={avatar} alt="Avatar" />
              <div>
                <p>Jeff - Atendente virtual</p>
                <p>Online</p>
              </div>
            </ContainerNameImage>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ContainerDateChat>
        </Header>
        <Messages>
          {messages.map((msg, i) => (
            <Message key={i} isUser={msg.from === "user"}>
              {msg.from === "bot" ? (
                <ImageAvatar src={avatar} alt="Bot" />
              ) : (
                <UserIcon>
                  <FaUser />
                </UserIcon>
              )}

              <MessageBubble isUser={msg.from === "user"}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </MessageBubble>
            </Message>
          ))}
        </Messages>
        <ChatInput
          sessionId={sessionId}
          onUserMessage={handleUserMessage}
          onBotReply={handleBotReply}
        />
      </Modal>
    </>
  );
};

export default ChatModal;
