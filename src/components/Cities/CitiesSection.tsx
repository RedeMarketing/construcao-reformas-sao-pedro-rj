import React from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { CITIES_DATA } from "../../data/cities";

interface CitiesSectionProps {
  onSelectCity: (slug: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({ onSelectCity }) => {
  const primaryCity = CITIES_DATA.find((c) => c.isPrimary) || CITIES_DATA[0];
  const otherCities = CITIES_DATA.filter((c) => !c.isPrimary);

  return (
    <section id="cidades-atendidas" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight mb-3">
            Cidades Atendidas na Região dos Lagos RJ
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Sede operacional em São Pedro da Aldeia com construtor legalizado e equipe completa para atender cidades vizinhas com agilidade.
          </p>
        </div>

        {/* Primary City Card: São Pedro da Aldeia */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-sky-400/30 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0a2540]">
                {primaryCity.name} — RJ
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {primaryCity.tagline}
              </p>
            </div>

            <button
              onClick={() => onSelectCity(primaryCity.slug)}
              className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow transition-all cursor-pointer"
            >
              <span>Ver Bairros de {primaryCity.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick list of neighborhoods in São Pedro da Aldeia */}
          <div className="pt-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Atendimento em mais de 20 localidades e bairros:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {primaryCity.neighborhoods.map((bairro, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg hover:bg-sky-50 hover:text-[#0284c7] transition-colors"
                >
                  {bairro}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid of Other 6 Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherCities.map((city) => (
            <div
              key={city.slug}
              onClick={() => onSelectCity(city.slug)}
              className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-slate-200 hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 group-hover:bg-sky-500 text-[#0284c7] group-hover:text-white flex items-center justify-center transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0a2540] group-hover:text-[#0284c7] transition-colors">
                      {city.name}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{city.stateCode}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {city.heroText}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    Profundidade média estimada:
                  </span>
                  <p className="text-xs font-bold text-slate-800">
                    {city.recommendedDepthEstimate}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                <span>Página da Cidade</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
