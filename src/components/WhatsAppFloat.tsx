import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT.whatsapp.number;
    const message = CONTACT.whatsapp.defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 shadow-elegant z-40 flex items-center justify-center p-0"
      aria-label={`Contact us on WhatsApp at ${CONTACT.phones.emergency}`}
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
    </Button>
  );
};

export default WhatsAppFloat;