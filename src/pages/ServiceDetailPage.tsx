import React, { useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  ChevronRight, 
  Calculator as CalcIcon,
  Tag,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { ServiceItem } from "../data/services";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { CalculatorSection } from "../components/Calculator/CalculatorSection";
import { ExperienceAndForm } from "../components/LeadForm/ExperienceAndForm";
import { SEO } from "../components/SEO";
import { getServiceMetadata } from "../seo/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "../seo/schema";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const meta = getServiceMetadata(service);

  useEffect(() => {
    trackEvent("service_viewed", { service: service.name, slug: service.slug });
  }, [service]);

  const breadcrumbs = [
    { label: "Serviços", path: "/servicos" },
    { label: service.name },
  ];

  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: service.name, url: `/servicos/${service.slug}` },
  ]);

  const handleWhatsApp = () => {
    trackEvent("whatsapp_clicked", { source: `service_${service.slug}` });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage(service.name));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleScrollToCalculator = () => {
    trackEvent("calculator_started", { from_service: service.slug });
    const calcElement = document.getElementById("calculadora");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article 
      id={`servico-${service.slug}`}
      style={{ backgroundColor: service.pageBgColor }} 
      className="w-full min-h-screen transition-colors duration-300"
    >
      {/* SEO Dinâmico e Canonical Oficial do Serviço */}
      <SEO
        title={meta.title}
        description={meta.description}
        path={`/servicos/${service.slug}`}
        ogImage={service.heroImage || meta.ogImage}
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      {/* Navegação em Breadcrumbs */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/80">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      {/* ========================================================================= */}
      {/* 3. BANNER H1 COM IMAGEM ESPECÍFICA E GRADIENTE PERSONALIZADO              */}
      {/* - Imagem real de alta qualidade nítida à direita                          */}
      {/* - Transição suave com degradê exclusivo em tons da paleta à esquerda      */}
      {/* ========================================================================= */}
      <section 
        id="service-hero-banner"
        className="relative text-white overflow-hidden py-12 sm:py-16 lg:py-20"
      >
        {/* Imagem de Fundo Real e Específica */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.heroImageAlt || `${service.name} em São Pedro da Aldeia RJ`}
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            className={`w-full h-full object-cover object-right sm:object-[75%_center] lg:object-center ${service.heroImageClass || ""}`}
            referrerPolicy="no-referrer"
          />
          {/* Gradiente de nuance azul exclusivo da página (varia sutilmente em cada serviço) */}
          <div className={`absolute inset-0 ${service.heroGradientOverlay}`} />
        </div>

        {/* Conteúdo do Banner H1 com Subtexto Estratégico de SEO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Título Principal H1 Semântico e Focado em SEO Fundo de Funil */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white mb-5">
              {service.h1Title || service.name}
            </h1>

            {/* ========================================================================= */}
            {/* 4. SUBTEXTO DE SEO (PALAVRAS-CHAVE CAUDA CURTA E LONGA)                   */}
            {/* ========================================================================= */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed mb-6 text-shadow-sm">
              {service.seoSubtext}
            </p>

            {/* Badges Semânticos com Palavras-chave de Cauda Curta e Longa */}
            <div className="flex flex-wrap gap-2 mb-8 items-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 mr-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Especialidades:</span>
              </span>
              {service.seoKeywordsShortTail.map((keyword, idx) => (
                <span 
                  key={idx}
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Botões de Ação Imediata */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={handleWhatsApp}
                id="btn-service-whatsapp-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer min-h-[48px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Solicitar Orçamento sem Compromisso</span>
              </button>

              <button
                onClick={handleScrollToCalculator}
                id="btn-service-calculator-scroll"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl backdrop-blur-md border border-white/30 transition-all duration-200 cursor-pointer min-h-[48px]"
              >
                <CalcIcon className="w-5 h-5 flex-shrink-0" />
                <span>Simular Obra na Calculadora ↓</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DETALHES TÉCNICOS DO SERVIÇO                                              */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Coluna Principal: Como Funciona + Etapas + Indicado Para */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Bloco: Como Funciona */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight mb-4">
                Como Funciona o Serviço de {service.name}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Bloco: Etapas Executivas */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] tracking-tight">
                    Etapas do Processo Executivo
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Cronograma Transparente</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.stages.map((stage, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-sky-300 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#0284c7] text-white flex items-center justify-center font-black text-xs mb-3 shadow-sm">
                      {idx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0a2540] mb-1.5">
                      {stage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco: Indicado Para */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] tracking-tight mb-4">
                Para Quem Este Serviço é Indicado
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.audience.map((aud, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 text-sm text-slate-700 p-3.5 bg-sky-50/50 rounded-2xl border border-sky-100/80"
                  >
                    <ChevronRight className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{aud}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Lateral: Diferenciais Técnicos + CTA WhatsApp */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card de Diferenciais Técnicos */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0a2540]">
                    Diferenciais Técnicos
                  </h3>
                  <p className="text-xs text-slate-500">Mais de 35 anos de tradição</p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-6">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Atendimento em São Pedro da Aldeia</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Também atendemos Cabo Frio, Araruama, Iguaba Grande, Búzios e Arraial do Cabo.
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Falar no WhatsApp com Construtor</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INCLUSÃO DA CALCULADORA INTERATIVA EXATAMENTE IDÊNTICA À DA HOME       */}
      {/* 'Orçamento Reforma e Simulação Técnica Online - CALCULADORA DE CONSTRUÇÃO  */}
      {/* E REFORMA: Simule o Processo de Construção da sua Obra ou Reforma de Casa' */}
      {/* ========================================================================= */}
      <CalculatorSection defaultCity="São Pedro da Aldeia" />

      {/* Seção Institucional e Formulário de Contato/Orçamento Rápido */}
      <ExperienceAndForm 
        initialService={service.name} 
        initialCity="São Pedro da Aldeia" 
      />
    </article>
  );
};
