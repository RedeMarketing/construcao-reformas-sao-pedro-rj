/**
 * Dados de Cidades e SEO Local Regional
 * 5 Principais Cidades em Torno de São Pedro da Aldeia RJ
 * Construtor Legalizado com mais de 35 anos de experiência profissional
 */

export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  isPrimary: boolean;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  h1Title: string;
  h1Subtext: string;
  heroText: string;
  localGeology: string;
  waterTableNotes: string;
  recommendedDepthEstimate: string;
  neighborhoods: string[];
  condominiums: string[];
  highDemandZones: string[];
  propertyTypes: string[];
  keyLocalBenefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const CITIES_DATA: CityData[] = [
  {
    slug: "sao-pedro-da-aldeia",
    name: "São Pedro da Aldeia",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: true,
    h1Title: "Construção e Reformas em Condomínios em São Pedro da Aldeia RJ",
    h1Subtext: "Base operacional central com equipe completa e mais de 35 anos de tradição. Construção de casas do zero, reformas residenciais e comerciais, telhados e acabamentos em condomínios fechados e todos os bairros aldeenses.",
    seoTitle: "Construção e Reformas em Condomínios em São Pedro da Aldeia RJ | Mais de 35 Anos",
    seoDescription: "Empresa legalizada de construtor em São Pedro da Aldeia RJ. Construção de casas do zero, reformas gerais em condomínios fechados, telhados, alvenaria e acabamentos. Equipe completa há mais de 35 anos.",
    tagline: "Base operacional central com equipe completa e mais de 35 anos de tradição",
    heroText: "Construção de casas do zero e reformas em geral em São Pedro da Aldeia. Construtor legalizado com equipe completa de pedreiros, mestres de obras, eletricistas, encanadores e pintores para entregar sua obra com segurança e garantia.",
    localGeology: "O relevo e o solo de São Pedro da Aldeia exigem conhecimento técnico apurado sobre fundações em solo argilo-arenoso e zonas lacustres. Nossas obras empregam sapatas impermeabilizadas, vigas baldrames reforçadas e drenagem adequada para evitar umidade ascendente e garantir estabilidade estrutural definitiva.",
    waterTableNotes: "A proximidade com a Laguna de Araruama exige o uso de cimento de alta resistência a sulfatos e aditivos impermeabilizantes na argamassa para blindar a alvenaria contra o salitre e a umidade do solo.",
    recommendedDepthEstimate: "Fundações profundas ou sapatas corridas conforme laudo de sondagem local",
    neighborhoods: [
      "Centro",
      "Bela Vista",
      "Nova São Pedro",
      "Fluminense",
      "Estação",
      "São José",
      "Porto da Aldeia",
      "Praia Linda",
      "Balneário das Conchas",
      "Poço Fundo",
      "Recanto do Sol",
      "Morro do Milagre",
      "Campo Redondo",
      "Arrastão das Pedras",
      "Vila São Pedro",
      "Jardim Primavera",
      "Colina",
      "Sudoeste",
      "Alecrim",
      "Cruz"
    ],
    condominiums: [
      "Condomínio Blue Garden",
      "Condomínio Reviver I, II e III",
      "Condomínio Reserva dos Ventos",
      "Condomínio Quinta da Aldeia",
      "Condomínio Solar da Aldeia",
      "Condomínio Cisne Branco",
      "Condomínio Viverde São Pedro",
      "Condomínio Mansões da Colina",
      "Loteamento Nova São Pedro",
      "Condomínio Aldeia do Sol"
    ],
    highDemandZones: [
      "Bairro Nobre Nova São Pedro (Polo administrativo e residencial)",
      "Eixo Rodovia RJ-140 (Forte expansão de condomínios horizontais)",
      "Orla da Praia Linda e Balneário das Conchas (Residências de praia e alto padrão)",
      "Bela Vista e Fluminense (Área urbana consolidada com alta procura por reformas)"
    ],
    propertyTypes: [
      "Casas residenciais em loteamentos e condomínios fechados",
      "Residências térreas e sobrados com área gourmet e piscina",
      "Reformas de casas antigas no Centro e bairros tradicionais",
      "Prédios comerciais, lojas e clínicas no polo comercial",
      "Galpões industriais e comerciais ao longo da RJ-140"
    ],
    keyLocalBenefits: [
      "Empresa legalizada de construtor com base operacional própria e mais de 35 anos de tradição comprovada",
      "Equipe completa de profissionais: mestres de obra, pedreiros, encanadores e eletricistas",
      "Atendimento prioritário em todos os condomínios fechados e bairros de São Pedro da Aldeia",
      "Contrato transparente com cronograma de etapas e garantia estrutural por escrito"
    ],
    faqs: [
      {
        question: "Vocês realizam obras completas desde a fundação até o acabamento em São Pedro?",
        answer: "Sim! Trabalhamos na modalidade 'chave na mão' ou por etapas específicas. Nossa equipe completa executa desde a terraplanagem, fundação e alvenaria até a instalação elétrica, hidráulica, pintura e assentamento de porcelanatos."
      },
      {
        question: "Como evitar problemas de umidade e salitre nas construções em São Pedro da Aldeia?",
        answer: "Com mais de 35 anos construindo na região, aplicamos impermeabilização química dupla nas vigas baldrames com argamassa polimérica e emulsão asfáltica, além de impermeabilizar as primeiras três fiadas de tijolos, evitando que a umidade suba para as paredes."
      },
      {
        question: "A equipe é registrada e a empresa é legalizada?",
        answer: "Sim, somos empresa legalizada com emissão de contrato de prestação de serviços, responsabilidade técnica e garantia legal, oferecendo total tranquilidade para você e sua família."
      }
    ]
  },
  {
    slug: "cabo-frio",
    name: "Cabo Frio",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas em Condomínios em Cabo Frio e Tamoios RJ",
    h1Subtext: "Especialistas em construções residenciais e reformas reforçadas contra a maresia. Mão de obra legalizada e equipe completa atuando no 1º Distrito e em condomínios de Tamoios.",
    seoTitle: "Construção e Reformas em Condomínios em Cabo Frio RJ | Construtor e Equipe",
    seoDescription: "Serviços de construção civil e reformas em condomínios em Cabo Frio e Tamoios RJ. Casas do zero, revitalização de fachadas, reformas de telhados e porcelanato. Mais de 35 anos.",
    tagline: "Atendimento especializado em Cabo Frio e no 2º Distrito (Tamoios)",
    heroText: "Executamos construções residenciais e reformas completas em Cabo Frio e Tamoios. Soluções estruturais e acabamentos reforçados contra a intensa maresia litorânea.",
    localGeology: "O solo predominantemente arenoso e a presença de lençol freático alto em muitas áreas de Cabo Frio demandam baldrames robustos com concreto usinado vibrado e armaduras de aço com cobrimento reforçado de no mínimo 3,5 cm contra a corrosão marítima.",
    waterTableNotes: "A maresia contínua exige ferragens com tratamento anticorrosivo, pinturas com tinta emborrachada de alta elasticidade e esquadrias de alumínio com vedação reforçada.",
    recommendedDepthEstimate: "Sapatas isoladas com vigamento travado ou radier conforme o tipo de carga",
    neighborhoods: [
      "Praia do Forte",
      "Passagem",
      "Braga",
      "São Cristóvão",
      "Peró",
      "Ogiva",
      "Portinho",
      "Novo Portinho",
      "Vila Nova",
      "Jardim Esperança",
      "Palmeiras",
      "Tamoios (Unamar, Aquarius, Santo Antônio)"
    ],
    condominiums: [
      "Condomínio Terras Alphaville Cabo Frio",
      "Condomínio dos Pássaros",
      "Condomínio Bosque do Peró",
      "Condomínio Dunas do Peró",
      "Condomínio Verão Vermelho (Tamoios)",
      "Condomínio Santa Margarida",
      "Condomínio Viva Boa Vista",
      "Condomínio Marina dos Búzios",
      "Condomínio Náutico Cabo Frio"
    ],
    highDemandZones: [
      "Novo Portinho e Passagem (Bairros nobres com residências e clínicas)",
      "Corredor de Tamoios e Unamar (Intensa expansão imobiliária de casas e condomínios)",
      "Peró e Ogiva (Casas de veraneio e residências com canal navegável)"
    ],
    propertyTypes: [
      "Casas de veraneio e residências fixas",
      "Pousadas, hotéis e restaurantes no polo turístico",
      "Apartamentos precisando de modernização interna",
      "Condomínios horizontais em Tamoios e Unamar"
    ],
    keyLocalBenefits: [
      "Construção preparada com materiais resistentes ao salitre e maresia",
      "Reformas rápidas para preparar imóveis para temporada de verão",
      "Equipe pontual que mantém o local de trabalho limpo e organizado",
      "Mais de 35 anos executando obras de alto e médio padrão na região"
    ],
    faqs: [
      {
        question: "Vocês atendem o segundo distrito de Cabo Frio (Tamoios / Unamar)?",
        answer: "Sim! Nossa equipe atende todo o município de Cabo Frio, incluindo o centro urbano e os bairros de Tamoios, Unamar, Aquarius e Santo Antônio com transporte próprio de materiais e equipe."
      },
      {
        question: "Qual o melhor acabamento para casas de praia em Cabo Frio?",
        answer: "Recomendamos porcelanatos retificados acetinados ou rústicos nas áreas externas, tintas emborrachadas hidrorrepelentes nas fachadas e esquadrias de alumínio com pintura eletrostática para máxima longevidade."
      }
    ]
  },
  {
    slug: "armacao-dos-buzios",
    name: "Armação dos Búzios",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas de Casas em Armação dos Búzios RJ",
    h1Subtext: "Construções do zero, reformas finas de casas e pousadas com a estética buziana rústico-chique. Piscinas de alvenaria, decks, telhados nobres e áreas gourmet em condomínios de alto padrão.",
    seoTitle: "Construção e Reformas em Condomínios em Armação dos Búzios RJ | Alto Padrão",
    seoDescription: "Construção de casas e reformas de pousadas em Búzios RJ. Piscinas, decks, áreas gourmet, telhados coloniais e acabamentos refinados com construtor experiente.",
    tagline: "Obras residenciais e pousadas de alto padrão na península",
    heroText: "Projetos de construção e reforma com estilo rústico-chique e contemporâneo em Armação dos Búzios. Criamos espaços de lazer integrados, pergolados, piscinas e acabamentos finos.",
    localGeology: "O relevo acidentado e rochoso da península de Búzios frequentemente requer contenção de encostas, muros de arrimo em alvenaria ciclópica ou concreto armado e fundações ancoradas em rocha sã.",
    waterTableNotes: "A arquitetura buziana valoriza o uso de madeiramento nobre, telhas coloniais, pedras naturais (como São Tomé) e grandes vãos de vidro que harmonizam com a paisagem.",
    recommendedDepthEstimate: "Fundações diretas em rocha ou sapatas escalonadas em aclive",
    neighborhoods: [
      "Geribá",
      "Ferradura",
      "Manguinhos",
      "João Fernandes",
      "Ossos",
      "Brava",
      "Rasa",
      "Marina",
      "Tucuns",
      "Canto",
      "Tartaruga",
      "Baía Formosa"
    ],
    condominiums: [
      "Condomínio Ferradura Hills",
      "Condomínio Caravelas",
      "Condomínio Bosque de Geribá",
      "Condomínio Marina Residence",
      "Condomínio Búzios Country Club",
      "Condomínio Pedra da Brava",
      "Condomínio Enseada da Ferradura",
      "Condomínio Altos de Manguinhos",
      "Condomínio Baía Formosa Resort"
    ],
    highDemandZones: [
      "Geribá e Ferradura (Mansões e residências em condomínios fechados de luxo)",
      "Manguinhos e Marina (Expansão de condomínios náuticos e áreas gourmet)",
      "Rasa e Baía Formosa (Zona de rápida expansão imobiliária e novos loteamentos)"
    ],
    propertyTypes: [
      "Casas e mansões em condomínios de alto padrão",
      "Pousadas boutique e hotéis de charme",
      "Restaurantes e bistrôs na Rua das Pedras e Orla Bardot",
      "Espaços gourmet com piscinas e decks integrados"
    ],
    keyLocalBenefits: [
      "Domínio do estilo arquitetônico buziano com madeira, pedra e vidro",
      "Reformas de pousadas planejadas fora da alta temporada para não interferir na ocupação",
      "Mão de obra legalizada e qualificada com 35 anos de rigor técnico",
      "Construção de piscinas de concreto armado e áreas gourmet completas"
    ],
    faqs: [
      {
        question: "Vocês constroem e reformam piscinas e áreas gourmet em Búzios?",
        answer: "Sim! Somos especialistas na construção de piscinas estruturadas em concreto armado com revestimento em pastilhas, decks de madeira tratada, pergolados e churrasqueiras integradas ao paisagismo."
      },
      {
        question: "Vocês trabalham com respeito às regras de condomínio e da prefeitura de Búzios?",
        answer: "Com certeza. Nossas obras seguem rigorosamente os horários permitidos pelos condomínios fechados e respeitam o zoneamento construtivo e taxas de ocupação municipal."
      }
    ]
  },
  {
    slug: "arraial-do-cabo",
    name: "Arraial do Cabo",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas em Condomínios em Arraial do Cabo RJ",
    h1Subtext: "Construções, reforço estrutural, ampliações e reformas residenciais na Capital do Mergulho. Atendimento ágil e materiais resistentes à maresia na área urbana e nos condomínios da orla.",
    seoTitle: "Construção e Reformas em Condomínios em Arraial do Cabo RJ | Construtor",
    seoDescription: "Empresa de construção civil e reformas em Arraial do Cabo RJ. Obras residenciais, reformas de telhados, impermeabilização e alvenaria com 35 anos de experiência.",
    tagline: "Construção civil e reformas seguras na Capital do Mergulho",
    heroText: "Obras residenciais, ampliações e reformas em Arraial do Cabo. Atendemos com agilidade desde casas em morros e orla até condomínios em Monte Alto e Figueira.",
    localGeology: "Região com topografia variada entre planícies costeiras e encostas graníticas, exigindo muros de arrimo eficientes, alvenaria reforçada e fundações calculadas para solos arenosos ou rocha.",
    waterTableNotes: "O vento constante e o ar marítimo demandam tintas acrílicas emborrachadas e impermeabilização reforçada de lajes expostas contra a umidade marinha.",
    recommendedDepthEstimate: "Sapatas com vigas de amarração ou estacas de concreto armado",
    neighborhoods: [
      "Praia Grande",
      "Prainha",
      "Centro",
      "Praia dos Anjos",
      "Macedônia",
      "Canaã",
      "Monte Alto",
      "Figueira",
      "Parque das Garças",
      "Sabiá"
    ],
    condominiums: [
      "Condomínio Villaggio di Arraial",
      "Condomínio Pontal da Barra (Monte Alto)",
      "Condomínio Mirante de Figueira",
      "Condomínio Sol e Mar",
      "Condomínio Bosque de Massambaba",
      "Loteamento Novo Arraial"
    ],
    highDemandZones: [
      "Prainha e Praia Grande (Reformas completas e modernização de residências e pousadas)",
      "Faixa Litorânea de Figueira e Monte Alto (Crescimento contínuo de loteamentos e casas do zero)"
    ],
    propertyTypes: [
      "Casas residenciais para famílias e veranistas",
      "Pousadas para turismo náutico e de mergulho",
      "Imóveis com kitnets para locação de temporada",
      "Reformas de telhados e ampliação de andares superiores"
    ],
    keyLocalBenefits: [
      "Proteção eficaz de fachadas contra ventos fortes e salitre intenso",
      "Cálculo estrutural para ampliações e acréscimo de pavimentos com segurança",
      "Construtor legalizado com mais de 35 anos de bagagem em obras litorâneas",
      "Preço justo e planejamento sem atrasos na entrega"
    ],
    faqs: [
      {
        question: "É seguro construir mais um pavimento em uma casa já existente em Arraial?",
        answer: "Apenas após vistoria técnica das fundações e colunas existentes. Nossa equipe de mais de 35 anos de experiência avalia a estrutura e, se necessário, realiza o reforço das sapatas e pilares para garantir 100% de segurança."
      },
      {
        question: "Vocês atendem os distritos de Monte Alto e Figueira?",
        answer: "Sim, atendemos todas as regiões de Arraial do Cabo, incluindo a faixa litorânea de Monte Alto e Figueira."
      }
    ]
  },
  {
    slug: "iguaba-grande",
    name: "Iguaba Grande",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas em Condomínios em Iguaba Grande RJ",
    h1Subtext: "Construção de residências completas, reformas de casas de praia e ampliações de áreas gourmet em Iguaba Grande. Construtor legalizado e equipe completa perto de você.",
    seoTitle: "Construção e Reformas em Condomínios em Iguaba Grande RJ | Construtor Legalizado",
    seoDescription: "Serviços de construção civil, reformas de casas, alvenaria, pisos e pintura em Iguaba Grande RJ. Equipe com mais de 35 anos de experiência profissional.",
    tagline: "Qualidade e confiança em construções e reformas na orla e interior",
    heroText: "Construção de residências completas, reformas de casas de praia e ampliações em Iguaba Grande. Construtor legalizado e equipe completa para transformar o seu projeto em realidade.",
    localGeology: "O relevo suave às margens da laguna alterna entre terrenos planos de orla com lençol freático próximo e áreas elevadas com solo de maior capacidade de carga, exigindo fundações adequadas para cada topografia.",
    waterTableNotes: "A tranquilidade de Iguaba atrai muitas famílias para construir casas de repouso e lazer com amplas varandas, telhados ventilados e áreas gourmet externas.",
    recommendedDepthEstimate: "Sapatas isoladas interligadas por vigas baldrames impermeabilizadas",
    neighborhoods: [
      "Centro",
      "Cidade Nova",
      "São Miguel",
      "Estação",
      "Boa Vista",
      "Igarapiapunha",
      "Lagoinha",
      "Pedreira",
      "Sapeatiba Mirim",
      "Parque Tamariz",
      "Vila Nova",
      "Andrélândia"
    ],
    condominiums: [
      "Condomínio Ubá Iguaba",
      "Condomínio Parque das Rosas",
      "Condomínio Jardim Europa",
      "Condomínio Solar de Iguaba",
      "Condomínio Vila do Sol",
      "Condomínio Portal das Flores",
      "Loteamento Iguaba Residence"
    ],
    highDemandZones: [
      "Orla da Laguna e Cidade Nova (Residências e reformas de casas de lazer)",
      "São Miguel e Estação (Bairros consolidados com expansão residencial)",
      "Sapeatiba Mirim (Chácaras, sítios e novos loteamentos fechados)"
    ],
    propertyTypes: [
      "Casas térreas com grandes quintais e jardins",
      "Condomínios residenciais horizontais",
      "Reformas de telhados coloniais e modernização de pisos",
      "Construção de quiosques, churrasqueiras e piscinas"
    ],
    keyLocalBenefits: [
      "Proximidade imediata da base de São Pedro da Aldeia para visitas técnicas rápidas",
      "Especialistas em projetos residenciais espaçosos e áreas de lazer completas",
      "Equipe confiável com mais de 35 anos de tradição na Região dos Lagos",
      "Orçamento transparente sem custos ocultos durante a obra"
    ],
    faqs: [
      {
        question: "Quanto tempo leva para construir uma casa em Iguaba Grande?",
        answer: "Uma casa residencial térrea média de 80m² a 120m² leva geralmente entre 4 a 7 meses, dependendo do padrão de acabamento escolhido e das condições climáticas."
      },
      {
        question: "Como solicitar uma visita técnica para orçamento em Iguaba Grande?",
        answer: "Basta entrar em contato pelo nosso WhatsApp. Agendamos uma visita técnica gratuita no seu terreno ou imóvel para avaliar as necessidades e preparar um orçamento detalhado."
      }
    ]
  },
  {
    slug: "araruama",
    name: "Araruama",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas em Condomínios em Araruama RJ | Mais de 35 Anos",
    h1Subtext: "Construção de casas do zero em condomínios fechados, reformas residenciais e comerciais, piscinas de alvenaria e acabamentos refinados em Araruama, Praia Seca e ao longo da Rodovia Amaral Peixoto.",
    seoTitle: "Construção e Reformas em Condomínios em Araruama RJ | Orçamento de Obras",
    seoDescription: "Construção e reformas de casas em Araruama RJ. Obras do zero em condomínios fechados, Praia Seca, Areal e Centro. Construtor legalizado há mais de 35 anos.",
    tagline: "Atendimento de ponta a ponta em condomínios fechados, loteamentos e expansão urbana",
    heroText: "Construção do zero e reformas em condomínios fechados e loteamentos em Araruama. Atendemos com equipe própria desde a fundação até o acabamento fino em Praia Seca, Bananeiras, Areal, Coqueiral e todos os condomínios da Rodovia Amaral Peixoto.",
    localGeology: "O município de Araruama combina solos argilo-arenosos próximos à laguna com platôs mais firmes nos loteamentos ao longo da RJ-106. A drenagem periférica e baldrames impermeabilizados com dupla camada polimérica são cruciais para blindar pisos cerâmicos e alvenaria contra intempéries e umidade.",
    waterTableNotes: "Em áreas costeiras como Praia Seca, Iguabinha e orla da laguna, o lençol freático exige fundações em radier estruturado ou sapatas corridas travadas com aplicação de argamassa polimérica e manta asfáltica nas vigas de fundação.",
    recommendedDepthEstimate: "Sapatas isoladas com vigamento baldrame impermeabilizado ou radier conforme carga",
    neighborhoods: [
      "Centro",
      "Pontinha",
      "Praia do Hospício",
      "Areal",
      "Coqueiral",
      "Iguabinha",
      "Bananeiras",
      "Parque Hotel",
      "XV de Novembro",
      "Fazendinha",
      "Mataruna",
      "Praia Seca (Salinas, Pernambuca)",
      "São Vicente de Paulo (3º Distrito)",
      "Parque Mataruna",
      "Haway",
      "Jardim Araruama",
      "Outeiro",
      "Vila Capri",
      "Boa Perna",
      "Jardim São Paulo"
    ],
    condominiums: [
      "Condomínio Sonho de Vida (Todos os Setores)",
      "Condomínio Alphaville Araruama",
      "Condomínio Aldeia dos Reis",
      "Condomínio Parque dos Buritis",
      "Condomínio Bosque dos Coqueiros",
      "Condomínio Recanto dos Pássaros",
      "Condomínio Lake View Araruama",
      "Condomínio Vivendas da Lagoa",
      "Loteamento Mirante da Lagoa",
      "Condomínio Villaggio di Capri"
    ],
    highDemandZones: [
      "Eixo Rodovia Amaral Peixoto (RJ-106 - Forte polo de condomínios horizontais fechados)",
      "Orla de Praia Seca e Faixa da Laguna (Construções de casas de praia e veraneio)",
      "Bairros Nobres Pontinha, Parque Hotel e Areal (Reformas residenciais e áreas gourmet)",
      "Vetores de Loteamentos Residenciais em Bananeiras e Iguabinha"
    ],
    propertyTypes: [
      "Casas térreas e sobrados em condomínios fechados (Sonho de Vida, Alphaville, etc.)",
      "Residências de praia com piscina e espaço gourmet em Praia Seca e orla",
      "Reformas completas de telhados coloniais, pisos e fachadas",
      "Construção de muros de divisa, garagens e ampliações",
      "Prédios comerciais e galpões ao longo da Rodovia RJ-106"
    ],
    keyLocalBenefits: [
      "Construtor legalizado com mais de 35 anos de obras bem-sucedidas em toda a Região dos Lagos",
      "Equipe própria e experiente em todas as normas e regras de condomínios fechados de Araruama",
      "Execução de piscinas em concreto armado, telhados térmicos e acabamentos em porcelanato",
      "Contrato detalhado com cronograma físico-financeiro e garantia de entrega no prazo"
    ],
    faqs: [
      {
        question: "Vocês atendem os condomínios fechados de Araruama como o Sonho de Vida e Alphaville?",
        answer: "Sim! Construímos e reformamos frequentemente nos condomínios de Araruama, incluindo o complexo Sonho de Vida, Alphaville, Aldeia dos Reis e loteamentos fechados, cumprindo rigorosamente os horários e normas de cada administração."
      },
      {
        question: "Vocês realizam obras completas em Praia Seca?",
        answer: "Com certeza. Praia Seca é um dos nossos principais polos de atendimento em Araruama, executando desde a fundação especial para solo arenoso até a área de lazer com piscina e churrasqueira."
      },
      {
        question: "Como funciona a visita técnica e o orçamento em Araruama?",
        answer: "Agendamos uma visita técnica no seu lote ou imóvel em Araruama sem compromisso. Avaliamos a topografia, necessidades da obra e enviamos uma proposta completa com relação de etapas e prazos."
      }
    ]
  },
  {
    slug: "saquarema",
    name: "Saquarema",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    isPrimary: false,
    h1Title: "Construção e Reformas em Condomínios em Saquarema RJ | Mais de 35 Anos",
    h1Subtext: "Construção de casas do zero em condomínios fechados e loteamentos, reformas residenciais e comerciais, áreas gourmet com piscina e estruturas reforçadas contra a maresia em Itaúna, Vilatur, Bacaxá, Jaconé e toda Saquarema.",
    seoTitle: "Construção e Reformas em Condomínios em Saquarema RJ | Construtor Legalizado",
    seoDescription: "Empresa de construção civil e reformas de casas em Saquarema RJ. Obras do zero em condomínios fechados, Itaúna, Vilatur, Bacaxá e Boqueirão. Equipe completa há mais de 35 anos.",
    tagline: "Construção de casas de praia, condomínios fechados e reformas completas na Capital Nacional do Surfe",
    heroText: "Construção de casas do zero e reformas completas em condomínios fechados e bairros de Saquarema. Equipe completa para obras residenciais e comerciais em Itaúna, Vilatur, Bacaxá, Boqueirão e Jaconé com proteção reforçada contra maresia.",
    localGeology: "O território de Saquarema apresenta desde restingas arenosas na faixa entre o mar e a lagoa (Itaúna, Vilatur, Barra Nova e Jaconé) até terrenos argilo-arenosos firmes no eixo de Bacaxá e Sampaio Corrêa. Executamos fundações dimensionadas com vigas baldrames impermeabilizadas e concreto estrutural protegido contra a salinidade marinha.",
    waterTableNotes: "Nas regiões próximas à Lagoa de Saquarema e à orla oceânica, o lençol freático superficial e a forte maresia exigem impermeabilização polimérica dupla nos alicerces, recobrimento reforçado nas ferragens e tintas elastoméricas hidrorrepelentes nas fachadas.",
    recommendedDepthEstimate: "Sapatas corridas ou isoladas com vigamento baldrame impermeabilizado e concreto vibrado",
    neighborhoods: [
      "Centro",
      "Itaúna",
      "Bacaxá",
      "Vilatur",
      "Boqueirão",
      "Barra Nova",
      "Jaconé",
      "Gravatá",
      "Porto da Roça",
      "Sampaio Corrêa",
      "Verde Vale",
      "Jardim Ipitangas",
      "Rio d'Areia",
      "Areal",
      "Leigo",
      "Bonsucesso",
      "Mombaça",
      "Alvorada",
      "Retiro",
      "Água Branca"
    ],
    condominiums: [
      "Condomínio Residencial Itaúna",
      "Condomínio Bougainville Saquarema",
      "Condomínio Vilatur Park",
      "Condomínio Lagoa Azul",
      "Condomínio Portal de Saquarema",
      "Condomínio Costa do Sol",
      "Condomínio Reserva de Itaúna",
      "Condomínio Solar de Bacaxá",
      "Loteamento Praia de Vilatur",
      "Condomínio Recanto de Itaúna"
    ],
    highDemandZones: [
      "Orla de Itaúna e Boqueirão (Construção de residências de alto padrão, pousadas e áreas gourmet)",
      "Polo Urbano e Comercial de Bacaxá e Porto da Roça (Obras residenciais, lojas, clínicas e galpões)",
      "Vilatur e Jaconé (Forte expansão de casas de veraneio, piscinas e construções do zero)",
      "Eixo Rodovia Amaral Peixoto RJ-106 (Novos loteamentos e condomínios fechados)"
    ],
    propertyTypes: [
      "Casas de praia e residências de alto padrão em Itaúna e orla",
      "Casas térreas e sobrados em condomínios fechados e loteamentos",
      "Pousadas, surf camps e estabelecimentos turísticos",
      "Reformas completas de telhados, fachadas, porcelanatos e áreas gourmet com piscina",
      "Imóveis comerciais, clínicas e lojas em Bacaxá e Centro"
    ],
    keyLocalBenefits: [
      "Construtor legalizado com mais de 35 anos de experiência prática na Região dos Lagos",
      "Técnicas construtivas e materiais especificados para resistir à maresia intensa da orla de Saquarema",
      "Equipe completa própria: mestre de obras, pedreiros, eletricistas, encanadores, carpinteiros e pintores",
      "Contrato transparente com cronograma físico-financeiro e 5 anos de garantia estrutural"
    ],
    faqs: [
      {
        question: "Vocês atendem obras em Itaúna, Vilatur, Bacaxá e Jaconé em Saquarema?",
        answer: "Sim! Atendemos todos os distritos e bairros de Saquarema, incluindo Itaúna, Vilatur, Bacaxá, Centro, Boqueirão, Barra Nova, Jaconé e Sampaio Corrêa, tanto em condomínios fechados quanto em lotes urbanos e de praia."
      },
      {
        question: "Como vocês protegem as construções contra a maresia forte de Saquarema?",
        answer: "Utilizamos cobrimento de concreto reforçado nas armaduras de aço, aditivos impermeabilizantes na argamassa, dupla impermeabilização nas vigas baldrames e acabamentos externos com revestimentos cerâmicos ou tintas acrílicas emborrachadas resistentes ao salitre."
      },
      {
        question: "Como agendar uma visita técnica para orçamento em Saquarema?",
        answer: "Basta clicar no botão de WhatsApp ou preencher o formulário no site. Agendamos a visita presencial no seu terreno ou imóvel em Saquarema para avaliar o projeto e apresentar o orçamento executivo detalhado."
      }
    ]
  }
];
