import emailjs from "@emailjs/browser";

// Transporte seleccionable por entorno:
//  - "emailjs": demo/Netlify (usa EmailJS, las keys vienen de VITE_EMAILJS_*)
//  - "php":     producción cPanel (POST a /contact.php que manda el mail)
const TRANSPORT = import.meta.env.VITE_CONTACT_TRANSPORT || "emailjs";

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Envía el formulario de contacto. `formElement` debe tener los campos
// name="name", name="email" y name="message".
export async function sendContactMessage(formElement) {
  if (TRANSPORT === "php") {
    const res = await fetch("/contact.php", {
      method: "POST",
      body: new FormData(formElement),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  }

  return emailjs.sendForm(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    formElement,
    EMAILJS.publicKey
  );
}
