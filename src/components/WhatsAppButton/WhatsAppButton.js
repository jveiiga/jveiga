import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingButton } from "./WhatsAppButton.styled";


const WhatsAppButton = () => {
  return (
    <FloatingButton
       id="btn_whatsapp"
      href="https://wa.me/5511915181487"
      target="_blank"
      rel="noreferrer"
      variant="whatsapp"
      aria-label="Fale conosco no WhatsApp"
    >
     <FaWhatsapp size={26} />
    </FloatingButton>
  );
};

export default WhatsAppButton;
