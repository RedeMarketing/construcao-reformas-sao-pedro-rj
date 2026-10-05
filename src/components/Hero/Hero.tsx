import React from "react";
import { ChevronRight, ShieldCheck, Users, Award } from "lucide-react";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";
import heroBgImage from "../../assets/images/hero_silverado_trailer_1789334463953.jpg";

interface HeroProps {
  onOpenQuoteModal?: () => void;
  onNavigateToCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const handlePrimaryCTA = () => {
    trackEvent("quote_requested", { source: "hero_cta_primary" });
    const formElement = document.getElementById("orcamento-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  const handleWhatsApp = () => {
    trackEvent("whatsapp_clicked", { source: "hero_whatsapp_round" });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Hero"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero-section" className="relative bg-[#061d3d] text-white overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Image: Caminhonete prata Silverado com carretinha de materiais e São Pedro da Aldeia ao fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Caminhonete prata modelo Silverado com carretinha de materiais de construção em São Pedro da Aldeia RJ"
          className="w-full h-full object-cover object-right sm:object-[80%_center] lg:object-center"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />
        {/* Gradiente escuro à esquerda para legibilidade perfeita do texto, mantendo os mesmos efeitos de luz */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/90 sm:via-[#061d3d]/80 lg:via-[#061d3d]/65 to-transparent" />
      </div>

      {/* Container de conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          
          {/* Título Principal H1 exato */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black tracking-tight leading-[1.1] mb-4">
            <span className="block text-white">CONSTRUÇÃO E REFORMAS EM GERAL</span>
            <span className="block text-[#38bdf8]">em São Pedro da Aldeia RJ</span>
          </h1>

          {/* Subtítulo abaixo da H1 */}
          <h2 className="text-base sm:text-lg lg:text-xl text-sky-100/95 font-semibold leading-snug mb-3">
            Empresa de Construção Civil e Empreiteiro legalizado para construção de Casas em São Pedro da Aldeia e reforma de casa do alicerce ao acabamento.
          </h2>

          {/* Texto descritivo com contexto de 35+ anos de experiência */}
          <p className="text-sm sm:text-base lg:text-[15px] text-slate-100/90 leading-relaxed font-normal mb-8 max-w-xl">
            Com mais de 35 anos de tradição, somos uma empresa experiente na Região dos Lagos oferecendo mão de obra qualificada em alvenaria, telhado, impermeabilização, gesso, drywall, piscina, muro, pintura, elétrica e hidráulica. Segurança técnica, pontualidade de cronograma e garantia comprovada.
          </p>

          {/* 3 Destaques horizontais com ícones e divisores verticais */}
          <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-nowrap items-center gap-3.5 sm:gap-6 mb-8 py-2">
            
            {/* Item 1: Construtor Legalizado */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-white stroke-[1.75] flex-shrink-0" />
              <div className="text-xs sm:text-[13px] text-white font-medium leading-tight">
                <div>Construtor</div>
                <div>Legalizado</div>
              </div>
            </div>

            {/* Divisor vertical */}
            <div className="h-8 w-[1px] bg-white/25 hidden sm:block flex-shrink-0" />

            {/* Item 2: Equipe Completa */}
            <div className="flex items-center gap-2.5">
              <Users className="w-6 h-6 text-white stroke-[1.75] flex-shrink-0" />
              <div className="text-xs sm:text-[13px] text-white font-medium leading-tight">
                <div>Equipe Completa</div>
                <div>e Especializada</div>
              </div>
            </div>

            {/* Divisor vertical */}
            <div className="h-8 w-[1px] bg-white/25 hidden sm:block flex-shrink-0" />

            {/* Item 3: Mais de 35 Anos */}
            <div className="flex items-center gap-2.5">
              <Award className="w-6 h-6 text-white stroke-[1.75] flex-shrink-0" />
              <div className="text-xs sm:text-[13px] text-white font-medium leading-tight">
                <div>+35 Anos de</div>
                <div>Experiência Prática</div>
              </div>
            </div>

          </div>

          {/* Botões de Ação responsivos para mobile e desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={handlePrimaryCTA}
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-sky-950/40 hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 text-center min-h-[48px]"
            >
              <span>Solicite um Orçamento Rápido</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5] flex-shrink-0" />
            </button>

            <button
              onClick={handleWhatsApp}
              id="hero-whatsapp-round-btn"
              className="w-full sm:w-12 h-12 rounded-full border-2 border-[#0284c7] bg-[#061d3d] hover:bg-[#0284c7] text-[#38bdf8] hover:text-white flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer flex-shrink-0 min-h-[48px] px-4 sm:px-0"
              aria-label="Fale Conosco pelo WhatsApp"
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41h-.01c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24zm4.51 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
              </svg>
              <span className="sm:hidden font-bold text-sm">Falar pelo WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
