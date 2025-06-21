
const Contact = () => {
  return (
    <section id="contacto" className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input name="name" placeholder="Nombre" required className="p-3 border rounded" />
          <input name="email" type="email" placeholder="Correo electrónico" required className="p-3 border rounded" />
          <textarea name="message" placeholder="Mensaje" required className="p-3 border rounded h-32" />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-red-800">Enviar mensaje</button>
        </form>
      </section>
  )
}

export default Contact