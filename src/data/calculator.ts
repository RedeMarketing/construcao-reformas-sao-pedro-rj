/**
 * Lógica e Parâmetros da Calculadora e Simulador de Construção e Reformas
 * Simulação preliminar para obras residenciais e comerciais em São Pedro da Aldeia RJ e Região dos Lagos
 * Empresa Legalizada com mais de 35 anos de experiência profissional
 */

export interface CalculatorInput {
  city: string;
  neighborhood: string;
  projectType: string;
  approximateAreaM2: number;
  roomsCount: number;
  bathroomsCount: number;
  finishLevel: "Padrão Econômico" | "Padrão Médio / Conforto" | "Alto Padrão / Premium";
  servicesIncluded: string[];
  timelineExpectation: "Urgente (início imediato)" | "Nos próximos 30 dias" | "Nos próximos 60 dias" | "Planejamento futuro";
  powerWaterStatus: "Água e luz ligados no terreno" | "Apenas água ligada" | "Apenas luz ligada" | "Nenhum ainda ligado";
  goal: string;
}

export interface CalculatorResult {
  projectCategory: string;
  approximateAreaM2: number;
  estimatedDurationMonths: {
    min: number;
    max: number;
  };
  estimatedTeamSize: {
    min: number;
    max: number;
  };
  mainStages: string[];
  supervisionNote: string;
  warrantyInfo: string;
  regionalTips: string[];
  technicalNotes: string[];
  disclaimer: string;
}

export const PROJECT_TYPES = [
  "Construção Nova do Zero (Casa Completa)",
  "Reforma Geral e Ampliação Residencial",
  "Reforma de Telhado, Madeiramento e Calhas",
  "Pisos, Porcelanatos e Revestimentos",
  "Área Gourmet, Churrasqueira e Piscina",
  "Elétrica e Hidráulica Geral",
  "Pintura, Textura e Impermeabilização",
  "Muros de Fechamento e Alvenaria Estrutural",
  "Reforma de Ponto Comercial / Loja",
  "Outro Projeto Sob Medida"
];

export const SERVICE_OPTIONS = [
  "Fundação e Alvenaria",
  "Telhado e Cobertura",
  "Instalação Elétrica Completa",
  "Instalação Hidráulica e Esgoto",
  "Porcelanato e Pisos",
  "Pintura Interna e Externa",
  "Impermeabilização Anti-Umidade",
  "Área Gourmet com Churrasqueira",
  "Gesso e Drywall",
  "Muros e Calçadas"
];

export const FINISH_LEVELS = [
  "Padrão Econômico",
  "Padrão Médio / Conforto",
  "Alto Padrão / Premium"
] as const;

export const TIMELINE_OPTIONS = [
  "Urgente (início imediato)",
  "Nos próximos 30 dias",
  "Nos próximos 60 dias",
  "Planejamento futuro"
];

export const POWER_WATER_OPTIONS = [
  "Água e luz ligados no terreno",
  "Apenas água ligada",
  "Apenas luz ligada",
  "Nenhum ainda ligado"
];

export const GOAL_OPTIONS = [
  "Quero construir minha casa do zero com chave na mão",
  "Quero reformar meu imóvel com contrato e equipe completa",
  "Quero trocar telhado / eliminar goteiras e infiltrações",
  "Quero fazer acabamento de alto padrão (porcelanatos/pintura)",
  "Quero construir área de lazer / gourmet com piscina",
  "Quero orçamento formal com construtor legalizado"
];

/**
 * Realiza o dimensionamento preliminar de cronograma executivo, equipe necessária
 * e etapas de obra com base nos parâmetros da construção/reforma.
 */
