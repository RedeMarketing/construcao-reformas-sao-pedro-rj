import React from "react";
import { Home, ArrowRight, Phone, Search } from "lucide-react";
import { SEO } from "../components/SEO";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../utils/whatsapp";

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Página 404"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      {/* SEO Dinâmico - 404 com noindex para proteger a pontuação técnica do domínio */}
      <SEO
        title="Página não encontrada (404) | Construção e Reformas em São Pedro da Aldeia RJ"
        description="A página que você tentou acessar não foi encontrada. Navegue pelos nossos serviços de construção e reformas ou solicite seu orçamento."
        path="/404"
        noindex={true}
      />

      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 text-center">
        
        <div className="w-16 h-16 rounded-2xl bg-sky-100 text-[#0284c7] flex items-center justify-center mx-auto mb-5">
          <Search className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-black text-[#0a2540] mb-3">
          Página não encontrada
        </h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          O link que você tentou acessar pode ter sido alterado, movido ou está temporariamente indisponível.
        </p>

        {/* 4 Required Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => onNavigate("/")}
            id="not-found-home-btn"
            className="w-full flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para o início</span>
          </button>

          <button
            onClick={() => onNavigate("/servicos")}
            id="not-found-services-btn"
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer"
          >
            <span>Ver serviços</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate("/calculadora-de-construcao-e-reforma")}
            id="not-found-calc-btn"
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer"
          >
            <span>Solicitar orçamento / Simulação de Obra</span>
          </button>

          <button
            onClick={handleWhatsApp}
            id="not-found-whatsapp-btn"
            className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow"
          >
            <Phone className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
