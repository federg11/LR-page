import { FileText, Download, Calendar } from "lucide-react";
import { publications } from "../../../data/publications";

const Publications = () => {
  return (
    <section
      id="boletin"
      className="w-full bg-white border-y border-slate-200 py-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-600 p-2 rounded-lg shadow-sm">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Boletín Semanal
            </h2>
            {/* <p className="text-xs text-slate-500">
              Informes ejecutivos de beneficios fiscales
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((item) => (
            <article
              key={item.id}
              className="h-full bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-red-600 bg-blue-50 px-2 py-1 rounded-md">
                    PDF
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.fecha).toLocaleDateString("es-AR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <a
                href={item.file}
                download
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar PDF
                <span className="font-normal text-red-100">• {item.size}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
