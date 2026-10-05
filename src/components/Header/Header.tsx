import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronRight, Calculator, MapPin, Building2, Shield, Wrench } from "lucide-react";
import { CITIES_DATA } from "../../data/cities";
import { SERVICES_DATA } from "../../data/services";
import { BUSINESS_DATA } from "../../data/business";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCalculatorDropdownOpen, setIsCalculatorDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsCitiesDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsCalculatorDropdownOpen(false);

    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      if (currentPath !== "/") {
        onNavigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_clicked", { source: "header_cta" });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Header"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        isScrolled ? "shadow-md py-2.5" : "py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-0">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick("/", e)}
            id="header-logo-link"
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden bg-[#222426] shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/images/CONSTRUÇÃO E REFORMAS DE CASAS EM SAO PEDRO DA ALDEIA RJ-favicon.png"
                alt="CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[15px] sm:text-[17px] font-black tracking-tight text-[#0a2540] uppercase">
                CONSTRUÇÃO E REFORMAS
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#0284c7] uppercase">
                EM SÃO PEDRO DA ALDEIA RJ
              </span>
            </div>
          </a>

          {/* Desktop Navigation & Action */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-4 xl:gap-6 text-sm xl:text-[15px] font-semibold text-slate-700">
            <button
              onClick={(e) => handleNavClick("/", e)}
              id="nav-link-inicio"
              className={`relative py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                currentPath === "/" ? "text-[#0284c7]" : "text-slate-700"
              }`}
            >
              Início
              {currentPath === "/" && (
                <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[#0284c7] rounded-full" />
              )}
            </button>

            {/* Serviços Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleNavClick("/servicos", e)}
                id="nav-link-servicos"
                className={`flex items-center gap-1 py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                  currentPath.startsWith("/servicos") ? "text-[#0284c7]" : "text-slate-700"
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 max-h-[75vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 divide-y divide-slate-50">
                  <button
                    onClick={(e) => handleNavClick("/servicos", e)}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0284c7] hover:bg-sky-50 transition-colors block"
                  >
                    Todos os Serviços de Construção →
                  </button>
                  <div className="py-1">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.slug}
                        onClick={(e) => handleNavClick(`/servicos/${srv.slug}`, e)}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition-colors block leading-snug"
                      >
                        {srv.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cidades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCitiesDropdownOpen(true)}
              onMouseLeave={() => setIsCitiesDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleNavClick("/cidades", e)}
                id="nav-link-cidades"
                className={`flex items-center gap-1 py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                  currentPath === "/cidades" || CITIES_DATA.some(c => currentPath === `/${c.slug}`)
                    ? "text-[#0284c7]"
                    : "text-slate-700"
                }`}
              >
                <span>Cidades</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isCitiesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2.5 z-50">
                  <button
                    onClick={(e) => handleNavClick("/cidades", e)}
                    className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] border-b border-slate-100 hover:bg-sky-50 transition-colors"
                  >
                    Todas as Cidades Atendidas →
                  </button>
                  {CITIES_DATA.map((city) => (
                    <button
                      key={city.slug}
                      onClick={(e) => handleNavClick(`/${city.slug}`, e)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition-colors flex items-center justify-between"
                    >
                      <span>{city.name}</span>
                      {city.isPrimary && (
                        <span className="text-[10px] uppercase font-bold bg-sky-100 text-[#0284c7] px-1.5 py-0.5 rounded">
                          Base
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Calculadora de Obra Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCalculatorDropdownOpen(true)}
              onMouseLeave={() => setIsCalculatorDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleNavClick("/calculadora-de-construcao-e-reforma", e)}
                id="nav-link-calculadora"
                className={`flex items-center gap-1.5 py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                  currentPath === "/calculadora-de-construcao-e-reforma" ? "text-[#0284c7]" : "text-slate-700"
                }`}
              >
                <Calculator className="w-4 h-4 text-[#0284c7]" />
                <span>Calculadora de Obra</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isCalculatorDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  <a
                    href="#vantagens"
                    onClick={(e) => handleNavClick("/#vantagens", e)}
                    id="nav-link-vantagens"
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition-colors block cursor-pointer focus:outline-none"
                  >
                    Vantagens
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={(e) => handleNavClick("/sobre", e)}
              id="nav-link-sobre"
              className={`py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                currentPath === "/sobre" ? "text-[#0284c7]" : "text-slate-700"
              }`}
            >
              Sobre Nós
            </button>

            <button
              onClick={(e) => handleNavClick("/contato", e)}
              id="nav-link-contato"
              className={`py-1 cursor-pointer transition-colors hover:text-[#0284c7] focus:outline-none ${
                currentPath === "/contato" ? "text-[#0284c7]" : "text-slate-700"
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Right WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            id="header-whatsapp-btn"
            className="ml-6 xl:ml-8 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white px-4 h-[48px] rounded-none font-bold text-sm tracking-tight whitespace-nowrap transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex-shrink-0"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>Solicitar Orçamento</span>
          </button>
        </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 rounded-xl focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer"
              aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu Principal"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick("/")}
            className={`w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold min-h-[48px] flex items-center cursor-pointer ${
              currentPath === "/" ? "bg-sky-50 text-[#0284c7]" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Início
          </button>

          <button
            onClick={() => handleNavClick("/servicos")}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 min-h-[48px] flex items-center cursor-pointer"
          >
            Serviços
          </button>

          <button
            onClick={() => handleNavClick("/cidades")}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 min-h-[48px] flex items-center cursor-pointer"
          >
            Cidades Atendidas
          </button>

          <button
            onClick={() => handleNavClick("/calculadora-de-construcao-e-reforma")}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 min-h-[48px] cursor-pointer"
          >
            <Calculator className="w-5 h-5 text-[#0284c7] flex-shrink-0" />
            <span>Calculadora de Obra e Reforma</span>
          </button>

          <a
            href="#vantagens"
            onClick={(e) => handleNavClick("/#vantagens", e)}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 min-h-[48px] flex items-center cursor-pointer"
          >
            Vantagens
          </a>

          <button
            onClick={() => handleNavClick("/sobre")}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 min-h-[48px] flex items-center cursor-pointer"
          >
            Sobre Nós
          </button>

          <button
            onClick={() => handleNavClick("/contato")}
            className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 min-h-[48px] flex items-center cursor-pointer"
          >
            Contato
          </button>

          {/* Quick services links in mobile menu */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 block mb-1">
              Páginas de Serviços:
            </span>
            <div className="grid grid-cols-1 gap-1 px-1 max-h-48 overflow-y-auto">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.slug}
                  onClick={() => handleNavClick(`/servicos/${srv.slug}`)}
                  className="text-left px-3 py-2.5 text-xs text-slate-700 hover:text-[#0284c7] rounded-lg hover:bg-slate-50 flex items-center justify-between min-h-[40px] cursor-pointer"
                >
                  <span className="truncate">{srv.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick city links in mobile menu */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 block mb-1">
              Atendimento Regional:
            </span>
            <div className="grid grid-cols-2 gap-1.5 px-1">
              {CITIES_DATA.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => handleNavClick(`/${city.slug}`)}
                  className="text-left px-3 py-2 text-xs text-slate-600 hover:text-[#0284c7] rounded-lg hover:bg-slate-50 min-h-[40px] flex items-center cursor-pointer"
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white py-3.5 rounded-xl font-bold text-sm shadow-md min-h-[48px] cursor-pointer transition-all"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Fale Conosco pelo WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
