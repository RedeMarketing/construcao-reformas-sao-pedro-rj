import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES_DATA } from "../data/cities";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { SEO } from "../components/SEO";

interface CitiesIndexProps {
  onNavigate: (path: string) => void;
}

export const CitiesIndex: React.FC<CitiesIndexProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Cidades Atendidas" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial do Índice de Cidades */}
      <SEO
        title="Cidades Atendidas | Construção e Reformas em São Pedro da Aldeia RJ"
        description="Cidades atendidas com construtor legalizado e equipe completa: São Pedro da Aldeia, Cabo Frio, Armação dos Búzios, Arraial do Cabo, Iguaba Grande, Araruama e Saquarema RJ."
        path="/cidades"
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight mb-4">
            Cidades e Regiões Atendidas
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Nossa sede operacional em São Pedro da Aldeia atende com rapidez, mestre de obras e equipe completa as principais cidades da Região dos Lagos fluminense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES_DATA.map((city) => (
            <div
              key={city.slug}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all border ${
                city.isPrimary
                  ? "bg-gradient-to-b from-sky-50 to-white border-sky-300 shadow-md ring-2 ring-sky-400/20"
                  : "bg-white border-slate-200 hover:border-sky-300 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-2 text-[#0284c7] font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{city.stateCode}</span>
                  </div>
                  {city.isPrimary && (
                    <span className="bg-[#0284c7] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                      Sede Central
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black text-[#0a2540] mb-2">
                  {city.name}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {city.heroText}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Bairros e Localidades em Destaque:
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {city.neighborhoods.slice(0, 6).map((b, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {b}
                      </span>
                    ))}
                    {city.neighborhoods.length > 6 && (
                      <span className="text-[11px] text-[#0284c7] font-semibold px-1 py-0.5">
                        +{city.neighborhoods.length - 6} outros
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate(`/${city.slug}`)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0a2540] hover:bg-[#0284c7] text-white text-sm font-bold py-3 px-4 rounded-xl transition-colors cursor-pointer"
              >
                <span>Ver serviços em {city.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