export function calculateConstructionSimulation(input: CalculatorInput): CalculatorResult {
  const area = Math.max(20, input.approximateAreaM2 || 100);
  const finish = input.finishLevel || "Padrão Médio / Conforto";
  const project = input.projectType || "Construção Nova do Zero (Casa Completa)";

  // 1. Duração estimada da obra em meses
  let minMonths = 2;
  let maxMonths = 4;

  if (project.includes("Construção Nova")) {
    if (area <= 70) {
      minMonths = 3;
      maxMonths = 5;
    } else if (area <= 150) {
      minMonths = 4;
      maxMonths = 7;
    } else if (area <= 250) {
      minMonths = 6;
      maxMonths = 10;
    } else {
      minMonths = 8;
      maxMonths = 14;
    }
  } else if (project.includes("Reforma Geral")) {
    minMonths = Math.max(2, Math.round(area * 0.03));
    maxMonths = Math.max(3, Math.round(area * 0.05) + 1);
  } else if (project.includes("Telhado")) {
    minMonths = 0.5;
    maxMonths = 1.5;
  } else if (project.includes("Pisos")) {
    minMonths = 0.5;
    maxMonths = 1.5;
  } else if (project.includes("Área Gourmet")) {
    minMonths = 1;
    maxMonths = 2.5;
  } else {
    minMonths = 1;
    maxMonths = 3;
  }

  // Ajuste fino por padrão de acabamento
  if (finish === "Alto Padrão / Premium") {
    maxMonths = Math.round(maxMonths * 1.2 * 10) / 10;
  }

  // 2. Equipe necessária estimada (profissionais fixos e rotativos)
  let minWorkers = 3;
  let maxWorkers = 5;

  if (area > 150 || project.includes("Construção Nova")) {
    minWorkers = 4;
    maxWorkers = 8;
  }
  if (area > 250) {
    minWorkers = 6;
    maxWorkers = 12;
  }

  // 3. Etapas principais
  const stages: string[] = [];
  if (project.includes("Construção Nova")) {
    stages.push("1. Demarcação, gabarito, terraplenagem e fundações sólidas");
    stages.push("2. Alvenaria estrutural, lajes e cintamento de concreto armado");
    stages.push("3. Cobertura com madeiramento de lei e telhas tratadas");
    stages.push("4. Infraestrutura hidráulica, esgoto sanitário e eletrodutos");
    stages.push("5. Reboco desempenado, impermeabilização dupla e contrapisos");
    stages.push("6. Assentamento de porcelanatos, louças, metais e esquadrias");
    stages.push("7. Emassamento, pintura lavável e limpeza pós-obra completa");
  } else if (project.includes("Telhado")) {
    stages.push("1. Avaliação de vigamento existente e desmontagem segura");
    stages.push("2. Instalação de estrutura reforçada tratada anti-cupim");
    stages.push("3. Aplicação de manta térmica aluminizada impermeável");
    stages.push("4. Fixação de telhas com amarração resistente aos ventos litorâneos");
    stages.push("5. Calhas em alumínio/galvanizado com rufos e vedação");
  } else {
    stages.push("1. Proteção de áreas existentes e demolições pontuais");
    stages.push("2. Regularização de paredes, contrapisos e reforço de bases");
    stages.push("3. Revisão de pontos elétricos e encanamentos embutidos");
    stages.push("4. Assentamento milimétrico de pisos e revestimentos cerâmicos");
    stages.push("5. Pintura com primer e tintas premium resistentes a fungos");
    stages.push("6. Instalação de acabamentos, testes de estanqueidade e entrega");
  }

  // 4. Dicas regionais específicas da Região dos Lagos / São Pedro da Aldeia
  const regionalTips: string[] = [
    `Em ${input.city}, as ferragens devem receber cobertura mínima de concreto reforçado de 3cm para proteção total contra maresia.`,
    `Impermeabilização dupla obrigatória nos alicerces/baldrames para conter a umidade ascendente típica de terrenos litorâneos.`,
    `Estrutura de telhados com travamento reforçado contra rajadas de vento frequentes na orla da Laguna de Araruama.`,
    `Recomenda-se instalação de reservatório de água (cisterna + caixa superior) dimensionado com margem de segurança para períodos de alta temporada.`
  ];

  return {
    projectCategory: project,
    approximateAreaM2: area,
    estimatedDurationMonths: {
      min: minMonths,
      max: maxMonths
    },
    estimatedTeamSize: {
      min: minWorkers,
      max: maxWorkers
    },
    mainStages: stages,
    supervisionNote: "Coordenação presencial diária pelo construtor com mais de 35 anos de experiência e mestre de obras qualificado.",
    warrantyInfo: "5 anos de garantia estrutural, contrato formalizado de prestação de serviços e cronograma executivo de etapas.",
    regionalTips,
    technicalNotes: [
      `Área simulada: ${area} m² no padrão "${finish}".`,
      `Equipe estimada: Mestre de obras, pedreiros oficiais, eletricista, encanador, telhadista, ladrilheiro e serventes.`,
      `Economia inteligente com compras diretas em distribuidoras parceiras de São Pedro da Aldeia e região.`
    ],
    disclaimer: "Estimativa preliminar referencial para planejamento financeiro e de cronograma. O projeto executivo definitivo, lista quantitativa de materiais e valor de mão de obra são detalhados após vistoria técnica presencial no imóvel pelo construtor."
  };
}
