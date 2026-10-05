import React from "react";
import { Hero } from "../components/Hero/Hero";
import { ServicesBar } from "../components/Services/ServicesBar";
import { ExperienceAndForm } from "../components/LeadForm/ExperienceAndForm";
import { BenefitsSection } from "../components/Benefits/BenefitsSection";
import { CalculatorSection } from "../components/Calculator/CalculatorSection";
import { CitiesSection } from "../components/Cities/CitiesSection";
import { GallerySection } from "../components/Gallery/GallerySection";
import { FAQSection } from "../components/FAQ/FAQSection";
import { SEO } from "../components/SEO";
import { getHomeMetadata } from "../seo/metadata";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "../seo/schema";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const meta = getHomeMetadata();
  const businessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <main id="home-page" className="w-full">
      {/* SEO Dinâmico e Canonical Oficial da Home */}
      <SEO
        title={meta.title}
        description={meta.description}
        path="/"
        ogImage={meta.ogImage}
        jsonLd={[businessSchema, websiteSchema]}
      />

      {/* 1. Hero Principal */}
      <Hero
        onOpenQuoteModal={() => {
          document.getElementById("orcamento-form")?.scrollIntoView({ behavior: "smooth" });
        }}
        onNavigateToCalculator={() => onNavigate("/calculadora-de-construcao-e-reforma")}
      />

      {/* 2. Barra de Serviços em Destaque */}
      <ServicesBar
        onSelectService={(slug) => onNavigate(`/servicos/${slug}`)}
      />

      {/* 3. Seção Institucional & Formulário de Orçamento Rápido */}
      <ExperienceAndForm
        initialService="Construção Nova do Zero"
        initialCity="São Pedro da Aldeia"
      />

      {/* 4. Vantagens e Benefícios do Construtor Legalizado */}
      <BenefitsSection
        onNavigateToServices={() => onNavigate("/servicos")}
        onNavigateToCalculator={() => onNavigate("/calculadora-de-construcao-e-reforma")}
      />

      {/* 5. Calculadora e Simulador de Obra e Reforma */}
      <CalculatorSection
        defaultCity="São Pedro da Aldeia"
      />

      {/* 6. Cidades e Regiões Atendidas */}
      <CitiesSection
        onSelectCity={(slug) => onNavigate(`/${slug}`)}
      />

      {/* 7. Galeria de Fotos e Obras Recentes */}
      <GallerySection />

      {/* 8. Perguntas Frequentes (FAQ) */}
      <FAQSection />
    </main>
  );
};
