import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS_DATA } from "../../data/business";
import { CITIES_DATA } from "../../data/cities";
import { SERVICES_DATA } from "../../data/services";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      onNavigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return;
    }
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    trackEvent("whatsapp_clicked", { source: "footer" });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Rodapé"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="main-footer" className="relative bg-[#07172b] text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background Brand Image - Centralizada, 50% opacidade e nitidez suavizada integrada com #07172b */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src="/images/CONSTRUÇÃO E REFORMAS DE CASAS EM SAO PEDRO DA ALDEIA RJ.png"
          alt=""
          loading="lazy"
          decoding="async"
          width={600}
          height={400}
          className="w-auto h-auto max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90%] object-contain object-center opacity-50 blur-[2px] select-none"
        />
        {/* Fusão harmônica com o tom #07172b para bordas suaves */}
        <div className="absolute inset-0 bg-[#07172b]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172b] via-transparent to-[#07172b] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & NAP */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden bg-[#222426] shadow">
                <img
                  src="/images/CONSTRUÇÃO E REFORMAS DE CASAS EM SAO PEDRO DA ALDEIA RJ-favicon.png"
                  alt="CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ"
                  width={60}
                  height={60}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-black text-white uppercase tracking-tight">
                  CONSTRUÇÃO E REFORMAS
                </span>
                <span className="block text-[11px] font-extrabold text-[#38bdf8] uppercase tracking-wider">
                  EM SÃO PEDRO DA ALDEIA RJ
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empresa legalizada de construtor com equipe completa e mais de 35 anos de experiência profissional em obras residenciais e comerciais em São Pedro da Aldeia e Região dos Lagos.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_DATA.address.street}, {BUSINESS_DATA.address.neighborhood} - {BUSINESS_DATA.address.city} / {BUSINESS_DATA.address.stateCode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <button
                  onClick={handleWhatsApp}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {BUSINESS_DATA.phoneFormatted}
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_DATA.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_DATA.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_DATA.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              Nossos Serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <button
                    onClick={() => handleLinkClick(`/servicos/${srv.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{srv.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleLinkClick("/servicos")}
                  className="text-xs font-bold text-[#38bdf8] hover:underline cursor-pointer"
                >
                  Ver todos os serviços →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cidades Atendidas */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              Cidades Atendidas
            </h3>
            <ul className="space-y-2 text-sm">
              {CITIES_DATA.map((city) => (
                <li key={city.slug}>
                  <button
                    onClick={() => handleLinkClick(`/${city.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {city.name} - RJ
                    </span>
                    {city.isPrimary && (
                      <span className="text-[10px] bg-sky-900/60 text-[#38bdf8] px-1.5 py-0.5 rounded font-bold">
                        Sede
                      </span>
                    )}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleLinkClick("/cidades")}
                  className="text-xs font-bold text-[#38bdf8] hover:underline cursor-pointer"
                >
                  Ver cidades atendidas na região →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos & CTA */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              Acesso Rápido
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("/")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/calculadora-de-construcao-e-reforma")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-[#38bdf8] font-semibold"
                >
                  Calculadora de Obra e Reforma
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/#vantagens")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Vantagens do Construtor Legalizado
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/sobre")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Nossa Empresa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/contato")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Orçamento Direto no WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLinkClick("/politica-de-privacidade")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => handleLinkClick("/termos-de-uso")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <span className="text-slate-400">São Pedro da Aldeia - RJ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
