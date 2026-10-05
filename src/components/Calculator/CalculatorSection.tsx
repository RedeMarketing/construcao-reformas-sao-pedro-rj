import React, { useState } from "react";
import {
  Calculator as CalcIcon,
  MapPin,
  Home,
  Users,
  Bath,
  ArrowRight,
  RotateCcw,
  Check,
  AlertCircle,
  Clock,
  Hammer,
  ShieldCheck,
  Calendar,
  Sparkles
} from "lucide-react";
import {
  CalculatorInput,
  CalculatorResult,
  calculateConstructionSimulation,
  PROJECT_TYPES,
  SERVICE_OPTIONS,
  FINISH_LEVELS,
  TIMELINE_OPTIONS,
  POWER_WATER_OPTIONS,
  GOAL_OPTIONS
} from "../../data/calculator";
import { CITIES_DATA } from "../../data/cities";
import { buildWhatsAppUrl, buildCalculatorWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

interface CalculatorSectionProps {
  defaultCity?: string;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  defaultCity = "São Pedro da Aldeia",
}) => {
  const [inputs, setInputs] = useState<CalculatorInput>({
    city: defaultCity,
    neighborhood: "",
    projectType: "Construção Nova do Zero (Casa Completa)",
    approximateAreaM2: 120,
    roomsCount: 4,
    bathroomsCount: 2,
    finishLevel: "Padrão Médio / Conforto",
    servicesIncluded: ["Fundação e Alvenaria", "Telhado e Cobertura", "Instalação Elétrica Completa", "Porcelanato e Pisos", "Pintura Interna e Externa"],
    timelineExpectation: "Nos próximos 30 dias",
    powerWaterStatus: "Água e luz ligados no terreno",
    goal: "Quero construir minha casa do zero com chave na mão",
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const toggleService = (srv: string) => {
    setInputs((prev) => {
      const exists = prev.servicesIncluded.includes(srv);
      if (exists) {
        return { ...prev, servicesIncluded: prev.servicesIncluded.filter((s) => s !== srv) };
      } else {
        return { ...prev, servicesIncluded: [...prev.servicesIncluded, srv] };
      }
    });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("calculator_completed", {
      city: inputs.city,
      project: inputs.projectType,
    });
    const calculated = calculateConstructionSimulation(inputs);
    setResult(calculated);
    setHasCalculated(true);

    setTimeout(() => {
      const resElem = document.getElementById("resultado-calculadora");
      if (resElem) {
        resElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleWhatsAppRedirect = () => {
    if (!result) return;
    trackEvent("whatsapp_clicked", { source: "calculator_result_btn" });
    const message = buildCalculatorWhatsAppMessage(inputs, result);
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setHasCalculated(false);
    setResult(null);
  };

  return (
    <section id="calculadora" className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-sky-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0a2540] tracking-tight mb-3 break-words">
            CALCULADORA DE CONSTRUÇÃO E REFORMA
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-[#0284c7] mb-2">
            Simule o Processo de Construção da sua Obra ou Reforma de Casa
          </h3>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Planeje a construção de Casas em São Pedro da Aldeia ou sua reforma de casa com previsibilidade total. Simule cronograma, dimensionamento de equipe e as fases de alvenaria, telhado, impermeabilização, gesso, drywall, piscina, muro, pintura, elétrica e hidráulica conforme as melhores práticas da construção civil.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            *Planejamento preliminar com base em padrões de engenharia civil e mais de 35 anos de experiência prática de construtor legalizado.
          </p>
        </div>

        {/* Card Container */}
        <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-8 lg:p-10 transition-all">
          {!hasCalculated ? (
            <form onSubmit={handleCalculate} className="space-y-8">
              
              {/* 1. Localização */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <MapPin className="w-5 h-5 text-[#0284c7]" />
                  1. Localização da Obra / Imóvel
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Cidade
                    </label>
                    <select
                      value={inputs.city}
                      onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    >
                      {CITIES_DATA.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name} {c.isPrimary ? "(Base Principal)" : ""}
                        </option>
                      ))}
                      <option value="Outra localidade">Outra localidade vizinha</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Bairro ou Condomínio
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Centro, Balneário São Pedro, Praia Linda..."
                      value={inputs.neighborhood}
                      onChange={(e) => setInputs({ ...inputs, neighborhood: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Tipo de Projeto e Metragem */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Home className="w-5 h-5 text-[#0284c7]" />
                  2. Características e Dimensões do Projeto
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Tipo de Serviço / Projeto
                    </label>
                    <select
                      value={inputs.projectType}
                      onChange={(e) => setInputs({ ...inputs, projectType: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center justify-between">
                      <span>Área Estimada Construída ou Reformada</span>
                      <span className="text-[#0284c7] font-bold text-sm">{inputs.approximateAreaM2} m²</span>
                    </label>
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={inputs.approximateAreaM2}
                        onChange={(e) => setInputs({ ...inputs, approximateAreaM2: parseInt(e.target.value) || 50 })}
                        className="w-full accent-[#0284c7] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center justify-between">
                      <span>Quantidade de Cômodos / Ambientes</span>
                      <span className="text-[#0284c7] font-bold text-sm">{inputs.roomsCount}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-slate-400" />
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={inputs.roomsCount}
                        onChange={(e) => setInputs({ ...inputs, roomsCount: parseInt(e.target.value) || 1 })}
                        className="w-full accent-[#0284c7] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center justify-between">
                      <span>Quantidade de Banheiros</span>
                      <span className="text-[#0284c7] font-bold text-sm">{inputs.bathroomsCount}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-slate-400" />
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={inputs.bathroomsCount}
                        onChange={(e) => setInputs({ ...inputs, bathroomsCount: parseInt(e.target.value) || 1 })}
                        className="w-full accent-[#0284c7] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Padrão de Acabamento e Serviços */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Sparkles className="w-5 h-5 text-[#0284c7]" />
                  3. Padrão Desejado e Serviços Incluídos
                </h3>

                {/* Nível de Acabamento */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Padrão de Acabamento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {FINISH_LEVELS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setInputs({ ...inputs, finishLevel: lvl })}
                        className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                          inputs.finishLevel === lvl
                            ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Serviços a incluir */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Selecione os serviços que farão parte da sua obra:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {SERVICE_OPTIONS.map((srv) => {
                      const active = inputs.servicesIncluded.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            active
                              ? "bg-sky-50 border-sky-400 text-[#0284c7]"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <span>{srv}</span>
                          {active && <Check className="w-3.5 h-3.5 text-[#0284c7]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 4. Prazos e Condições */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Clock className="w-5 h-5 text-[#0284c7]" />
                  4. Prazos e Detalhes Operacionais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Previsão de Início
                    </label>
                    <select
                      value={inputs.timelineExpectation}
                      onChange={(e) => setInputs({ ...inputs, timelineExpectation: e.target.value as any })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    >
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Infraestrutura no Local
                    </label>
                    <select
                      value={inputs.powerWaterStatus}
                      onChange={(e) => setInputs({ ...inputs, powerWaterStatus: e.target.value as any })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    >
                      {POWER_WATER_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Objetivo Principal
                    </label>
                    <select
                      value={inputs.goal}
                      onChange={(e) => setInputs({ ...inputs, goal: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-base sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none min-h-[48px]"
                    >
                      {GOAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Botão de Calcular */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="calcular-simulacao-btn"
                  className="w-full py-4 px-8 bg-[#0284c7] hover:bg-[#0369a1] text-white text-base sm:text-lg font-bold rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 active:scale-98 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <CalcIcon className="w-5 h-5" />
                  <span>Calcular Estimativa de Obra e Reforma</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            /* Tela de Resultados da Simulação */
            <div id="resultado-calculadora" className="space-y-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a2540]">
                    PLANEJAMENTO PRELIMINAR DA SUA OBRA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Local: {inputs.city} ({inputs.neighborhood || "Região indicada"}) • {inputs.approximateAreaM2} m² • {inputs.finishLevel}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0284c7] p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Nova Simulação
                </button>
              </div>

              {/* Grid com Parâmetros Calculados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* 1. Duração Estimada */}
                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">
                    Prazo Estimado de Execução
                  </span>
                  <div className="my-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#0a2540]">
                      {result?.estimatedDurationMonths.min} a {result?.estimatedDurationMonths.max}
                    </span>
                    <span className="text-sm font-bold text-slate-500 ml-1">meses</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Cronograma por etapas para {inputs.approximateAreaM2} m² no padrão {inputs.finishLevel}.
                  </p>
                </div>

                {/* 2. Equipe Necessária */}
                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">
                    Equipe Especializada
                  </span>
                  <div className="my-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0284c7]">
                      {result?.estimatedTeamSize.min} a {result?.estimatedTeamSize.max} profissionais
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Mestre de obras com +35 anos de experiência, pedreiros, eletricista, encanador e acabadores.
                  </p>
                </div>

                {/* 3. Garantia e Formalização */}
                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">
                    Garantia e Segurança
                  </span>
                  <div className="my-2 flex items-center gap-2">
                    <ShieldCheck className="w-8 h-8 text-[#0284c7]" />
                    <span className="text-xl sm:text-2xl font-black text-[#0a2540]">
                      5 Anos Legalizados
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">
                    {result?.warrantyInfo}
                  </p>
                </div>

              </div>

              {/* Etapas Principais */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-[#0a2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-[#0284c7]" />
                  Etapas Executivas Previstas para seu Projeto:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {result?.mainStages.map((stage, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70">
                      <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                      <span>{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recomendações Técnicas Regionais */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">
                      Recomendações Técnicas para {inputs.city} e Região dos Lagos:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-amber-950">
                      {result?.regionalTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bloco de Conversão Principal para WhatsApp */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2540] text-white text-center shadow-xl border border-slate-800">
                <h4 className="text-xl sm:text-2xl font-black tracking-tight mb-2 uppercase">
                  SOLICITAR VISITA TÉCNICA E ORÇAMENTO FORMAL
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
                  Nossa equipe de construtor legalizado com mais de 35 anos de experiência analisa sua simulação e agenda uma visita presencial para elaborar o orçamento executivo detalhado.
                </p>

                <button
                  onClick={handleWhatsAppRedirect}
                  id="whatsapp-enviar-simulacao-btn"
                  className="inline-flex items-center justify-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white text-base sm:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.814h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.8zm3.36 8.232c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.635-.68-2.684-2.348-2.766-2.457-.082-.109-.66-8.77-.66-1.674 0-.797.412-1.19.557-1.336.145-.145.316-.182.422-.182s.212.002.304.007c.099.005.231-.038.361.275.144.348.493 1.202.535 1.29.043.087.072.189.014.304-.058.116-.087.189-.174.29-.087.101-.183.226-.261.304-.087.087-.178.182-.077.355.101.174.449.742.964 1.201.662.59 1.221.774 1.394.86.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.391-.087.159.058 1.01.476 1.184.563.174.087.29.13.333.203.043.073.043.42-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.954-1.399C8.423 21.493 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  <span>ENVIAR SIMULAÇÃO PELO WHATSAPP</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
