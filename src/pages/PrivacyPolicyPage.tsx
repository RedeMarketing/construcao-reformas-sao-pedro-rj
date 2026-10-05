import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { SEO } from "../components/SEO";
import { BUSINESS_DATA } from "../data/business";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Política de Privacidade" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial da Política de Privacidade */}
      <SEO
        title={`Política de Privacidade | ${BUSINESS_DATA.name}`}
        description="Saiba como tratamos suas informações e dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD)."
        path="/politica-de-privacidade"
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0a2540] mb-6">
          Política de Privacidade
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Última atualização: Setembro de 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">1. Coleta e Uso de Dados</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), o site <strong>{BUSINESS_DATA.name}</strong> coleta exclusivamente as informações fornecidas voluntariamente pelo usuário através de nossos formulários de simulação e orçamento de obra (nome, telefone/WhatsApp, cidade, bairro e características da construção ou reforma desejada).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">2. Finalidade do Tratamento</h2>
            <p>
              Os dados coletados têm a finalidade exclusiva de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Elaborar simulação técnica preliminar de custos e cronograma de obra ou reforma;</li>
              <li>Entrar em contato via WhatsApp ou telefone para agendamento de visita técnica ou apresentação de propostas orçamentárias solicitadas;</li>
              <li>Orientar quanto a requisitos construtivos e características do terreno na localidade informada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">3. Não Compartilhamento de Dados</h2>
            <p>
              Não comercializamos, alugamos nem repassamos informações pessoais a terceiros para fins de marketing ou publicidade não solicitada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">4. Segurança das Informações</h2>
            <p>
              Adotamos medidas técnicas adequadas para proteger os dados pessoais fornecidos contra acessos não autorizados ou divulgação indevida. O canal direto via WhatsApp é criptografado ponta a ponta pela plataforma da Meta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">5. Contato e Encarregado de Dados</h2>
            <p>
              Para solicitar a exclusão de seus dados de nossa base de contatos comerciais ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail <a href={`mailto:${BUSINESS_DATA.email}`} className="text-[#0284c7] font-semibold hover:underline">{BUSINESS_DATA.email}</a> ou pelo WhatsApp informado no site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
