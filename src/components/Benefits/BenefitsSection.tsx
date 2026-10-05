import React, { useState } from "react";
import { 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Coins, 
  Users, 
  Award, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Hammer, 
  HardHat, 
  Building2, 
  Calculator
} from "lucide-react";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

interface BenefitsSectionProps {
  onNavigateToServices?: () => void;
  onNavigateToCalculator?: () => void;
}

interface ServicePhotoContext {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
  serviceSlug: string;
  serviceName: string;
  headline: string;
  contextDescription: string;
  keyFeatures: string[];
  technicalSpecs: { label: string; value: string }[];
}

const WORK_PHOTOS: ServicePhotoContext[] = [
  {
    id: "construcao-fundacao-alvenaria",
    title: "Fundações e Alvenaria Estrutural",
    category: "Obras do Zero",
    imageUrl: "/images/Fundação e alvenaria, Construção Civil e reformas em São Pedro da Aldeia e cidades vizinhas na Região dos Lagos RJ. (2).jpg",
    alt: "Fundação e alvenaria, Construção Civil e reformas em São Pedro da Aldeia e cidades vizinhas na Região dos Lagos RJ.",
    serviceSlug: "construcao-residencial-comercial",
    serviceName: "Construção Nova Residencial e Comercial",
    headline: "Fundações Sólidas e Alvenaria com Proteção Contra Maresia",
    contextDescription:
      "A fundação é a alma de qualquer construção segura. Em São Pedro da Aldeia e região litorânea, executamos sapatas, estacas e vigas baldrames com impermeabilização dupla e recobrimento reforçado de concreto, blindando a estrutura contra o salitre e a umidade do solo.",
    keyFeatures: [
      "Impermeabilização dupla de baldrame com emulsão asfáltica e manta",
      "Ferragem estrutural calculada com proteção anti-corrosão",
      "Alvenaria alinhada a prumo e nível laser com amarração reforçada",
      "Mestre de obras experiente acompanhando diariamente a execução"
    ],
    technicalSpecs: [
      { label: "Experiência", value: "+35 Anos de Construção" },
      { label: "Tipo de Obra", value: "Residencial e Comercial" },
      { label: "Garantia", value: "5 Anos de Garantia Estrutural" },
      { label: "Equipe", value: "Completa e Própria" }
    ]
  },
  {
    id: "telhado-madeira-cobertura",
    title: "Telhados, Vigamentos e Calhas",
    category: "Coberturas",
    imageUrl: "/images/Telhados, Vigamentos e Calhas em São Pedro da Aldeia rj e Regiao dos Lagos.jpg",
    alt: "Telhados, Vigamentos e Calhas em São Pedro da Aldeia rj e Regiao dos Lagos",
    serviceSlug: "telhados-coberturas-impermeabilizacao",
    serviceName: "Telhados, Coberturas e Calhas",
    headline: "Estruturas de Madeira Tratada e Manta Térmica Impermeável",
    contextDescription:
      "Construção e reforma completa de telhados coloniais, embutidos e termoacústicos. Empregamos madeiramento de lei tratado contra cupins e fungos, manta térmica de dupla face que reduz a temperatura interna em até 8°C e calhas galvanizadas com rufos vedados.",
    keyFeatures: [
      "Madeiramento nobre tratado com imunizante contra cupins",
      "Manta térmica aluminizada contra vazamentos e calor excessivo",
      "Amarração de telhas projetada para resistir aos ventos fortes da laguna",
      "Calhas e rufos com caimento perfeito sem acúmulo de folhas"
    ],
    technicalSpecs: [
      { label: "Tipos de Telha", value: "Cerâmica, Esmaltada, Concreto e Shingle" },
      { label: "Isolamento", value: "Manta Térmica Dupla Face" },
      { label: "Durabilidade", value: "Superior a 30 anos" },
      { label: "Vedação", value: "100% Estanqueidade Testada" }
    ]
  },
  {
    id: "assentamento-porcelanato-acabamento",
    title: "Assentamento de Porcelanatos e Pisos",
    category: "Acabamentos Finos",
    imageUrl: "/images/Acabamentos Finos Assentamento de Porcelanatos e Pisos Nivelamento a Laser e Alinhamento Milimétrico colocação de pisos e porcelanatos em São Pedro da Aldeia Rj e regiao dos lagos.jpg",
    alt: "Acabamentos Finos Assentamento de Porcelanatos e Pisos Nivelamento a Laser e Alinhamento Milimétrico colocação de pisos e porcelanatos em São Pedro da Aldeia Rj e regiao dos lagos",
    serviceSlug: "pisos-porcelanatos-revestimentos",
    serviceName: "Pisos, Porcelanatos e Revestimentos",
    headline: "Nivelamento a Laser e Alinhamento Milimétrico",
    contextDescription:
      "A colocação de pisos e porcelanatos exige precisão de mestre. Realizamos o nivelamento a laser do contrapiso, aplicação da argamassa correta para grandes formatos (AC-III) e uso de niveladores de tração para juntas perfeitas e sem dentes.",
    keyFeatures: [
      "Assentamento de porcelanatos retificados até 120x120cm",
      "Cortes especiais em 45 graus (meia esquadria) para nichos e bancadas",
      "Rejuntamento acrílico ou epóxi de alta durabilidade e fácil limpeza",
      "Proteção superficial do piso até a entrega final da obra"
    ],
    technicalSpecs: [
      { label: "Padrão", value: "Acabamento Fino / Alto Padrão" },
      { label: "Argamassas", value: "AC-II / AC-III Especial" },
      { label: "Precisão", value: "Nivelamento Eletrônico a Laser" },
      { label: "Garantia", value: "Aderência Total sem Desplacamento" }
    ]
  },
  {
    id: "instalacoes-eletrica-hidraulica",
    title: "Redes Elétricas e Hidráulicas",
    category: "Instalações",
    imageUrl: "/images/Instalação de quadros de distribuição com disjuntores termomagnéticos e DR em São Pedro da Aldeia RJ.png",
    alt: "Instalação de quadros de distribuição com disjuntores termomagnéticos e DR em São Pedro da Aldeia RJ",
    serviceSlug: "eletrica-hidraulica-predial",
    serviceName: "Instalações Elétricas e Hidráulicas",
    headline: "Sistemas Dimensionados Conforme Normas ABNT NBR 5410 e 5626",
    contextDescription:
      "A segurança oculta da sua casa. Instalamos quadros de distribuição com disjuntores termomagnéticos e DR para proteção total contra choques elétricos, além de encanamentos soldados e pressurizados sem risco de vazamentos embutidos nas paredes.",
    keyFeatures: [
      "Quadro de distribuição equilibrado por fases sem sobrecargas",
      "Teste hidrostático de pressão nas tubulações antes do fechamento",
      "Tubos de esgoto com ventilação técnica contra mau cheiro",
      "Infraestrutura completa para ar-condicionado e chuveiros potentes"
    ],
    technicalSpecs: [
      { label: "Norma Elétrica", value: "ABNT NBR 5410" },
      { label: "Norma Hidráulica", value: "ABNT NBR 5626" },
      { label: "Materiais", value: "Marcas Líderes Certificadas" },
      { label: "Teste", value: "Pressurização prévia de 24h" }
    ]
  }
];

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  onNavigateToServices,
  onNavigateToCalculator 
}) => {
  const [selectedServicePhoto, setSelectedServicePhoto] = useState<ServicePhotoContext | null>(null);
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState<boolean>(false);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % WORK_PHOTOS.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + WORK_PHOTOS.length) % WORK_PHOTOS.length);
  };

  const handleOpenBenefitsModal = () => {
    trackEvent("benefits_modal_opened", { source: "benefits_banner" });
    setIsBenefitsModalOpen(true);
  };

  const handleOpenPhotoContext = (photo: ServicePhotoContext) => {
    trackEvent("service_photo_clicked", { photo_id: photo.id, service: photo.serviceName });
    setSelectedServicePhoto(photo);
  };

  const handleWhatsAppForService = (serviceName: string) => {
    trackEvent("whatsapp_clicked", { source: "service_photo_modal", service: serviceName });
    const message = `Olá! Gostaria de um orçamento para o serviço de ${serviceName} para o meu imóvel em São Pedro da Aldeia e região.`;
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleScrollToGallery = () => {
    const galleryEl = document.getElementById("galeria-obras");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigateToServices) {
      onNavigateToServices();
    }
  };

  return (
    <section id="vantagens" className="w-full bg-white relative">
      
      {/* =======================================================================
          PARTE SUPERIOR: BANNER AZUL DE VANTAGENS DO CONSTRUTOR LEGALIZADO
          ======================================================================= */}
      <div className="relative bg-[#061d3d] text-white overflow-hidden py-12 sm:py-14 lg:py-16 border-b border-slate-200">
        
        {/* Foto de Fundo: Construção de qualidade com iluminação elegante */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80"
            alt="Obra de construção e reformas em São Pedro da Aldeia RJ"
            className="w-full h-full object-cover object-right lg:object-right-center"
            referrerPolicy="no-referrer"
          />
          {/* Gradiente azul marinho escuro fundido à esquerda para perfeita legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/95 sm:via-[#061d3d]/85 lg:via-[#061d3d]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Coluna 1: Títulos, Descrição e Botão */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.12] mb-4">
                Benefícios de um Empreiteiro <br />
                e Construtor Legalizado
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-100/95 leading-relaxed mb-6 font-normal max-w-md">
                Contratar uma empresa experiente na Região dos Lagos garante total domínio sobre o processo de construção, segurança jurídica com contrato formal, cumprimento fiel de prazos e acabamento de alto padrão.
              </p>
              <div>
                <button
                  onClick={handleOpenBenefitsModal}
                  id="benefits-saiba-mais-btn"
                  className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-sky-950/40 cursor-pointer"
                >
                  <span>Saiba Mais Sobre os Benefícios</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Coluna 2: Grade 2x2 com ícones */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6 py-2">
              
              {/* Coluna 1 da Grade */}
              <div className="flex flex-col space-y-6">
                
                {/* Item 1: Equipe Completa e Própria */}
                <button
                  onClick={handleOpenBenefitsModal}
                  className="group flex flex-col items-center text-center p-2 rounded-xl transition-all hover:bg-white/10 cursor-pointer focus:outline-none"
                  title="Clique para saber mais sobre nossa equipe completa"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Equipe completa <br />
                    e especializada
                  </span>
                </button>

                {/* Divisor horizontal sutil */}
                <div className="w-full h-[1px] bg-white/20" />

                {/* Item 2: Mais de 35 Anos de Experiência */}
                <button
                  onClick={handleOpenBenefitsModal}
                  className="group flex flex-col items-center text-center p-2 rounded-xl transition-all hover:bg-white/10 cursor-pointer focus:outline-none"
                  title="Clique para saber mais sobre nossa experiência"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Mais de 35 anos <br />
                    de experiência
                  </span>
                </button>

              </div>

              {/* Coluna 2 da Grade com divisor vertical */}
              <div className="flex flex-col space-y-6 border-l border-white/20 pl-4 sm:pl-6">
                
                {/* Item 3: Economia em Materiais */}
                <button
                  onClick={handleOpenBenefitsModal}
                  className="group flex flex-col items-center text-center p-2 rounded-xl transition-all hover:bg-white/10 cursor-pointer focus:outline-none"
                  title="Clique para saber mais sobre a economia de materiais"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <Coins className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Economia real <br />
                    sem desperdícios
                  </span>
                </button>

                {/* Divisor horizontal sutil */}
                <div className="w-full h-[1px] bg-white/20" />

                {/* Item 4: Garantia e Contrato Formal */}
                <button
                  onClick={handleOpenBenefitsModal}
                  className="group flex flex-col items-center text-center p-2 rounded-xl transition-all hover:bg-white/10 cursor-pointer focus:outline-none"
                  title="Clique para saber mais sobre o contrato e garantia"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    5 Anos de garantia <br />
                    e contrato formal
                  </span>
                </button>

              </div>

            </div>

            {/* Coluna 3 */}
            <div className="hidden lg:block lg:col-span-3" />

          </div>
        </div>
      </div>

      {/* =======================================================================
          PARTE INFERIOR: "NOSSOS SERVIÇOS" COM CARROSSEL DE FOTOS E CONTEXTO
          ======================================================================= */}
      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bloco à Esquerda */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-snug mb-3">
                Qualidade em Cada Detalhe da Reforma de Casa ou Obra Nova
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Confira alguns dos nossos projetos executados e veja por que somos a empresa de construção civil e reformas em São Pedro da Aldeia de maior prestígio e confiança técnica na Região dos Lagos.
              </p>
              <div>
                <button
                  onClick={handleScrollToGallery}
                  id="benefits-ver-mais-fotos-btn"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0284c7] border-2 border-[#0284c7] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
                >
                  <span>Ver Mais Fotos</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Bloco à Direita: CARROSSEL COM AS 4 FOTOS DAS OBRAS */}
            <div className="lg:col-span-8 relative">
              
              {/* Grade no Desktop */}
              <div className="hidden md:grid md:grid-cols-4 gap-3.5">
                {WORK_PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => handleOpenPhotoContext(photo)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 bg-slate-100 cursor-pointer"
                    title={`Clique para abrir os detalhes de: ${photo.title}`}
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.alt}
                      width={600}
                      height={450}
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                      <span className="text-[10px] uppercase font-bold text-[#38bdf8] tracking-wider">
                        {photo.category}
                      </span>
                      <p className="text-xs font-bold leading-tight line-clamp-2">
                        {photo.title}
                      </p>
                      <span className="text-[11px] text-sky-200 mt-1 flex items-center gap-1">
                        <span>Ver detalhes do serviço</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modo Carrossel Mobile */}
              <div className="md:hidden relative">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <div
                    onClick={() => handleOpenPhotoContext(WORK_PHOTOS[carouselIndex])}
                    className="relative aspect-[4/3] w-full bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={WORK_PHOTOS[carouselIndex].imageUrl}
                      alt={WORK_PHOTOS[carouselIndex].alt}
                      width={600}
                      height={450}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] uppercase font-extrabold text-[#38bdf8] tracking-wider">
                        {WORK_PHOTOS[carouselIndex].category}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {WORK_PHOTOS[carouselIndex].title}
                      </h4>
                      <p className="text-[11px] text-slate-200 mt-1 flex items-center gap-1 font-medium">
                        <span>Toque para ver o contexto deste serviço</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 px-1">
                  <div className="flex gap-1.5">
                    {WORK_PHOTOS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          carouselIndex === idx ? "w-6 bg-[#0284c7]" : "w-2 bg-slate-300"
                        }`}
                        aria-label={`Ir para foto ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* MODAL DE CONTEXTO DO SERVIÇO */}
      {selectedServicePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedServicePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-800 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedServicePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedServicePhoto.imageUrl}
                alt={selectedServicePhoto.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0284c7] text-white mb-2">
                    {selectedServicePhoto.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedServicePhoto.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0a2540] mb-3">
                  {selectedServicePhoto.headline}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedServicePhoto.contextDescription}
                </p>
              </div>

              <div className="mb-6 bg-sky-50/70 border border-sky-100 rounded-2xl p-4 sm:p-5">
                <h5 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
                  <span>Diferenciais Deste Procedimento Construtivo:</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {selectedServicePhoto.keyFeatures.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Garantias e Padrões Técnicos
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedServicePhoto.technicalSpecs.map((spec, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#0a2540] block mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleWhatsAppForService(selectedServicePhoto.serviceName)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Solicitar Orçamento deste Serviço</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {onNavigateToServices && (
                  <button
                    onClick={() => {
                      setSelectedServicePhoto(null);
                      onNavigateToServices();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                  >
                    <span>Ver Todos os Serviços</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL DE BENEFÍCIOS GERAIS */}
      {isBenefitsModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsBenefitsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-800 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#061d3d] p-6 sm:p-8 text-white relative">
              <button
                onClick={() => setIsBenefitsModalOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Por Que Contratar Construtor Legalizado?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                Descubra como mais de 35 anos de experiência prática e equipe completa garantem sua tranquilidade, seu patrimônio e a conclusão pontual da sua obra.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-sky-50 text-[#0284c7] flex-shrink-0">
                  <Users className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a2540] mb-1">
                    1. Mão de Obra Qualificada e Especializada
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Você não precisa se preocupar em contratar pedreiro hoje, eletricista amanhã e pintor depois. Oferecemos mão de obra qualificada com mestre de obras e profissionais experientes em alvenaria, telhado, impermeabilização, gesso, drywall, piscina, muro, pintura, elétrica e hidráulica trabalhando em perfeita sintonia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                  <Award className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a2540] mb-1">
                    2. Empresa Experiente na Região dos Lagos (+35 Anos)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Amplo conhecimento técnico sobre os tipos de solo da Região dos Lagos, regimes de ventos, maresia e todo o processo de construção para evitar trincas, infiltrações e retrabalhos caros.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-teal-50 text-teal-600 flex-shrink-0">
                  <Coins className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a2540] mb-1">
                    3. Economia Inteligente na Compra de Materiais
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lista quantitativa exata de materiais para evitar compras em excesso ou faltas repentinas. Descontos e condições exclusivas junto a lojas e fornecedores parceiros de São Pedro da Aldeia e região.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#0284c7] flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a2540] mb-1">
                    4. Contrato Formal e 5 Anos de Garantia
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sua obra respaldada por contrato claro com etapas, datas de entrega e pagamentos atrelados ao avanço físico. Garantia estrutural de 5 anos de acordo com o Código Civil brasileiro.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsBenefitsModalOpen(false);
                  const formEl = document.getElementById("orcamento-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                  } else {
                    handleWhatsAppForService("Construção e Reforma Geral");
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Solicitar Visita Técnica com o Construtor</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {onNavigateToCalculator && (
                <button
                  onClick={() => {
                    setIsBenefitsModalOpen(false);
                    onNavigateToCalculator();
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0a2540] border border-slate-200 px-5 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#0284c7]" />
                  <span>Simular Obra</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
