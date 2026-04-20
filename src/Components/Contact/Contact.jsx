import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    // Nombre: mínimo 2 caracteres
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Email: formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    // Mensaje: mínimo 10 caracteres
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    // Validar
    if (!validateForm(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_3jbbbpm",
        "template_x8epb9q",
        form.current,
        "aTgJhi2J0VH3rccjG",
      );

      setStatus("success");
      form.current.reset();
      setErrors({});

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);

      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = (fieldName) =>
    `w-full p-3 border rounded-lg transition-colors duration-200 outline-none ${
      errors[fieldName]
        ? "border-red-500 bg-red-50 focus:border-red-600"
        : "border-gray-300 focus:border-black"
    }`;

  return (
    <section id="contacto" className="py-16 px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Contáctanos</h2>
        <p className="text-gray-500 text-center mb-8">
          ¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.
        </p>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <p>Mensaje enviado correctamente. ¡Gracias por contactarnos!</p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>No se pudo enviar el mensaje. Por favor, intentá nuevamente.</p>
          </div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-white p-6 rounded-xl shadow-sm"
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ej: Juan Pérez"
              className={inputClasses("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="juan@ejemplo.com"
              className={inputClasses("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribí tu consulta aquí..."
              rows="4"
              className={inputClasses("message")}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar mensaje
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
