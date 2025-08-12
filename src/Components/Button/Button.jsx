import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
const Button = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 rounded-full">
            <a href="https://api.whatsapp.com/send?phone=+5493815043097&text=Bienvenido a consultora López Rios & Asociados"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-11 h-11 transition-colors duration-300 rounded-full">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white" />
            </a>
        
    </div>
  )
}

export default Button