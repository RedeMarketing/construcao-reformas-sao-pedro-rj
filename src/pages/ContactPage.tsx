import React from "react";
import { Phone, Clock, MapPin, Mail, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { ExperienceAndForm } from "../components/LeadForm/ExperienceAndForm";
import { SEO } from "../components/SEO";
import { BUSINESS_DATA } from "../data/business";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../utils/whatsapp";

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Contato" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial da Página de Contato */}
      <SEO
        title="Contato e Orçamento de Obra | Construção e Reformas São Pedro da Aldeia RJ"
        description="Entre em contato conosco para solicitar visita técnica, consultoria de obra e orçamento de construção e reforma em São Pedro da Aldeia, Cabo Frio, Búzios e região."
        path="/contato"
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight mb-4">
            Fale com Nosso Construtor
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Estamos prontos para atender seu projeto residencial ou comercial em São Pedro da Aldeia e em toda a Região dos Lagos.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#16a34a] flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-bold text-[#0a2540] mb-1">WhatsApp & Telefone</h2>
              <p className="text-sm text-slate-700 font-semibold mb-3">{BUSINESS_DATA.whatsappFormatted}</p>
            </div>
            <button
              onClick={() => {
                const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Página de Contato"));
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="text-xs font-bold text-[#16a34a] hover:underline cursor-pointer"
            >
              Iniciar conversa agora →
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-bold text-[#0a2540] mb-1">E-mail Oficial</h2>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold mb-3 break-all">{BUSINESS_DATA.email}</p>
            </div>
            <a
              href={`mailto:${BUSINESS_DATA.email}`}
              className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
            >
              Enviar e-mail direto →
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284c7] flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-sm font-bold text-[#0a2540] mb-1">Horário de Atendimento</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {BUSINESS_DATA.openingHours}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-sm font-bold text-[#0a2540] mb-1">Sede de Atendimento</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              São Pedro da Aldeia, Cabo Frio, Búzios, Arraial do Cabo e Iguaba Grande - RJ
            </p>
          </div>

        </div>

        {/* Lead Form */}
        <ExperienceAndForm />

      </div>
    </div>
  );
};
