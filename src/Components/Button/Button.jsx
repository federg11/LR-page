import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Button = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => {
          const phone = '5493815043097';
          const text = 'Bienvenido a consultora López Rios & Asociados, por favor dejanos tu consulta';
          window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
        }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </button>
    </div>
  );
};

export default Button;
