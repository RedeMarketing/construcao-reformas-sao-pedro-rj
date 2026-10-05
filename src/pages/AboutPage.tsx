import React from "react";
import { ShieldCheck, Award, HardHat, Building2, Users, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { SEO } from "../components/SEO";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../utils/whatsapp";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Sobre Nós" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial da Página Sobre */}
      <SEO
        title="Sobre Nós | Construtor Legalizado em São Pedro da Aldeia RJ"
        description="Conheça nossa trajetória de mais de 35 anos em construção civil, obras residenciais, reformas em geral e equipe completa em São Pedro da Aldeia e Região dos Lagos."
        path="/sobre"
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight mb-4">
            Mais de 35 Anos Construindo com Solidez e Confiança
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0284c7] mb-4">
            Sua Empresa de Construção Civil e Empreiteiro em São Pedro da Aldeia
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Referência em reformas e construção em São Pedro da Aldeia, somos uma empresa experiente na Região dos Lagos especializada em construção residencial Região dos Lagos e reforma de casa. Atuamos como empreiteiro legalizado com mão de obra qualificada para construção de Casas em São Pedro da Aldeia e reformas de Casas em São Pedro da Aldeia do alicerce ao acabamento fino.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284c7] flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2">+35 Anos de Tradição e Construção Civil</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Três décadas e meia construindo casas e realizando reformas sem vícios construtivos, com profundo conhecimento dos solos e ventos de São Pedro da Aldeia e litoral.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2">Mão de Obra Qualificada e Própria</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mestre de obras e equipes com maestria em alvenaria, telhado, impermeabilização, gesso, drywall, piscina, muro, pintura, elétrica e hidráulica com coordenação unificada.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2">Empreiteiro e Construtor Legalizado</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Contrato formal com cronograma de execução, pagamentos vinculados a etapas concluídas e garantia legal de 5 anos de integridade estrutural.
            </p>
          </div>
        </div>

        {/* Text Story */}
        <div className="bg-gradient-to-r from-sky-50 to-slate-50 p-8 rounded-3xl border border-sky-100 mb-12 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-black text-[#0a2540]">
            Nosso Rigor no Processo de Construção e Reformas
          </h2>
          <h3 className="text-lg font-bold text-[#0284c7]">
            Engenharia Aplicada, Orçamento Reforma Transparente e Segurança
          </h3>
          <p>
            Construir ou reformar na Região dos Lagos exige cuidados especiais que profissionais sem experiência ignoram: fundações dimensionadas para o solo arenoso ou argiloso, proteção rigorosa contra maresia em ferragens e tubulações, e telhados com amarração segura para ventos fortes característicos da laguna de Araruama.
          </p>
          <p>
            Com mais de 35 anos de atuação ininterrupta, dominamos cada etapa do processo de construção, desde o orçamento rápido inicial até a entrega das chaves, garantindo compra transparente de insumos diretamente com fornecedores parceiros locais e entrega com acabamento impecável.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Página Sobre Nós"));
              window.open(url, "_blank", "noopener,noreferrer");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg transition-all cursor-pointer min-h-[48px]"
          >
            <span>Conversar Diretamente com o Construtor no WhatsApp</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
};
