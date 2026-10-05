import React from "react";
import { 
  Hammer, 
  Home, 
  Shield, 
  Layers, 
  Palmtree, 
  Zap, 
  Paintbrush, 
  Building2, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { SEO } from "../components/SEO";

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Serviços" }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Hammer": return Hammer;
      case "Home": return Home;
      case "Shield": return Shield;
      case "Layers": return Layers;
      case "Palmtree": return Palmtree;
      case "Zap": return Zap;
      case "Paintbrush": return Paintbrush;
      default: return Building2;
    }
  };

  return (
    <div className="w-full bg-[#F2F4F5] min-h-screen">
      {/* SEO Dinâmico e Canonical Oficial do Índice de Serviços */}
      <SEO
        title="Serviços de Construção e Reforma | São Pedro da Aldeia RJ"
        description="Conheça nossas soluções completas: construção nova do zero, reformas residenciais e comerciais, telhados, pisos, áreas gourmet e instalações com construtor legalizado."
        path="/servicos"
      />

      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/80">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight mb-4">
            Nossos Serviços de Construção e Reformas
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-[#0284c7] mb-3">
            Soluções Completas para Construção Residencial Região dos Lagos e Reforma de Casa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mais de 35 anos de tradição executando obras do zero, reforma de casa, manutenção predial e acabamentos finos. Mão de obra qualificada em alvenaria, telhado, impermeabilização, gesso, drywall, piscina, muro, pintura, elétrica e hidráulica em São Pedro da Aldeia e toda a Região dos Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-[#0a2540] mb-3 leading-snug">
                    {service.name}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/servicos/${service.slug}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0284c7] hover:underline cursor-pointer"
                  >
                    <span>Ver detalhes do serviço</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
