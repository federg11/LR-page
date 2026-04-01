import {
  Calculator,
  FileText,
  Briefcase,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const services = [
  {
    icon: Calculator,
    title: "Contabilidad General",
    description:
      "Registros contables mensuales, estados financieros y balances anuales con estándares de calidad.",
  },
  {
    icon: FileText,
    title: "Asesoría Tributaria",
    description:
      "Planificación fiscal, presentación de impuestos y declaraciones juradas personalizadas.",
  },
  {
    icon: Briefcase,
    title: "Constitución de Empresas",
    description:
      "Formalización, asesoramiento legal y gestión integral para nuevas sociedades.",
  },
  {
    icon: TrendingUp,
    title: "Auditoría",
    description:
      "Auditorías externas e internas para garantizar la transparencia de tu empresa.",
  },
  {
    icon: Shield,
    title: "Consultoría",
    description:
      "Asesoramiento estratégico para optimizar procesos y maximizar resultados.",
  },
  {
    icon: Users,
    title: "Recursos Humanos",
    description:
      "Liquidación de sueldos, manejo de payroll y gestión de personal.",
  },
];

const Services = () => {
  return (
    <section id="red" className="py-20 px-6 bg-gray-50 text-center scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>

      {/* Descripción */}
      <div className="container mx-auto max-w-4xl mb-12">
        <p className="mb-4">
          <span className="font-bold">López Ríos - SMS Tucumán</span> es firma
          corresponsal de{" "}
          <a
            href="https://www.sms.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-red-600 hover:text-red-700 font-semibold"
          >
            SMS Latinoamérica
          </a>
          .
        </p>
        <p className="mb-4">
          <span className="font-semibold">SMS Latinoamérica</span> es una red
          internacional de firmas de servicios de auditoría, consultoría y
          asesoramiento fiscal, integrada por profesionales en auditoría,
          consultoría, contabilidad, administración, economía y finanzas.
        </p>
        <div className="space-y-4">
          <p className="mb-4">
            <span className="font-bold">
              "Colaborar en la creación y consolidación de un mundo de negocio
              sostenible, eficiente y rentable"
            </span>
            , la visión que nos mueve todos los días.
          </p>
          <p className="text-justify">
            Desde 1982 desarrollamos nuestra actividad en el NOA, con sede en la
            ciudad de San Miguel de Tucumán. A partir del año 2007 somos parte
            de la red de consultoras SMS Latinoamérica, la cual nos permite
            brindar a los clientes una solución global en cualquier provincia
            Argentina, como así también en todos los países del continente
            americano.
          </p>
          <p className="text-justify">
            Nuestra misión es brindar soluciones innovadoras, eficaces,
            eficientes e integrales a la problemática empresaria, para potenciar
            el mercado y generar negocios sostenibles, basados en nuestros
            valores como la innovación, sustentabilidad, transparencia,
            confidencialidad, compromiso y trabajo en equipo.
          </p>
          <p className="text-justify">
            Contamos con un equipo de profesionales donde la actualización
            constante es lo que nos permite estar capacitados para brindar
            asesoramiento a medida de cada problemática planteada, con una
            mirada de compromiso en soluciones sostenibles.
          </p>
        </div>
      </div>

      {/* Logo SMS */}
      <div className="flex justify-center mb-12">
        <figure>
          <a
            href="https://www.sms.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              className="max-w-[220px] w-full h-auto"
              src="/sms-latino.png"
              alt="Logo SMS Latinoamérica"
            />
          </a>
        </figure>
      </div>

      {/* Cards de Servicios */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">Nuestros Servicios</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ScrollAnimation 
              key={idx}
              animation="fadeInUp" 
              duration={0.5} 
              delay={idx * 0.1}
              threshold={0.2}
            >
              <div
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-red-100 h-full"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
