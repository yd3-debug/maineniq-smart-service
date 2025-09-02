import { FaWhatsapp, FaPhone, FaEnvelope, FaCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { CONTACT } from "@/config/contact";
import { useState } from "react";
import { toast } from "sonner";

const WhatsAppFloat = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT.whatsapp.number;
    const message = CONTACT.whatsapp.defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    if (isMobile) {
      // Mobile: Direct WhatsApp link works well
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
    } else {
      // Desktop: Try WhatsApp Web with error handling
      const newWindow = window.open(whatsappUrl, "_blank");
      setTimeout(() => {
        if (newWindow && newWindow.closed) {
          toast.error("WhatsApp Web couldn't open. Please try calling us directly.");
        }
      }, 3000);
      setIsOpen(false);
    }
  };

  const handlePhoneClick = () => {
    window.open(`tel:${CONTACT.phones.emergencyTel}`, "_self");
    setIsOpen(false);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${CONTACT.email}`, "_blank");
    setIsOpen(false);
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.phones.emergency);
      toast.success("Phone number copied to clipboard!");
      setIsOpen(false);
    } catch (err) {
      toast.error("Failed to copy phone number");
    }
  };

  if (isMobile) {
    // Mobile: Simple WhatsApp button (works reliably)
    return (
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 shadow-elegant z-40 flex items-center justify-center p-0"
        aria-label={`Contact us on WhatsApp at ${CONTACT.phones.emergency}`}
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </Button>
    );
  }

  // Desktop: Multi-option contact widget
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-elegant z-40 flex items-center justify-center p-0"
          aria-label="Contact us"
        >
          <FaPhone className="w-5 h-5 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        side="left" 
        align="end" 
        className="w-64 p-4 mr-4"
        sideOffset={8}
      >
        <div className="space-y-3">
          <h3 className="font-semibold text-sm mb-3">Contact MaintenIQ</h3>
          
          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            className="w-full justify-start gap-3 h-12"
          >
            <FaWhatsapp className="w-4 h-4 text-whatsapp" />
            <div className="text-left">
              <div className="font-medium">WhatsApp</div>
              <div className="text-xs text-muted-foreground">Chat with us</div>
            </div>
          </Button>

          <Button
            onClick={handlePhoneClick}
            variant="outline"
            className="w-full justify-start gap-3 h-12"
          >
            <FaPhone className="w-4 h-4 text-primary" />
            <div className="text-left">
              <div className="font-medium">Call Now</div>
              <div className="text-xs text-muted-foreground">{CONTACT.phones.emergency}</div>
            </div>
          </Button>

          <Button
            onClick={handleCopyPhone}
            variant="outline"
            className="w-full justify-start gap-3 h-12"
          >
            <FaCopy className="w-4 h-4" />
            <div className="text-left">
              <div className="font-medium">Copy Number</div>
              <div className="text-xs text-muted-foreground">Copy to clipboard</div>
            </div>
          </Button>

          <Button
            onClick={handleEmailClick}
            variant="outline"
            className="w-full justify-start gap-3 h-12"
          >
            <FaEnvelope className="w-4 h-4" />
            <div className="text-left">
              <div className="font-medium">Email Us</div>
              <div className="text-xs text-muted-foreground">{CONTACT.email}</div>
            </div>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WhatsAppFloat;