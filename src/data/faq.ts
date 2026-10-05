/**
 * Perguntas Frequentes (FAQ) sobre Construção Civil e Reformas em São Pedro da Aldeia RJ
 */

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    question: "Quanto custa construir uma casa ou fazer uma reforma em São Pedro da Aldeia?",
    answer: "O custo varia conforme a metragem quadrada, o padrão de acabamento escolhido (básico, médio conforto ou alto padrão), o desnível do terreno e as condições do solo. Disponibilizamos nossa Calculadora de Obra para uma simulação prévia e realizamos visita técnica no imóvel para fornecer orçamento transparente e detalhado.",
    category: "Investimento"
  },
  {
    question: "Como funciona a contratação com construtor legalizado e quais as garantias?",
    answer: "Trabalhamos com contrato formal de prestação de serviços civis contendo cronograma físico-financeiro detalhado, medições por etapas concluídas e garantia legal de 5 anos para solidez e segurança estrutural (conforme o Código Civil Brasileiro), além de nota e recibos transparentes.",
    category: "Garantia e Legalidade"
  },
  {
    question: "Qual a fundação ideal para os solos de São Pedro da Aldeia e Região dos Lagos?",
    answer: "A região apresenta variações entre solos arenosos próximos à laguna e praias, e solos argilosos nas partes mais altas. Com mais de 35 anos de experiência local, executamos sapatas isoladas, radiers ou brocas com amarração de vigas baldrames impermeabilizadas, evitando qualquer tipo de trinca, fissura ou umidade ascendente.",
    category: "Engenharia e Solo"
  },
  {
    question: "Vocês realizam reformas com os moradores residindo no local?",
    answer: "Sim! Planejamos e isolamos as etapas de trabalho por cômodos ou setores com proteção de pisos, móveis e vedação contra poeira, além de limpeza diária do canteiro para garantir o conforto e a rotina da sua família durante todo o andamento da obra.",
    category: "Reformas"
  },
  {
    question: "Quem é responsável pela compra dos materiais de construção?",
    answer: "Oferecemos flexibilidade total: o cliente pode comprar diretamente com as lojas de materiais de sua preferência com nossa lista detalhada e descontos comerciais exclusivos que possuímos com fornecedores da região, ou optar pelo regime por empreitada com materiais inclusos.",
    category: "Materiais"
  },
  {
    question: "Quanto tempo demora em média uma construção nova do zero ou reforma completa?",
    answer: "Uma reforma residencial de médio porte costuma levar de 20 a 45 dias úteis. Já uma casa térrea completa de 100m² a 150m² leva entre 4 e 6 meses, rigorosamente acompanhada por cronograma compartilhado semanalmente com o proprietário.",
    category: "Prazos"
  },
  {
    question: "Quais profissionais compõem a equipe de vocês na obra?",
    answer: "Contamos com equipe própria completa e entrosada: mestre de obras experiente, pedreiros oficiais de fino acabamento, ajudantes, telhadistas, encanador predial, eletricista residencial/comercial, ladrilheiros para porcelanato e equipe de pintura com fino lixamento e massa corrida.",
    category: "Equipe"
  },
  {
    question: "Como proteger a construção contra os ventos fortes e a maresia da Região dos Lagos?",
    answer: "Utilizamos ferragens com cobrimento adequado de concreto, tubulações e conexões certificadas, amarrações de telhado com parafusos galvanizados de alta resistência e impermeabilização preventiva em todas as superfícies expostas às intempéries marítimas e lacustres.",
    category: "Qualidade Técnica"
  },
  {
    question: "Quais cidades e regiões vocês atendem a partir de São Pedro da Aldeia?",
    answer: "Com nossa base central em São Pedro da Aldeia, atendemos com rapidez toda a Região dos Lagos: Cabo Frio, Armação dos Búzios, Arraial do Cabo, Iguaba Grande e condomínios de toda a orla lacustre.",
    category: "Atendimento"
  }
];
