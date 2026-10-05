import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FloatingWhatsApp } from "./components/WhatsAppButton/FloatingWhatsApp";
import { Home } from "./pages/Home";
import { CityPage } from "./pages/CityPage";
import { CitiesIndex } from "./pages/CitiesIndex";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfUsePage } from "./pages/TermsOfUsePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CITIES_DATA } from "./data/cities";
import { SERVICES_DATA } from "./data/services";
import { 
  updateDocumentMeta,
  getHomeMetadata,
  getCityMetadata,
  getCitiesIndexMetadata,
  getServiceMetadata,
  getServicesIndexMetadata,
  getCalculatorMetadata,
  getAboutMetadata,
  getContactMetadata,
  getPrivacyPolicyMetadata,
  getTermsOfUseMetadata,
  getNotFoundMetadata
} from "./seo/seoUtils";

export default function App() {
  // Normalize current path from window.location
  const getCleanPath = () => {
    if (typeof window === "undefined") return "/";
    let p = window.location.pathname;
    // Strip trailing slash if not root
    if (p.length > 1 && p.endsWith("/")) {
      p = p.slice(0, -1);
    }
    return p || "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getCleanPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getCleanPath());
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Global SEO effect: atualiza dinamicamente as tags canônicas, title e meta description a cada mudança de rota
  useEffect(() => {
    const path = currentPath;

    // 1. Home
    if (path === "/" || path === "") {
      updateDocumentMeta(getHomeMetadata());
      return;
    }

    // 2. Calculadora
    if (path === "/calculadora-de-construcao-e-reforma" || path === "/calculadora-de-poco-artesiano") {
      updateDocumentMeta(getCalculatorMetadata());
      return;
    }

    // 3. Índice de Cidades
    if (path === "/cidades") {
      updateDocumentMeta(getCitiesIndexMetadata());
      return;
    }

    // 4. Página específica de Cidade
    let cleanCitySlug = path.startsWith("/") ? path.slice(1) : path;
    if (cleanCitySlug.startsWith("cidades/")) {
      cleanCitySlug = cleanCitySlug.replace("cidades/", "");
    }
    const matchedCity = CITIES_DATA.find((c) => c.slug === cleanCitySlug);
    if (matchedCity) {
      updateDocumentMeta(getCityMetadata(matchedCity));
      return;
    }

    // 5. Índice de Serviços
    if (path === "/servicos") {
      updateDocumentMeta(getServicesIndexMetadata());
      return;
    }

    // 6. Página específica de Serviço
    if (path.startsWith("/servicos/")) {
      const serviceSlug = path.replace("/servicos/", "");
      const matchedService = SERVICES_DATA.find((s) => s.slug === serviceSlug);
      if (matchedService) {
        updateDocumentMeta(getServiceMetadata(matchedService));
        return;
      }
    }

    // 7. Sobre Nós
    if (path === "/sobre") {
      updateDocumentMeta(getAboutMetadata());
      return;
    }

    // 8. Contato
    if (path === "/contato") {
      updateDocumentMeta(getContactMetadata());
      return;
    }

    // 9. Páginas Legais
    if (path === "/politica-de-privacidade") {
      updateDocumentMeta(getPrivacyPolicyMetadata());
      return;
    }
    if (path === "/termos-de-uso") {
      updateDocumentMeta(getTermsOfUseMetadata());
      return;
    }

    // 10. 404 Not Found (com noindex: true)
    updateDocumentMeta(getNotFoundMetadata());
  }, [currentPath]);

  const navigateTo = (path: string) => {
    let clean = path;
    if (clean.length > 1 && clean.endsWith("/")) {
      clean = clean.slice(0, -1);
    }
    if (window.location.pathname !== clean) {
      window.history.pushState({}, "", clean);
    }
    setCurrentPath(clean);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route matching logic
  const renderCurrentRoute = () => {
    const path = currentPath;

    // 1. Home
    if (path === "/" || path === "") {
      return <Home onNavigate={navigateTo} />;
    }

    // 2. Calculator
    if (path === "/calculadora-de-construcao-e-reforma" || path === "/calculadora-de-poco-artesiano") {
      return <CalculatorPage onNavigate={navigateTo} />;
    }

    // 3. Cities Directory
    if (path === "/cidades") {
      return <CitiesIndex onNavigate={navigateTo} />;
    }

    // 4. City specific page (/sao-pedro-da-aldeia, /cidades/sao-pedro-da-aldeia, etc.)
    let cleanCitySlug = path.startsWith("/") ? path.slice(1) : path;
    if (cleanCitySlug.startsWith("cidades/")) {
      cleanCitySlug = cleanCitySlug.replace("cidades/", "");
    }
    const matchedCity = CITIES_DATA.find((c) => c.slug === cleanCitySlug);
    if (matchedCity) {
      return <CityPage city={matchedCity} onNavigate={navigateTo} />;
    }

    // 5. Services Directory
    if (path === "/servicos") {
      return <ServicesPage onNavigate={navigateTo} />;
    }

    // 6. Service detail page (/servicos/construcao-nova-do-zero, etc.)
    if (path.startsWith("/servicos/")) {
      const serviceSlug = path.replace("/servicos/", "");
      const matchedService = SERVICES_DATA.find((s) => s.slug === serviceSlug);
      if (matchedService) {
        return <ServiceDetailPage service={matchedService} onNavigate={navigateTo} />;
      }
    }

    // 7. About
    if (path === "/sobre") {
      return <AboutPage onNavigate={navigateTo} />;
    }

    // 8. Contact
    if (path === "/contato") {
      return <ContactPage onNavigate={navigateTo} />;
    }

    // 9. Legal pages
    if (path === "/politica-de-privacidade") {
      return <PrivacyPolicyPage onNavigate={navigateTo} />;
    }
    if (path === "/termos-de-uso") {
      return <TermsOfUsePage onNavigate={navigateTo} />;
    }

    // 10. 404 Not Found
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Global Header */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <div className="flex-1 w-full">
        {renderCurrentRoute()}
      </div>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
