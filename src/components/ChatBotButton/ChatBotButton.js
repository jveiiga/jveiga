// import { FaComments } from "react-icons/fa";
import { FloatingChatButton } from "./ChatBotButton.styled";

const ChatButton = ({ onClick }) => (
    <FloatingChatButton
      id="btn_chatbot"
      onClick={onClick}
      aria-label="Abrir chat"
    >
      {/* <FaComments size={22} /> */}
    </FloatingChatButton>
  );
  
  export default ChatButton;