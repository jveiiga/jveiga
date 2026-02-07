import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9998;
`;

export const Modal = styled.div`
  position: fixed;
  bottom: 140px;
  right: 20px;
  width: 320px;
  height: 420px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  background: #cb342b;
  color: #fff;
  border-radius: 5px 5px 0 0;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  font-weight: 600;
`;

export const ImageAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  background-color: rgb(225, 114, 109);
`;

export const ContainerDateChat = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerNameImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Messages = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;

  ${({ isUser }) =>
    isUser &&
    `
      flex-direction: row-reverse;
    `}
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(88, 99, 116);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-word;

  background: ${({ isUser }) => (isUser ? "#93C5FD" : "#eee")};
  color: #000;

  ${({ isUser }) =>
    isUser
      ? `
        border-top-right-radius: 4px;
        margin-left: auto;
      `
      : `
        border-top-left-radius: 4px;
        margin-right: auto;
      `}

  p {
    margin: 0; /* Remove margens de parágrafos que criam buracos brancos */
  }

  p + p {
    margin-top: 8px; /* Adiciona espaço apenas entre parágrafos distintos */
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px; /* Recuo necessário para a bolinha da lista aparecer dentro */
  }

  li {
    margin-bottom: 4px;
  }

  strong {
    font-weight: 700;
  }
`;

export const InputArea = styled.div`
  display: flex;
  padding: 8px;
  border-top: 1px solid #eee;
  gap: 8px;

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    background: #f7f7f7;
  }

  button {
    background: #cb342b;
    border: none;
    color: #fff;
    padding: 0 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  padding: 3px;
  border-radius: 50%;
  border-color: #fff;
  color: #fff;
  cursor: pointer;
`;
