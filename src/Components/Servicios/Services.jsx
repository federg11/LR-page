
const Services = () => {
  return (
    <section id="red" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Red SMS</h2>
      <div className="container mx-auto max-w-4xl">
        <p className="mb-4">
          <span className="font-bold">López Ríos - SMS Tucumán</span> es firma corresponsal de <span className="font-bold">SMS Latinoamérica</span>.
        </p>
        <p className="mb-4">
          <span className="font-semibold">SMS Latinoamérica</span> es una red internacional de firmas de servicios de auditoría, consultoría y asesoramiento fiscal, integrada por profesionales en auditoría, consultoría, contabilidad, administración, economía y finanzas.
        </p>
        <p>
          A través de esta red, se logra una sólida presencia en toda América Latina y el Caribe, integrados al mundo, asistiendo a empresas y otras entidades en sus operaciones comerciales, industriales y de servicios.
        </p>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <figure>
          <img src="./sms-latino.png" alt="Logo SMS Latinoamérica" />
        </figure>
      </div>
      {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Contabilidad General", "Registros contables mensuales y balances"],
            ["Asesoría Tributaria", "Presentación de impuestos y declaraciones"],
            ["Constitución de Empresas", "Formalización y asesoramiento legal"]
          ].map(([title, desc], idx) => (
            <div key={title} 
              className="bg-red-700 p-6 rounded-xl shadow transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{animationDelay: `${idx * 0.2 + 0.2}s`, animationFillMode: 'both'}}
              >
              <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
              <p className="text-white">{desc}</p>
            </div>
          ))}
        </div> */}
    </section>
  )
}

export default Services