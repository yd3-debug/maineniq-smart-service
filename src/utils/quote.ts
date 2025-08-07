import { CONTACT } from "@/config/contact";

export const handleQuoteRequest = (service?: string, projectType?: string) => {
  let message = "";
  
  if (service) {
    message = `Hi! I'm interested in getting a quote for ${service}. Can you help me with pricing and availability?`;
  } else if (projectType) {
    message = `Hi! I'd like to request a quote for a ${projectType} project. Could you provide me with more details and pricing?`;
  } else {
    message = CONTACT.whatsapp.defaultMessage;
  }
  
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};

export const handleContactRedirect = () => {
  window.location.href = "/contact";
};