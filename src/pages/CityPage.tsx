import React, { useEffect } from "react";
import { MapPin, ShieldCheck, ArrowRight, Layers, HelpCircle, Phone, Building2 } from "lucide-react";
import { CityData } from "../data/cities";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { CalculatorSection } from "../components/Calculator/CalculatorSection";
import { ExperienceAndForm } from "../components/LeadForm/ExperienceAndForm";
import { FAQSection } from "../components/FAQ/FAQSection";
import { SEO } from "../components/SEO";
import { getCityMetadata } from "../seo/metadata";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "../seo/schema";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

interface CityPageProps {
  city: CityData;
  onNavigate: (path: string) => void;
}

export const CityPage: React.FC<CityPageProps> = ({ city, onNavigate }) => {
  const meta = getCityMetadata(city);

  useEffect(() => {
    trackEvent("city_page_viewed", { city: city.name });
  }, [city]);

  const breadcrumbs = [
    { label: "Cidades Atendidas", path: "/cidades" },
    { label: `${city.name} - RJ` },
  ];

  const businessSchema = generateLocalBusinessSchema(city);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "/" },
    { name: "Cidades Atendidas", url: "/cidades" },
    { name: city.name, url: `/${city.slug}` },
  ]);
  const faqSchema = generateFAQSchema(city.faqs);

  const schemas = [
    businessSchema,
    breadcrumbSchema,
    ...(city.faqs.length > 0 ? [faqSchema] : []),
  ];

  const handleCityWhatsApp = () => {
    trackEvent("whatsapp_clicked", { source: `city_page_${city.slug}` });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage(`Página de Construção e Reforma em ${city.name}`));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial da Cidade */}
      <SEO
        title={meta.title}
        description={meta.description}
        path={`/${city.slug}`}
        ogImage={meta.ogImage}
        jsonLd={schemas}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      {/* City Hero */}
      <section className="bg-gradient-to-b from-[#07172b] to-[#0a2540] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            {city.h1Title ? (
              city.h1Title
            ) : (
              <>Construção e Reformas em <span className="text-[#38bdf8]">{city.name}</span></>
            )}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            {city.h1Subtext || city.heroText}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            <button
              onClick={handleCityWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer min-h-[48px]"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Solicitar Orçamento Rápido em {city.name}</span>
            </button>

            <button
              onClick={() => {
                document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer min-h-[48px]"
            >
              <span>Simular Estimativa de Obra</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* Local Construction & Soil Insights */}
      <section className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="p-6 sm:p-8 bg-sky-50/70 rounded-3xl border border-sky-100">
            <h2 className="text-xl sm:text-2xl font-black text-[#0a2540] mb-3">
              Solo, Clima e o Processo de Construção em {city.name}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {city.localGeology}
            </p>
            <div className="p-4 bg-white rounded-xl border border-sky-200/60 text-xs text-slate-600">
              <strong className="text-[#0a2540] block mb-1">Fundação e Estrutura Recomendada:</strong>
              {city.recommendedDepthEstimate}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] mb-3">
              Por que Escolher uma Empresa Experiente na Região dos Lagos?
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {city.keyLocalBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Neighborhoods & Localities */}
      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540]">
              ATENDEMOS DIVERSOS BAIRROS E CONDOMÍNIOS DE {city.name.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Equipe completa preparada para atender residências de rua, condomínios fechados, orla e estabelecimentos comerciais.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 mb-8">
            {city.neighborhoods.map((bairro, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center text-xs font-bold text-slate-700 hover:border-sky-400 hover:text-[#0284c7] transition-all"
              >
                {bairro}
              </div>
            ))}
          </div>

          {city.condominiums && city.condominiums.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-bold text-[#0a2540] uppercase tracking-wider mb-3 text-center">
                Condomínios Fechados e Loteamentos com Obras em {city.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {city.condominiums.map((condo, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs"
                  >
                    🏡 {condo}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Calculator configured for this city */}
      <CalculatorSection defaultCity={city.name} />

      {/* Lead Form for this city */}
      <ExperienceAndForm initialCity={city.name} />

      {/* City Specific FAQs */}
      {city.faqs.length > 0 && (
        <FAQSection
          customFaqs={city.faqs}
          title={`Perguntas Frequentes sobre Obras e Reformas em ${city.name}`}
          subtitle={`Respostas técnicas sobre solo, alvenaria, cronogramas e projetos na cidade de ${city.name}.`}
        />
      )}
    </article>
  );
};
