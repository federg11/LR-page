import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { site } from "../../../data/site";

const WhatsAppButton = () => {
  const { phone, message } = site.whatsapp;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => {
          window.open(
            `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
