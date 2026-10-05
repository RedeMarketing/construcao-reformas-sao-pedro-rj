/**
 * Catálogo Completo de Serviços de Construção Civil e Reformas em Geral
 * Serviços prestados por equipe legalizada com mais de 35 anos de experiência
 * em São Pedro da Aldeia e Região dos Lagos - RJ.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  h1Title: string; // Tag H1 profissional focada em SEO de cauda longa e fundo de funil
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  seoTitle: string;
  seoDescription: string;
  pageBgColor: string; // Cor de fundo individual e exclusiva derivada da paleta
  heroImage: string; // Imagem real em alta resolução específica do serviço
  heroImageAlt: string;
  heroImageClass?: string; // Classes adicionais para ajuste de tom e nitidez da imagem
  heroGradientOverlay: string; // Gradiente exclusivo em tons de azul (#5289AD, #243C4C, #698696)
  heroAccentColor: string; // Tom de destaque do banner
  seoKeywordsShortTail: string[];
  seoKeywordsLongTail: string[];
  seoSubtext: string; // Subtexto estratégico abaixo do H1 com cauda curta e longa
  features: string[];
  stages: {
    title: string;
    description: string;
  }[];
  audience: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construcao-de-casas-e-obras-do-zero",
    slug: "construcao-de-casas-e-obras-do-zero",
    name: "Construção de Casas e Obras do Zero",
    h1Title: "Orçamento para Construção de Casas e Obras do Zero em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Projetos completos para construção residencial na Região dos Lagos: fundações reforçadas, alvenaria, lajes e acabamento chave na mão.",
    fullDescription: "Execução total de obras residenciais e comerciais desde o estudo do solo até a entrega das chaves. Como construtor e empreiteiro legalizado com mais de 35 anos de tradição em São Pedro da Aldeia e cidades vizinhas, cuidamos com rigor técnico de todo o processo de edificação: terraplanagem, fundações em brocas e sapatas, alvenaria estrutural, lajes maciças ou pré-moldadas, telhados e acabamentos finos resistentes à maresia da Região dos Lagos.",
    iconName: "Building2",
    seoTitle: "Construção de Casas em São Pedro da Aldeia RJ | Construtor e Empreiteiro",
    seoDescription: "Construção residencial Região dos Lagos e construção de Casas em São Pedro da Aldeia. Construtor legalizado, obras do zero e equipe completa.",
    pageBgColor: "#F4FCFB", // Branco Gelo da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Canteiro de obras e construção de casa do zero em São Pedro da Aldeia RJ",
    heroGradientOverlay: "bg-gradient-to-r from-[#172d3b] via-[#243C4C]/95 sm:via-[#243C4C]/85 lg:via-[#243C4C]/65 to-transparent",
    heroAccentColor: "#38bdf8",
    seoKeywordsShortTail: [
      "Construtor São Pedro da Aldeia",
      "Construção de casas",
      "Empresa de construção civil RJ",
      "Obra do zero"
    ],
    seoKeywordsLongTail: [
      "Construção de casas em São Pedro da Aldeia RJ",
      "Empresa para construir casa do zero na Região dos Lagos",
      "Orçamento de construção para condomínio fechado em São Pedro da Aldeia",
      "Construtor legalizado para obras residenciais completas"
    ],
    seoSubtext: "Construtor em São Pedro da Aldeia e empresa de construção civil especializada em construção de casas do zero e obras residenciais na Região dos Lagos. Planejamento técnico rigoroso, fundações estruturadas, alvenaria de alta resistência e entrega chave na mão com construtor legalizado e mais de 35 anos de tradição.",
    features: [
      "Gerenciamento completo da fundação à entrega das chaves (Chave na Mão)",
      "Mão de obra legalizada e qualificada com mestre de obras experiente",
      "Execução rigorosa segundo as normas técnicas ABNT e projetos arquitetônicos",
      "Cronograma físico-financeiro transparente sem desperdício de materiais",
      "Estruturas reforçadas contra maresia e umidade típica da Região dos Lagos"
    ],
    stages: [
      {
        title: "1. Estudo do Terreno e Locação da Obra",
        description: "Gabarito, terraplanagem, sondagem e demarcação precisa dos eixos da construção."
      },
      {
        title: "2. Fundação e Infraestrutura",
        description: "Abertura de brocas, sapatas isoladas ou corridas, vigas baldrames e impermeabilização."
      },
      {
        title: "3. Alvenaria, Pilares e Vigamento",
        description: "Levantamento de paredes, amarração de vigas, colunas de concreto armado e lajes."
      },
      {
        title: "4. Instalações e Acabamentos Finais",
        description: "Embutimento de redes hidráulicas/elétricas, revestimentos, pintura e limpeza pós-obra."
      }
    ],
    audience: [
      "Proprietários de lotes e terrenos residenciais",
      "Casas em condomínios fechados em São Pedro da Aldeia e região",
      "Investidores imobiliários e construtores de imóveis para aluguel ou venda",
      "Comerciantes e empresários montando novas instalações"
    ]
  },
  {
    id: "reformas-residenciais-e-comerciais",
    slug: "reformas-residenciais-e-comerciais",
    name: "Reformas Residenciais e Comerciais em Geral",
    h1Title: "Orçamento para Reformas Residenciais e Comerciais em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Reforma de casa e pontos comerciais: modernização de ambientes, demolição planejada, gesso, drywall e ampliações.",
    fullDescription: "Transformamos e modernizamos residências, casas de praia, pousadas e estabelecimentos comerciais. Como empreiteiro experiente com equipe multidisciplinar, realizamos reforma de casa completa ou parcial, alterações de layout arquitetônico, rebaixamento em gesso e drywall, substituição de revestimentos antigos, integração de ambientes e revitalização total com cumprimento fiel de prazos.",
    iconName: "Hammer",
    seoTitle: "Reformas de Casas em São Pedro da Aldeia RJ | Reforma Residencial e Comercial",
    seoDescription: "Reformas de casas em São Pedro da Aldeia, Cabo Frio e região. Equipe com mais de 35 anos de tradição em reformas rápidas, gesso, drywall e alvenaria.",
    pageBgColor: "#EFF5F8", // Tom Azul Claro Pálido da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Reforma residencial e modernização de ambientes em São Pedro da Aldeia",
    heroGradientOverlay: "bg-gradient-to-r from-[#142d3d] via-[#1f4761]/95 sm:via-[#1f4761]/85 lg:via-[#2b5876]/65 to-transparent",
    heroAccentColor: "#7dd3fc",
    seoKeywordsShortTail: [
      "Reforma de casas",
      "Empreiteiro São Pedro da Aldeia",
      "Reforma residencial",
      "Reforma de loja"
    ],
    seoKeywordsLongTail: [
      "Orçamento para reforma residencial na Região dos Lagos",
      "Reforma de casas em São Pedro da Aldeia do chão ao teto",
      "Empresa de reformas rápidas e modernização de imóveis",
      "Empreiteiro para reforma de casa de praia e pousadas"
    ],
    seoSubtext: "Reforma de casas em São Pedro da Aldeia e soluções completas em reformas residenciais e comerciais na Região dos Lagos. Orçamento para reforma residencial com cronograma garantido, demolição controlada, ampliação de cômodos, troca de pisos e revitalização de fachadas com equipe legalizada e sem imprevistos.",
    features: [
      "Demolição controlada e remoção de entulho com caçambas regulares",
      "Rebaixamento de teto e paredes divisórias em gesso e drywall com isolamento acústico",
      "Modificação de layout e integração de salas e cozinhas gourmet",
      "Reparos estruturais, combate a trincas e impermeabilização",
      "Substituição de pisos, porcelanatos, portas, janelas e pintura de fino acabamento",
      "Cumprimento rigoroso de prazos com obra limpa e organizada"
    ],
    stages: [
      {
        title: "1. Vistoria Técnica e Orçamento Detalhado",
        description: "Diagnóstico no local, medições e planejamento das melhorias solicitadas."
      },
      {
        title: "2. Preparação e Proteção de Ambientes",
        description: "Isolamento de áreas não reformadas e desmontagens preventivas."
      },
      {
        title: "3. Execução das Modificações",
        description: "Alvenaria, elétrica, hidráulica, nivelamento de pisos e gesso."
      },
      {
        title: "4. Pintura e Entrega Final",
        description: "Acabamentos finos, verificação de funcionamento e limpeza rigorosa."
      }
    ],
    audience: [
      "Casas e apartamentos antigos precisando de modernização",
      "Lojas, restaurantes e salas comerciais na Região dos Lagos",
      "Pousadas e residências de veraneio antes da alta temporada"
    ]
  },
  {
    id: "pedreiro-e-mao-de-obra-qualificada",
    slug: "pedreiro-e-mao-de-obra-qualificada",
    name: "Pedreiro e Mão de Obra Qualificada",
    h1Title: "Orçamento para Pedreiro e Mão de Obra Qualificada em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Serviços profissionais de pedreiro para alvenaria, contrapiso, emboço, reformas e acabamentos finos de alta durabilidade.",
    fullDescription: "Mão de obra especializada de pedreiro e ajudantes experientes, liderados por mestre de obras com mais de 35 anos no mercado civil. Atendemos pequenos reparos, reformas completas e grandes construções, assegurando alinhamento a laser, prumo milimétrico, economia no consumo de areia e cimento, limpeza diária no canteiro e compromisso com o prazo combinado.",
    iconName: "Hammer",
    seoTitle: "Pedreiro em São Pedro da Aldeia RJ | Mão de Obra de Confiança",
    seoDescription: "Pedreiro de confiança em São Pedro da Aldeia e Região dos Lagos. Diárias, empreitada de alvenaria, emboço, contrapiso e reformas gerais.",
    pageBgColor: "#F1F3F5", // Cinza Claro Suave da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Pedreiro profissional executando serviços de alvenaria e acabamento",
    heroGradientOverlay: "bg-gradient-to-r from-[#182c38] via-[#2a4556]/95 sm:via-[#2a4556]/85 lg:via-[#3d6074]/65 to-transparent",
    heroAccentColor: "#67e8f9",
    seoKeywordsShortTail: [
      "Pedreiro São Pedro da Aldeia",
      "Mestre de obras RJ",
      "Contratar pedreiro",
      "Diária de pedreiro"
    ],
    seoKeywordsLongTail: [
      "Pedreiro de confiança em São Pedro da Aldeia",
      "Mão de obra de pedreiro para reforma e construção na Região dos Lagos",
      "Pedreiro experiente para assentamento de pisos reboco e alvenaria",
      "Empreiteira de mão de obra de construção civil em São Pedro"
    ],
    seoSubtext: "Pedreiro de confiança em São Pedro da Aldeia e Região dos Lagos com excelência comprovada em alvenaria estrutural, regularização de contrapisos, emboço desempenado e acabamentos precisos. Contrate equipe completa de pedreiros legalizados com supervisão técnica, segurança e garantia de serviço bem executado.",
    features: [
      "Pedreiros experientes com mais de 35 anos de atuação no mercado litorâneo",
      "Uso de ferramentas modernas, níveis a laser e misturadores para argamassa homogênea",
      "Trabalho por empreitada fechada ou etapas programadas sem surpresas de custos",
      "Supervisão direta com conferência diária de prumo, esquadro e caimento de água",
      "Respeito às regras de condomínios e limpeza total ao fim de cada jornada"
    ],
    stages: [
      {
        title: "1. Análise da Necessidade e Metragem",
        description: "Avaliação do local, levantamento de medidas e quantitativo exato de insumos."
      },
      {
        title: "2. Preparação do Espaço e Nivelamento",
        description: "Remoção de camadas danificadas, chapisco prévio e batimento de nível a laser."
      },
      {
        title: "3. Execução Técnica da Alvenaria ou Reparo",
        description: "Assentamento firme com argamassa no traço correto e travamento adequado."
      },
      {
        title: "4. Acabamento e Vistoria Final",
        description: "Reboco liso pronto para pintura, limpeza minuciosa e entrega ao cliente."
      }
    ],
    audience: [
      "Famílias reformando cozinhas, banheiros, quartos e calçadas",
      "Proprietários que buscam mão de obra séria e de total confiança",
      "Condomínios residenciais que exigem profissionais cadastrados e pontuais"
    ]
  },
  {
    id: "alvenaria-estrutural-muros-e-reboco",
    slug: "alvenaria-estrutural-muros-e-reboco",
    name: "Alvenaria Estrutural, Muros e Reboco",
    h1Title: "Orçamento para Alvenaria Estrutural, Muros e Reboco em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Muros de fechamento com cinta de amarração, emboço desempenado, calçadas de concreto e divisórias em alvenaria.",
    fullDescription: "Execução pesada de alvenaria com prumo, nível e esquadro milimétricos. Construção de muros perimetrais de alta segurança e estabilidade, muros de arrimo com drenagem contra pressão do solo, fechamentos de lotes, emboço com traço de massa forte enriquecido com impermeabilizantes e reboco liso pronto para receber massa corrida ou pintura.",
    iconName: "Layers",
    seoTitle: "Muros, Alvenaria e Reboco em São Pedro da Aldeia RJ | Muros de Divisa",
    seoDescription: "Construção de muros de divisa, alvenaria de tijolos e reboco em São Pedro da Aldeia e cidades vizinhas. Mais de 35 anos de experiência prática.",
    pageBgColor: "#EBF2F7", // Azul Claro Pálido da paleta oficial
    heroImage: "/images/Construtor Alvenaria Estrutural, Muros e Reboco em São Pedro da Aldeia e Região dos Lagos RJ.png",
    heroImageAlt: "Construtor Alvenaria Estrutural, Muros e Reboco em São Pedro da Aldeia e Região dos Lagos RJ",
    heroImageClass: "brightness-[0.55] contrast-90 blur-[1.5px] scale-[1.02]",
    heroGradientOverlay: "bg-gradient-to-r from-[#0f1f29]/95 via-[#192f3d]/90 sm:via-[#28495c]/85 lg:via-[#28495c]/75 to-[#192f3d]/60",
    heroAccentColor: "#93c5fd",
    seoKeywordsShortTail: [
      "Construção de muros",
      "Alvenaria estrutural",
      "Reboco e emboço",
      "Muro de arrimo RJ"
    ],
    seoKeywordsLongTail: [
      "Construção de muros em São Pedro da Aldeia para fechamento de terrenos",
      "Preço de alvenaria e emboço por metro quadrado na Região dos Lagos",
      "Muros de arrimo com drenagem e sapatas reforçadas em São Pedro da Aldeia",
      "Alvenaria de tijolos e blocos com colunas de amarração"
    ],
    seoSubtext: "Alvenaria e construção de muros em São Pedro da Aldeia RJ com cintas de amarração reforçadas, sapatas profundas e reboco impermeabilizado. Fechamento seguro de terrenos e lotes em condomínios com alinhamento perfeito e resistência incomparável contra as intempéries da Região dos Lagos.",
    features: [
      "Muros de fechamento com sapatas, colunas travadas e viga superior de coroamento",
      "Muros de arrimo reforçados com barbacãs para alívio de pressão hidrostática",
      "Chapisco aderente, emboço e reboco nivelados com mestras a laser",
      "Abertura de vãos para portas e janelas com vergas e contravergas armadas",
      "Construção de calçadas de concreto armado com juntas de dilatação"
    ],
    stages: [
      {
        title: "1. Fundação e Amarração dos Mourões",
        description: "Abertura de brocas no solo e concretagem de sapatas com armação de aço."
      },
      {
        title: "2. Alinhamento e Assentamento de Blocos",
        description: "Assentamento de tijolos cerâmicos ou blocos de concreto com amarração."
      },
      {
        title: "3. Vigamento Superior de Concreto",
        description: "Cinta de amarração para evitar trincas e garantir estabilidade estrutural."
      },
      {
        title: "4. Chapisco e Emboço Desempenado",
        description: "Camada protetora de argamassa com aditivo impermeabilizante e desempeno liso."
      }
    ],
    audience: [
      "Fechamento de lotes recém-adquiridos em São Pedro da Aldeia e Região",
      "Divisões internas de ambientes residenciais ou galpões",
      "Reforço de muros antigos com risco de queda"
    ]
  },
  {
    id: "reformas-de-telhados-e-coberturas",
    slug: "reformas-de-telhados-e-coberturas",
    name: "Reformas de Telhados e Coberturas",
    h1Title: "Orçamento para Reforma de Telhados e Coberturas em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Troca de telhas, reforço de madeiramento ou estrutura metálica, calhas, rufos e eliminação definitiva de goteiras.",
    fullDescription: "Especialistas em construção, restauração e manutenção preventiva de telhados coloniais, telhas termoacústicas, fibrocimento e coberturas modernas. Realizamos tratamento e substituição de caibros e vigas de madeira danificados por cupins ou umidade, alinhamento milimétrico de telhas, instalação de mantas térmicas subcobertura, calhas e rufos sob medida para acabar de vez com infiltrações.",
    iconName: "Home",
    seoTitle: "Reforma de Telhados e Coberturas em São Pedro da Aldeia RJ | Telhadista",
    seoDescription: "Construção e reforma de telhados em São Pedro da Aldeia e cidades vizinhas. Troca de telhas, madeiramento, calhas e vedação completa.",
    pageBgColor: "#F4FCFB", // Branco Gelo da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Reforma de telhado colonial com estrutura de madeira e telhas novas",
    heroGradientOverlay: "bg-gradient-to-r from-[#122736] via-[#204a63]/95 sm:via-[#204a63]/85 lg:via-[#326a8c]/65 to-transparent",
    heroAccentColor: "#38bdf8",
    seoKeywordsShortTail: [
      "Telhadista São Pedro da Aldeia",
      "Reforma de telhado",
      "Troca de telhas",
      "Conserto de goteiras"
    ],
    seoKeywordsLongTail: [
      "Reforma de telhados em São Pedro da Aldeia RJ com manta térmica",
      "Telhadista especializado em telhado colonial e estrutura de madeira na Região dos Lagos",
      "Instalação de calhas rufos e impermeabilização de cumeeira",
      "Conserto de vazamento de telhado antes do período de chuvas fortes"
    ],
    seoSubtext: "Telhadista e reformas de telhados em São Pedro da Aldeia RJ com substituição de madeiramento comprometido, enripamento alinhado, instalação de mantas térmicas e calhas pluviais. Proteja seu imóvel com telhados coloniais ou modernos estruturados para resistir aos ventos e chuvas intensas da Região dos Lagos.",
    features: [
      "Telhados coloniais tradicionais e coberturas metálicas modernas",
      "Substituição de madeiramento empenado ou atacado por pragas",
      "Instalação de manta térmica impermeabilizante subcobertura",
      "Colocação de calhas, rufos de alumínio e tubos de queda pluviais",
      "Vedação definitiva contra goteiras e infiltrações em dias de chuva forte"
    ],
    stages: [
      {
        title: "1. Inspeção do Madeiramento e Telhas",
        description: "Verificação da integridade das tesouras, terças e ripas existentes."
      },
      {
        title: "2. Correção Estrutural ou Substituição",
        description: "Troca de peças comprometidas e tratamento preventivo com imunizantes."
      },
      {
        title: "3. Instalação de Manta e Enripamento",
        description: "Aplicação de isolamento térmico e alinhamento milimétrico do novo ripamento."
      },
      {
        title: "4. Assentamento e Arremates",
        description: "Colocação de cumeeiras emboçadas, rufos laterais e calhas pluviais."
      }
    ],
    audience: [
      "Residências com goteiras recorrentes",
      "Imóveis precisando de isolamento térmico contra o calor da Região dos Lagos",
      "Galpões comerciais e áreas de churrasqueira"
    ]
  },
  {
    id: "instalacoes-hidraulicas-e-redes-de-esgoto",
    slug: "instalacoes-hidraulicas-e-redes-de-esgoto",
    name: "Instalações Hidráulicas e Esgoto",
    h1Title: "Orçamento para Instalações Hidráulicas e Esgoto em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Redes completas de água fria e quente, esgoto sanitário, caixas de gordura, cisternas e reservatórios.",
    fullDescription: "Planejamento e execução de tubulações hidráulicas em PVC soldável, PPR termofusão e CPVC, caixas d'água, barriletes, sistemas de pressurização para chuveiros, instalação de louças e metais sanitários, redes de esgoto com caimento perfeito, caixas de gordura e sistemas de drenagem pluvial.",
    iconName: "Wrench",
    seoTitle: "Instalações Hidráulicas e Encanador em São Pedro da Aldeia RJ",
    seoDescription: "Serviços de instalações hidráulicas prediais e residenciais em São Pedro da Aldeia. Redes de esgoto, água e cisternas com garantia.",
    pageBgColor: "#EEF6F8", // Azul Claro Pálido da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Instalações hidráulicas prediais e encanamentos em PVC e PPR",
    heroGradientOverlay: "bg-gradient-to-r from-[#102a3a] via-[#234e6b]/95 sm:via-[#234e6b]/85 lg:via-[#357299]/65 to-transparent",
    heroAccentColor: "#67e8f9",
    seoKeywordsShortTail: [
      "Encanador São Pedro da Aldeia",
      "Instalação hidráulica",
      "Rede de esgoto",
      "Cisterna de água"
    ],
    seoKeywordsLongTail: [
      "Instalações hidráulicas residenciais em São Pedro da Aldeia e Região dos Lagos",
      "Encanador profissional para vazamentos tubulações e caixas d'água",
      "Construção de cisternas subterrâneas e instalação de pressurizadores",
      "Rede de esgoto sanitário com caixas de inspeção e gordura"
    ],
    seoSubtext: "Encanador em São Pedro da Aldeia e especialista em instalações hidráulicas e redes de esgoto residenciais e prediais. Execução de tubulações de água fria e quente, impermeabilização de cisternas, instalação de louças sanitárias e testes de estanqueidade com garantia técnica de zero vazamento.",
    features: [
      "Tubulações de água fria soldável e água quente termofusão (PPR/CPVC)",
      "Redes de esgoto com caixas de inspeção, gordura e sifonamento correto",
      "Instalação e limpeza técnica de cisternas subterrâneas e caixas elevadas",
      "Instalação de pressurizadores de água para chuveiros e torneiras",
      "Localização e conserto rápido de vazamentos ocultos"
    ],
    stages: [
      {
        title: "1. Dimensionamento dos Pontos",
        description: "Mapeamento dos pontos de consumo em banheiros, cozinha, lavanderia e área externa."
      },
      {
        title: "2. Abertura de Rasgos e Passagem de Tubos",
        description: "Assentamento de conexões com caimentos adequados nas redes de esgoto."
      },
      {
        title: "3. Teste de Estanqueidade com Pressão",
        description: "Teste pressurizado antes do fechamento das paredes para garantir zero vazamento."
      },
      {
        title: "4. Instalação de Louças e Metais",
        description: "Fixação de bacias sanitárias, cubas, torneiras, registros e chuveiros."
      }
    ],
    audience: [
      "Novas construções residenciais e comerciais",
      "Imóveis com canos antigos de ferro ou PVC ressecado",
      "Adequação de pressão de água em casas térreas e sobrados"
    ]
  },
  {
    id: "instalacoes-eletricas-e-iluminacao",
    slug: "instalacoes-eletricas-e-iluminacao",
    name: "Instalações Elétricas e Iluminação",
    h1Title: "Orçamento para Instalações Elétricas e Iluminação em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Quadros de distribuição, fiação anti-chama, circuitos para ar-condicionado e projetos luminotécnicos em LED.",
    fullDescription: "Execução e modernização de instalações elétricas seguras dentro das normas NBR 5410. Montagem de quadros de disjuntores com proteção DR (Diferencial Residual) e DPS (Dispositivo contra Surtos), fiação dimensionada para chuveiros potentes e ar-condicionado split, tomadas no padrão novo e iluminação moderna em LED com perfis embutidos e sancas.",
    iconName: "Zap",
    seoTitle: "Instalações Elétricas em São Pedro da Aldeia RJ | Eletricista Residencial",
    seoDescription: "Eletricista e instalações elétricas em São Pedro da Aldeia e Região dos Lagos. Quadros, fiação, disjuntores e iluminação LED segura.",
    pageBgColor: "#F2F4F5", // Cinza Claro Suave da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Instalação elétrica residencial com quadro de distribuição e cabos normatizados",
    heroGradientOverlay: "bg-gradient-to-r from-[#142531] via-[#234154]/95 sm:via-[#234154]/85 lg:via-[#31576f]/65 to-transparent",
    heroAccentColor: "#38bdf8",
    seoKeywordsShortTail: [
      "Eletricista São Pedro da Aldeia",
      "Instalação elétrica",
      "Quadro de disjuntores",
      "Iluminação LED"
    ],
    seoKeywordsLongTail: [
      "Eletricista profissional em São Pedro da Aldeia para casas e comércio",
      "Instalação de circuito exclusivo para ar-condicionado e chuveiro elétrico",
      "Montagem de quadro elétrico com DR e DPS na Região dos Lagos",
      "Projeto de iluminação embutida e fita LED para gesso"
    ],
    seoSubtext: "Eletricista em São Pedro da Aldeia e instalações elétricas residenciais com total segurança e conformidade à NBR 5410. Distribuição equilibrada de circuitos, fiação anti-chama para ar-condicionado, quadros modernos com proteção contra raios e oscilações da rede da Região dos Lagos.",
    features: [
      "Dimensionamento correto de carga elétrica para evitar sobrecargas e desarmes",
      "Quadros de distribuição modernos com disjuntores termomagnéticos, DR e DPS",
      "Circuitos individuais e cabeamento reforçado para aparelhos de ar-condicionado",
      "Instalação de spots, fitas de LED, perfis embutidos e pendentes decorativos",
      "Aterramento elétrico seguro para proteção de aparelhos eletrônicos"
    ],
    stages: [
      {
        title: "1. Levantamento de Cargas e Circuitos",
        description: "Cálculo de potência por ambiente e divisão balanceada de fases."
      },
      {
        title: "2. Passagem de Eletrodutos e Cabos",
        description: "Instalação de eletrodutos reforçados e enfiação de cabos normatizados."
      },
      {
        title: "3. Montagem do Quadro Central",
        description: "Barramentos de cobre, disjuntores bipolares/tripolares e identificação."
      },
      {
        title: "4. Instalação de Acabamentos e Teste",
        description: "Colocação de tomadas, interruptores e testes de tensão com multímetro."
      }
    ],
    audience: [
      "Casas com quadros antigos ou fios superaquecendo",
      "Instalação de novos aparelhos de ar-condicionado split",
      "Projetos de decoração com iluminação cenográfica em LED"
    ]
  },
  {
    id: "impermeabilizacao-de-lajes-e-fundacoes",
    slug: "impermeabilizacao-de-lajes-e-fundacoes",
    name: "Impermeabilização de Lajes e Fundações",
    h1Title: "Orçamento para Impermeabilização de Lajes e Fundações em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Proteção contra infiltrações com manta asfáltica, membranas líquidas de poliuretano e argamassa polimérica.",
    fullDescription: "Soluções definitivas para combater e prevenir infiltrações, umidade ascendente do solo e vazamentos em lajes expostas ao sol e chuva, piscinas, caixas d'água, banheiros e vigas baldrames. Emprego de produtos químicos de ponta das principais marcas com teste de estanqueidade de 72 horas para garantir tranquilidade por anos.",
    iconName: "ShieldCheck",
    seoTitle: "Impermeabilização de Lajes em São Pedro da Aldeia RJ | Manta Asfáltica",
    seoDescription: "Impermeabilização com manta asfáltica e poliuretano em São Pedro da Aldeia. Acabe com infiltrações e goteiras em lajes e fundações.",
    pageBgColor: "#EAF2F6", // Tom Azul Claro Pálido da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Impermeabilização profissional de laje com manta asfáltica e resina",
    heroGradientOverlay: "bg-gradient-to-r from-[#132733] via-[#224052]/95 sm:via-[#224052]/85 lg:via-[#385e74]/65 to-transparent",
    heroAccentColor: "#7dd3fc",
    seoKeywordsShortTail: [
      "Impermeabilização de lajes",
      "Manta asfáltica São Pedro",
      "Infiltração na laje",
      "Manta líquida poliuretano"
    ],
    seoKeywordsLongTail: [
      "Impermeabilização de lajes e fundações em São Pedro da Aldeia RJ",
      "Aplicação de manta asfáltica a maçarico na Região dos Lagos",
      "Como acabar com umidade e goteiras em lajes expostas",
      "Impermeabilização de vigas baldrames e reservatórios de água"
    ],
    seoSubtext: "Impermeabilização de lajes em São Pedro da Aldeia e proteção de estruturas contra infiltrações e umidade litorânea. Aplicação especializada de manta asfáltica soldada a maçarico, membrana líquida de poliuretano e argamassas poliméricas elásticas com teste de lâmina d'água comprovado.",
    features: [
      "Aplicação de manta asfáltica soldada a maçarico com primer de alta aderência",
      "Membrana líquida de poliuretano e borracha acrílica para lajes transitáveis",
      "Impermeabilização rígida e flexível com argamassa polimérica em reservatórios",
      "Tratamento de vigas baldrames contra subida de umidade nas paredes",
      "Execução de teste de estanqueidade de 72 horas com lâmina d'água"
    ],
    stages: [
      {
        title: "1. Regularização da Superfície",
        description: "Criação de caimento de no mínimo 1% para os ralos e cantos arredondados (meia-cana)."
      },
      {
        title: "2. Aplicação do Primer",
        description: "Camada preparatória para total ancoragem do sistema impermeabilizante."
      },
      {
        title: "3. Aplicação da Manta ou Membrana",
        description: "Sobreposição adequada de emendas e subida de 30cm no rodapé perimetral."
      },
      {
        title: "4. Teste de Carga e Proteção Mecânica",
        description: "Ensaio com água represada e contrapiso de proteção mecânica sobre a manta."
      }
    ],
    audience: [
      "Lajes de cobertura expostas ao sol e à chuva",
      "Banheiros e lavabos de pavimentos superiores",
      "Cisternas, caixas d'água e muros de arrimo"
    ]
  },
  {
    id: "gesso-e-drywall",
    slug: "gesso-e-drywall",
    name: "Gesso, Drywall e Rebaixamento",
    h1Title: "Orçamento para Gesso, Drywall e Rebaixamento em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Forros rebaixados em drywall e plaquinha, sancas iluminadas, paredes divisórias acústicas e nichos decorativos.",
    fullDescription: "Instalação profissional de gesso acartonado (drywall) e gesso tradicional em placas. Projetos personalizados com rebaixamento de teto liso, sancas abertas ou invertidas com iluminação indireta em LED, cortineiros embutidos, paredes de vedação interna com isolamento termoacústico em lã de vidro e nichos iluminados para banheiros e salas.",
    iconName: "Layers",
    seoTitle: "Gesso e Drywall em São Pedro da Aldeia RJ | Rebaixamento e Sancas",
    seoDescription: "Gesseiro e drywall em São Pedro da Aldeia e Região dos Lagos. Rebaixamento de teto, divisórias em drywall, sancas e forros modernos.",
    pageBgColor: "#F4FCFB", // Branco Gelo da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1513467535987-0811be9b32b0?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Instalação de forro de drywall e rebaixamento de gesso com iluminação embutida",
    heroGradientOverlay: "bg-gradient-to-r from-[#192c3a] via-[#2c4e63]/95 sm:via-[#2c4e63]/85 lg:via-[#42718e]/65 to-transparent",
    heroAccentColor: "#38bdf8",
    seoKeywordsShortTail: [
      "Gesso São Pedro da Aldeia",
      "Drywall Região dos Lagos",
      "Rebaixamento de teto",
      "Gesseiro profissional"
    ],
    seoKeywordsLongTail: [
      "Instalação de drywall e forro de gesso em São Pedro da Aldeia",
      "Rebaixamento de teto em gesso com sancas iluminadas e cortineiro",
      "Paredes divisórias de drywall com isolamento acústico",
      "Gesseiro para apartamentos e casas na Região dos Lagos"
    ],
    seoSubtext: "Gesso e drywall em São Pedro da Aldeia RJ com padrão de acabamento refinado para forros rebaixados, sancas decorativas em LED e divisórias funcionais. Montagem rápida, estrutura metálica galvanizada anti-ferrugem e alinhamento milimétrico para valorizar os ambientes da sua casa.",
    features: [
      "Placas de drywall standard, resistentes à umidade (RU/Verde) para banheiros e cozinhas",
      "Perfis metálicos galvanizados e tirantes de fixação de alta sustentação",
      "Tratamento de juntas com fita microperfurada e massa própria sem trincas",
      "Sancas iluminadas, cortineiros e rasgos de luz planejados com eletricista",
      "Montagem limpa e até 3 vezes mais rápida que a alvenaria convencional"
    ],
    stages: [
      {
        title: "1. Nivelamento a Laser do Perímetro",
        description: "Demarcação exata das alturas com nível a laser para forro perfeitamente nivelado."
      },
      {
        title: "2. Fixação da Estrutura Metálica",
        description: "Ancoragem de canaletas, perfis F530 e montantes reforçados."
      },
      {
        title: "3. Parafusamento das Placas",
        description: "Fixação das placas de drywall com parafusos auto-atarrachantes protegidos."
      },
      {
        title: "4. Tratamento de Juntas e Lixamento",
        description: "Aplicação de fita, massa de acabamento e lixamento fino pronto para a tinta."
      }
    ],
    audience: [
      "Salas e quartos que desejam visual moderno com iluminação indireta",
      "Reformas rápidas de escritórios, consultórios e lojas comerciais",
      "Banheiros modernos precisando de nichos e forro resistente à umidade"
    ]
  },
  {
    id: "assentamento-de-pisos-e-porcelanatos",
    slug: "assentamento-de-pisos-e-porcelanatos",
    name: "Assentamento de Pisos e Porcelanatos",
    h1Title: "Orçamento para Assentamento de Pisos e Porcelanatos em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Porcelanatos de grande formato, pisos cerâmicos, pedras naturais, rodapés embutidos e nivelamento a laser.",
    fullDescription: "Colocação especializada de pisos e revestimentos cerâmicos e porcelanatos retificados polidos, acetinados e acetinados rústicos. Trabalhamos com niveladores de piso profissionais, corte preciso em meia esquadria (45 graus) em nichos e quinas, além de rejunte epóxi ou acrílico 100% lavável e impermeável.",
    iconName: "Grid",
    seoTitle: "Colocação de Pisos e Porcelanatos em São Pedro da Aldeia RJ | Azulejista",
    seoDescription: "Azulejista e colocador de porcelanato em São Pedro da Aldeia e cidades vizinhas. Cortes a 45 graus, nichos e nivelamento impecável.",
    pageBgColor: "#ECEFF2", // Cinza Claro Suave da paleta oficial (#ACBCBF)
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Assentamento de porcelanato polido de grande formato com niveladores de piso",
    heroGradientOverlay: "bg-gradient-to-r from-[#112736] via-[#254c66]/95 sm:via-[#254c66]/85 lg:via-[#3d7092]/65 to-transparent",
    heroAccentColor: "#93c5fd",
    seoKeywordsShortTail: [
      "Azulejista São Pedro da Aldeia",
      "Colocador de porcelanato",
      "Piso retificado",
      "Corte 45 graus"
    ],
    seoKeywordsLongTail: [
      "Assentamento de pisos e porcelanatos em São Pedro da Aldeia e Região dos Lagos",
      "Azulejista especializado em porcelanato de grande formato e nicho de banheiro",
      "Nivelamento a laser de piso com dupla colagem e rejunte epóxi",
      "Preço de colocação de piso por metro quadrado em São Pedro"
    ],
    seoSubtext: "Azulejista e assentamento de pisos e porcelanatos em São Pedro da Aldeia RJ com nivelamento milimétrico a laser, técnica de dupla colagem em argamassa AC-III e cortes em meia esquadria (45°). Acabamento impecável para salas, cozinhas, banheiros e áreas externas da Região dos Lagos.",
    features: [
      "Assentamento de peças em grandes formatos (80x80cm, 120x60cm, 120x120cm)",
      "Cortes especiais a 45° (meia esquadria) em nichos de banheiro e bancadas",
      "Nivelamento milimétrico com uso de espaçadores niveladores de alta pressão",
      "Argamassas específicas AC-II e AC-III para máxima aderência sem descolamento",
      "Rejunte de alta performance com acabamento liso e impermeável"
    ],
    stages: [
      {
        title: "1. Verificação do Contrapiso",
        description: "Conferência de desníveis, caimentos para ralos e cura da base."
      },
      {
        title: "2. Paginação do Ambiente",
        description: "Planejamento dos cortes para que os recortes fiquem nas áreas menos visíveis."
      },
      {
        title: "3. Aplicação com Dupla Colagem",
        description: "Argamassa no contrapiso e no verso da peça para peças maiores que 30x30cm."
      },
      {
        title: "4. Rejuntamento e Limpeza Técnica",
        description: "Remoção de niveladores, aplicação de rejunte e limpeza sem riscar o esmalte."
      }
    ],
    audience: [
      "Salas, cozinhas e quartos em busca de elegância contemporânea",
      "Banheiros modernos com nichos embutidos",
      "Varandas, garagens e calçadas externas com pisos antiderrapantes"
    ]
  },
  {
    id: "pintura-profissional-e-efeitos-decorativos",
    slug: "pintura-profissional-e-efeitos-decorativos",
    name: "Pintura Profissional e Texturas",
    h1Title: "Orçamento para Pintura Profissional e Texturas em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Pintura interna e externa com emassamento, textura rolada, grafiato, cimento queimado e tintas laváveis.",
    fullDescription: "Pintores com mais de 35 anos de tradição garantindo acabamento liso, sedoso e duradouro. Tratamento prévio das superfícies com raspagem, eliminação de fungos e mofo e aplicação de fundo preparador e selador. Especialistas em pinturas externas com tintas emborrachadas e elastoméricas de altíssima resistência ao sol escaldante e à maresia agressiva de São Pedro da Aldeia e cidades litorâneas.",
    iconName: "Paintbrush",
    seoTitle: "Pintura Residencial e Predial em São Pedro da Aldeia RJ | Pintor Profissional",
    seoDescription: "Pintura residencial e predial em São Pedro da Aldeia. Grafiato, textura, cimento queimado e tintas resistentes à maresia.",
    pageBgColor: "#EFF5F8", // Tom Azul Claro Pálido da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Pintor profissional aplicando tinta de alta qualidade em paredes residenciais",
    heroGradientOverlay: "bg-gradient-to-r from-[#132b3a] via-[#25495e]/95 sm:via-[#25495e]/85 lg:via-[#3f6b84]/65 to-transparent",
    heroAccentColor: "#67e8f9",
    seoKeywordsShortTail: [
      "Pintor São Pedro da Aldeia",
      "Pintura residencial",
      "Grafiato e textura",
      "Pintura emborrachada"
    ],
    seoKeywordsLongTail: [
      "Pintura residencial e predial em São Pedro da Aldeia e Região dos Lagos",
      "Pintor profissional para massa corrida textura rolada e cimento queimado",
      "Pintura de fachada com tinta emborrachada resistente à maresia",
      "Orçamento de pintura de casa externa e interna em São Pedro"
    ],
    seoSubtext: "Pintura profissional e texturas em São Pedro da Aldeia RJ com preparação meticulosa, correção de imperfeições, massa acrílica e aplicação de tintas elastoméricas à prova de maresia. Renove a beleza e a valorização estética do seu imóvel residencial ou comercial com pintura de padrão superior.",
    features: [
      "Aplicação de massa corrida interna e massa acrílica externa",
      "Texturas decorativas: grafiato, projetada, cimento queimado e lambris",
      "Pintura emborrachada hidrorrepelente para fachadas expostas ao tempo",
      "Pintura de portas, portões e grades com esmalte sintético e fundo zarcão",
      "Isolamento minucioso de pisos, vidros e móveis com plástico e fita crepe"
    ],
    stages: [
      {
        title: "1. Preparação da Superfície",
        description: "Lixamento, eliminação de poeira, correção de imperfeições e selador."
      },
      {
        title: "2. Emassamento e Nivelamento",
        description: "Aplicação de demãos de massa para garantir acabamento totalmente liso."
      },
      {
        title: "3. Lixamento Fino e Limpeza",
        description: "Uso de lixas finas com luz direcionada para eliminar ondulações."
      },
      {
        title: "4. Pintura em Múltiplas Demãos",
        description: "Aplicação das tintas de linha premium com rolo antigota e recorte perfeito."
      }
    ],
    audience: [
      "Renovação de fachadas de casas e condomínios",
      "Pintura interna pós-reforma ou mudança de moradores",
      "Proteção de muros e alvenaria contra salitre e umidade litorânea"
    ]
  },
  {
    id: "construcao-e-reforma-de-piscinas-e-gourmet",
    slug: "construcao-e-reforma-de-piscinas-e-gourmet",
    name: "Piscinas e Áreas Gourmet",
    h1Title: "Orçamento para Piscinas e Áreas Gourmet em São Pedro da Aldeia e Região dos Lagos",
    shortDescription: "Construção de piscinas de alvenaria e vinil, decks, quiosques, churrasqueiras de alvenaria e pergolados.",
    fullDescription: "Criação do seu refúgio de lazer completo para curtir com a família na Região dos Lagos. Construímos piscinas em concreto armado ou alvenaria estrutural, instalação de bombas, filtros, hidromassagem e cascatas, além de áreas gourmet sob medida com churrasqueira de tijolinho ou ecológica, bancadas de granito, fornos de pizza e pergolados de madeira ou alumínio.",
    iconName: "Waves",
    seoTitle: "Construção de Piscinas e Áreas Gourmet em São Pedro da Aldeia RJ",
    seoDescription: "Construção de piscinas em alvenaria e áreas gourmet com churrasqueira em São Pedro da Aldeia. Construtor especializado com mais de 35 anos.",
    pageBgColor: "#F4FCFB", // Branco Gelo da paleta oficial
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Piscina em alvenaria com deck e área gourmet com churrasqueira em São Pedro da Aldeia",
    heroGradientOverlay: "bg-gradient-to-r from-[#0f2533] via-[#1e4863]/95 sm:via-[#1e4863]/85 lg:via-[#31698a]/65 to-transparent",
    heroAccentColor: "#38bdf8",
    seoKeywordsShortTail: [
      "Construção de piscina",
      "Área gourmet São Pedro",
      "Churrasqueira de alvenaria",
      "Reforma de piscina"
    ],
    seoKeywordsLongTail: [
      "Construção de piscinas de alvenaria e concreto armado em São Pedro da Aldeia",
      "Projeto e construção de área gourmet com churrasqueira e bancada",
      "Reforma de piscina com troca de pastilhas e impermeabilização na Região dos Lagos",
      "Deck de madeira e porcelanato antiderrapante para piscina"
    ],
    seoSubtext: "Construção de piscinas e áreas gourmet em São Pedro da Aldeia RJ com concreto armado impermeabilizado, pastilhas cerâmicas, casa de máquinas completa e churrasqueiras planejadas. Valorize seu imóvel e proporcione momentos inesquecíveis para a sua família com quem entende do solo da Região dos Lagos.",
    features: [
      "Piscinas em concreto armado com revestimento em pastilhas ou azulejos",
      "Casas de máquinas completas com filtro, bomba e sistema de iluminação subaquática",
      "Churrasqueiras ecológicas ou de tijolinho à vista com coifas e refratários",
      "Bancadas secas e molhadas em granito com cubas de inox",
      "Decks de madeira tratada ou porcelanato amadeirado antiderrapante"
    ],
    stages: [
      {
        title: "1. Escavação e Estruturação de Ferro",
        description: "Modelagem da cava e leito da piscina com malha dupla de ferro reforçada."
      },
      {
        title: "2. Concretagem e Impermeabilização Dupla",
        description: "Concreto usinado fck resistente e aplicação de cristalizantes hidrofugantes."
      },
      {
        title: "3. Assentamento de Pastilhas e Borda",
        description: "Revestimento com argamassa própria para piscinas e borda atérmica."
      },
      {
        title: "4. Área Gourmet e Instalações",
        description: "Levantamento da bancada, churrasqueira, pia, iluminação e deck."
      }
    ],
    audience: [
      "Residências e sítios com espaço para lazer e confraternizações",
      "Pousadas e hotéis querendo valorizar o atrativo dos hóspedes",
      "Reformas de piscinas antigas com vazamentos ou acabamento desgastado"
    ]
  }
];
