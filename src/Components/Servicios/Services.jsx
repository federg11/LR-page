
const Services = () => {
  return (
    <section id="red" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">¿Quiénes Somos?</h2>
      <div className="container mx-auto max-w-4xl">
        <p className="mb-4">
          <span className="font-bold">López Ríos - SMS Tucumán</span> es firma corresponsal de <span className="font-bold"><a href="https://www.sms.com.ar/" target="_blank" className="cursor-pointer text-red-600">SMS Latinoamérica</a></span>.
        </p>
        <div>
          <p className="mb-4">
            <span className="font-semibold">SMS Latinoamérica</span> es una red internacional de firmas de servicios de auditoría, consultoría y asesoramiento fiscal, integrada por profesionales en auditoría, consultoría, contabilidad, administración, economía y finanzas.
            <br />
          </p>
        </div>
        <div className="space-y-4">
          <p className="mb-4">
            <span className="font-bold">
              "Colaborar en la creación y consolidación de un mundo de negocio sostenible, eficiente y rentable"
            </span>, la visión que nos mueve todos los días.
          </p>
          <p className="text-justify">
            Desde 1982 desarrollamos nuestra actividad en el NOA, con sede en la ciudad de San Miguel de Tucumán. A partir del año 2007 somos parte de la red de consultoras SMS Latinoamérica, la cual nos permite brindar a los clientes una solución global en cualquier provincia Argentina, como así también en todos los países del continente americano.
          </p>
          <p className="text-justify">
            Nuestra misión es brindar soluciones innovadoras, eficaces, eficientes e integrales a la problemática empresaria, para potenciar el mercado y generar negocios sostenibles, basados en nuestros valores como la innovación, sustentabilidad, transparencia, confidencialidad, compromiso y trabajo en equipo.
          </p>
          <p className="text-justify">
            Contamos con un equipo de profesionales donde la actualización constante es lo que nos permite estar capacitados para brindar asesoramiento a medida de cada problemática planteada, con una mirada de compromiso en soluciones sostenibles.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <figure>
          <a href="https://www.sms.com.ar/" target="_blank" className="cursor-pointer"><img src="./sms-latino.png" alt="Logo SMS Latinoamérica" /></a>
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