import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { CalculatorSection } from "../components/Calculator/CalculatorSection";
import { SEO } from "../components/SEO";
import { getCalculatorMetadata } from "../seo/metadata";

interface CalculatorPageProps {
  onNavigate: (path: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  const meta = getCalculatorMetadata();
  const breadcrumbs = [
    { label: "Calculadora de Obra e Reforma" }
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Dinâmico e Canonical Oficial da Calculadora */}
      <SEO
        title={meta.title}
        description={meta.description}
        path="/calculadora-de-construcao-e-reforma"
        ogImage={meta.ogImage}
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
      </div>

      <CalculatorSection />
    </div>
  );
};
