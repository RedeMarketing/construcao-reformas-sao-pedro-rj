import React, { useState } from "react";
import { Check, User, Phone, Briefcase, MessageSquare, Lock, Building2 } from "lucide-react";
import { buildWhatsAppUrl, buildQuickQuoteWhatsAppMessage, QuoteFormData } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

interface ExperienceAndFormProps {
  initialService?: string;
  initialCity?: string;
}

export const ExperienceAndForm: React.FC<ExperienceAndFormProps> = ({
  initialService = "Construção Nova do Zero",
  initialCity = "São Pedro da Aldeia",
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    city: initialCity,
    neighborhood: "",
    serviceType: initialService,
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim()) {
      setFormError("Por favor, informe seu nome.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 8) {
      setFormError("Por favor, informe seu telefone / WhatsApp com DDD.");
      return;
    }

    setIsSubmitting(true);
    trackEvent("contact_form_submitted", {
      service: formData.serviceType,
      city: formData.city,
    });

    const message = buildQuickQuoteWhatsAppMessage(formData);
    const url = buildWhatsAppUrl(message);

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(url, "_blank", "noopener,noreferrer");
    }, 200);
  };

  return (
    <section id="orcamento-form" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Construction project image with professional framing */}
          <div className="lg:col-span-4 h-full min-h-[380px] sm:min-h-[460px] relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/Mais de 35 Anos de Tradição em Construção Civil e reformas em São Pedro da Aldeia e cidades vizinhas na Região dos Lagos RJ..jpg"
              alt="Mais de 35 Anos de Tradição em Construção Civil e reformas em São Pedro da Aldeia e cidades vizinhas na Região dos Lagos RJ."
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Middle Column: Business text with 35+ years experience and legalized contractor */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0a2540] tracking-tight leading-snug mb-4">
              Mais de 35 Anos de Tradição em Construção Civil na Região dos Lagos
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
              Empresa legalizada atuando como empreiteiro de confiança na construção residencial Região dos Lagos. Especialistas tanto em reformas de Casas em São Pedro da Aldeia quanto em obras novas completas com mão de obra qualificada, garantindo cumprimento do cronograma, contrato formal e economia inteligente na compra de materiais.
            </p>

            {/* 4 Bullet Points with solid blue circle & white check */}
            <div className="space-y-3.5">
              {[
                "Construtor legalizado com mais de 35 anos de experiência",
                "Equipe completa (mestre de obras, alvenaria, hidráulica, elétrica e telhado)",
                "Contrato formalizado com cronograma executivo detalhado",
                "Garantia de 5 anos e alto padrão em acabamentos e porcelanatos",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0284c7] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Dark Navy Form Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#071d41] rounded-2xl p-6 sm:p-7 shadow-2xl text-white">
              
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-2xl bg-sky-500/20 text-[#38bdf8]">
                  <Building2 className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  Orçamento Rápido de Construção e Reforma
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300">
                  Solicite seu orçamento reforma com construtor legalizado e receba retorno imediato.
                </p>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {formError && (
                  <div className="p-2.5 bg-red-500/20 border border-red-500/50 rounded-lg text-xs text-red-200">
                    {formError}
                  </div>
                )}

                {/* 1. Nome completo */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    id="form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nome completo"
                    className="w-full pl-10 pr-3 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-lg text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all min-h-[48px]"
                  />
                </div>

                {/* 2. Telefone / WhatsApp */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    id="form-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Telefone / WhatsApp com DDD"
                    className="w-full pl-10 pr-3 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-lg text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all min-h-[48px]"
                  />
                </div>

                {/* 3. Tipo de serviço */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <select
                    id="form-service"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full pl-10 pr-8 py-3 bg-white text-slate-900 rounded-lg text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all appearance-none cursor-pointer min-h-[48px]"
                  >
                    <option value="Construção Nova do Zero">Construção Nova do Zero (Casa Completa)</option>
                    <option value="Reforma Residencial Completa">Reforma Residencial Completa</option>
                    <option value="Telhados, Coberturas e Calhas">Telhados, Coberturas e Calhas</option>
                    <option value="Assentamento de Pisos e Porcelanatos">Assentamento de Pisos e Porcelanatos</option>
                    <option value="Área Gourmet com Churrasqueira e Piscina">Área Gourmet com Churrasqueira e Piscina</option>
                    <option value="Instalações Elétricas e Hidráulicas">Instalações Elétricas e Hidráulicas</option>
                    <option value="Pintura, Textura e Impermeabilização">Pintura, Textura e Impermeabilização</option>
                    <option value="Muros de Fechamento e Alvenaria">Muros de Fechamento e Alvenaria</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* 4. Mensagem (opcional) */}
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="form-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cidade, bairro ou detalhes do imóvel"
                    className="w-full pl-10 pr-3 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-lg text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all min-h-[48px]"
                  />
                </div>

                {/* Submit Green Button with WhatsApp icon */}
                <button
                  type="submit"
                  id="form-submit-button"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#00a859] hover:bg-[#008f4c] text-white py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 active:scale-98 shadow cursor-pointer mt-1 min-h-[48px]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.814h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.8zm3.36 8.232c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.635-.68-2.684-2.348-2.766-2.457-.082-.109-.66-8.77-.66-1.674 0-.797.412-1.19.557-1.336.145-.145.316-.182.422-.182s.212.002.304.007c.099.005.231-.038.361.275.144.348.493 1.202.535 1.29.043.087.072.189.014.304-.058.116-.087.189-.174.29-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.449.742.964 1.201.662.59 1.221.774 1.394.86.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.391-.087.159.058 1.01.476 1.184.563.174.087.29.13.333.203.043.073.043.42-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.954-1.399C8.423 21.493 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  <span>{isSubmitting ? "Enviando..." : "Solicitar Orçamento Rápido via WhatsApp"}</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-slate-300" />
                  <span>Seus dados estão protegidos. Atendimento direto com construtor legalizado.</span>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
