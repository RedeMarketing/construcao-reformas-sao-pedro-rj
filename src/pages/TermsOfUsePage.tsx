import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { SEO } from "../components/SEO";
import { BUSINESS_DATA } from "../data/business";

interface TermsOfUsePageProps {
  onNavigate: (path: string) => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: "Termos de Uso" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial dos Termos de Uso */}
      <SEO
        title={`Termos de Uso | ${BUSINESS_DATA.name}`}
        description="Termos e condições de uso do site, da calculadora de obra e das simulações de construção e reformas."
        path="/termos-de-uso"
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0a2540] mb-6">
          Termos de Uso
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Última atualização: Setembro de 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">1. Natureza do Conteúdo e da Calculadora de Obra</h2>
            <p>
              As informações disponibilizadas neste site e os resultados fornecidos pela <strong>Calculadora de Obra e Reforma</strong> constituem <em>simulações estimativas preliminares</em> destinadas exclusivamente a orientar o planejamento inicial do proprietário ou contratante.
            </p>
            <p className="mt-2">
              O orçamento definitivo, quantitativo exato de materiais, dimensionamento estrutural e cronograma físico-financeiro detalhado dependem de vistoria técnica presencial no terreno ou imóvel em São Pedro da Aldeia ou cidades da Região dos Lagos, além da análise de eventuais projetos arquitetônicos e estruturais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">2. Contrato Formal e Garantia Estrutural</h2>
            <p>
              Toda execução de obra nova, reforma residencial ou comercial é formalizada por meio de contrato de prestação de serviços com construtor legalizado, especificando escopo dos serviços, prazos de entrega, medições por etapas concluídas e garantia legal de 5 anos para solidez e segurança da edificação (conforme o Artigo 618 do Código Civil Brasileiro).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo textual, arquitetura de dados e identidade visual deste site pertencem aos idealizadores do projeto <strong>{BUSINESS_DATA.name}</strong>, sendo proibida a reprodução sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a2540] mb-2">4. Atendimento e Contato</h2>
            <p>
              Para esclarecimentos sobre estes Termos de Uso, solicitações contratuais ou atendimento direto com nossa equipe, entre em contato através do e-mail oficial <a href={`mailto:${BUSINESS_DATA.email}`} className="text-[#0284c7] font-semibold hover:underline">{BUSINESS_DATA.email}</a> ou via WhatsApp pelo número <strong>{BUSINESS_DATA.whatsappFormatted}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
