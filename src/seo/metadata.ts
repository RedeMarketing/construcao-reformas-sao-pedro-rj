/**
 * Utilitário de SEO Técnico e Metadados Dinâmicos
 * Domínio Oficial: https://construcaoreformasemsaopedro.com
 * 
 * Garante a geração de tags canônicas (canonical), OpenGraph, Twitter Cards
 * e indexação correta para o Googlebot e buscadores.
 */

import { BUSINESS_DATA } from "../data/business";
import { CityData } from "../data/cities";
import { ServiceItem } from "../data/services";
import { SITE_URL, APP_CONFIG } from "../constants/config";

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
}

/**
 * Normaliza e gera a URL Canônica absoluta com base nas diretrizes do Google Search:
 * - Sempre utiliza o domínio oficial (https://construcaoreformasemsaopedro.com)
 * - Remove parâmetros de rastreamento (ex: ?gclid=..., ?utm_source=...) e âncoras (#...)
 * - Padroniza a estrutura com trailing slash (barra final), 100% idêntica ao sitemap.xml
 * - Trata a Home ("/" ou "") retornando a raiz com barra final ("https://construcaoreformasemsaopedro.com/")
 */
export function buildCanonicalUrl(path?: string, baseUrl: string = SITE_URL): string {
  // 1. Limpa a base removendo qualquer barra final excedente
  const cleanBase = baseUrl.replace(/\/+$/, "");

  // 2. Se nenhum caminho for fornecido, tenta obter da janela (client-side) ou assume a raiz
  let rawPath = path;
  if (!rawPath && typeof window !== "undefined") {
    rawPath = window.location.pathname;
  }
  if (!rawPath || rawPath === "/" || rawPath === "") {
    return `${cleanBase}/`;
  }

  // 3. Remove queries e hashes caso tenham sido passados acidentalmente
  const cleanPathOnly = rawPath.split("?")[0].split("#")[0];

  // 4. Se for um arquivo estático (ex: .xml, .html, .png, etc.), não adiciona barra final
  if (/\.[a-zA-Z0-9]+$/.test(cleanPathOnly)) {
    const formatted = cleanPathOnly.startsWith("/") ? cleanPathOnly : `/${cleanPathOnly}`;
    return `${cleanBase}${formatted}`;
  }

  // 5. Remove barras iniciais e finais duplicadas para padronização
  const segments = cleanPathOnly.replace(/^\/+|\/+$/g, "");

  if (!segments) {
    return `${cleanBase}/`;
  }

  // 6. Retorna URL canônica padronizada com barra final única (/), em conformidade com o sitemap.xml
  return `${cleanBase}/${segments}/`;
}

export function getHomeMetadata(): PageMetadata {
  return {
    title: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ | Construtor Legalizado",
    description: "Construção civil, obras do zero, reformas em geral e acabamentos com construtor legalizado e equipe completa com mais de 35 anos de experiência em São Pedro da Aldeia RJ.",
    canonical: buildCanonicalUrl("/"),
    ogTitle: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ | Construtor Legalizado",
    ogDescription: "Soluções completas em construção e reformas com equipe completa, construtor legalizado e mais de 35 anos de experiência em São Pedro da Aldeia e Região dos Lagos.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getCityMetadata(city: CityData): PageMetadata {
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    canonical: buildCanonicalUrl(`/${city.slug}`),
    ogTitle: city.seoTitle,
    ogDescription: city.seoDescription,
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getCitiesIndexMetadata(): PageMetadata {
  return {
    title: "Cidades Atendidas | Construção e Reformas em São Pedro da Aldeia RJ",
    description: "Cidades atendidas com construtor legalizado e equipe completa: São Pedro da Aldeia, Cabo Frio, Armação dos Búzios, Arraial do Cabo, Iguaba Grande, Araruama e Saquarema RJ.",
    canonical: buildCanonicalUrl("/cidades"),
    ogTitle: "Cidades Atendidas | Construção e Reformas em São Pedro da Aldeia RJ",
    ogDescription: "Cidades atendidas com construtor legalizado e equipe completa na Região dos Lagos RJ.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getServiceMetadata(service: ServiceItem): PageMetadata {
  return {
    title: `${service.name} em São Pedro da Aldeia e Região | Construtor Legalizado`,
    description: service.shortDescription,
    canonical: buildCanonicalUrl(`/servicos/${service.slug}`),
    ogTitle: `${service.name} em São Pedro da Aldeia RJ`,
    ogDescription: service.shortDescription,
    ogImage: service.heroImage || APP_CONFIG.defaultOgImage,
  };
}

export function getServicesIndexMetadata(): PageMetadata {
  return {
    title: "Serviços de Construção e Reforma | São Pedro da Aldeia RJ",
    description: "Conheça nossas soluções completas: construção nova do zero, reformas residenciais e comerciais, telhados, pisos, áreas gourmet e instalações com construtor legalizado.",
    canonical: buildCanonicalUrl("/servicos"),
    ogTitle: "Serviços de Construção e Reforma | São Pedro da Aldeia RJ",
    ogDescription: "Soluções completas em obras e reformas com equipe completa e construtor legalizado.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getCalculatorMetadata(): PageMetadata {
  return {
    title: "Calculadora de Obra e Reforma | Simulação em São Pedro da Aldeia RJ",
    description: "Simule prazos, equipe necessária e etapas executivas da sua construção ou reforma com construtor legalizado em São Pedro da Aldeia e Região dos Lagos.",
    canonical: buildCanonicalUrl("/calculadora-de-construcao-e-reforma"),
    ogTitle: "Calculadora de Obra e Reforma | Construção em São Pedro da Aldeia RJ",
    ogDescription: "Simule online o orçamento, cronograma e fases da sua obra ou reforma na Região dos Lagos.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getAboutMetadata(): PageMetadata {
  return {
    title: "Sobre Nós | Construtor Legalizado em São Pedro da Aldeia RJ",
    description: "Conheça nossa trajetória de mais de 35 anos em construção civil, obras residenciais, reformas em geral e equipe completa em São Pedro da Aldeia e Região dos Lagos.",
    canonical: buildCanonicalUrl("/sobre"),
    ogTitle: "Sobre Nós | Construtor Legalizado em São Pedro da Aldeia RJ",
    ogDescription: "Mais de 35 anos de solidez e confiança em obras residenciais e comerciais.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getContactMetadata(): PageMetadata {
  return {
    title: "Contato e Orçamento de Obra | Construção e Reformas São Pedro da Aldeia RJ",
    description: "Entre em contato conosco para solicitar visita técnica, consultoria de obra e orçamento de construção e reforma em São Pedro da Aldeia, Cabo Frio, Búzios e região.",
    canonical: buildCanonicalUrl("/contato"),
    ogTitle: "Contato e Orçamento de Obra | Construção e Reformas São Pedro da Aldeia RJ",
    ogDescription: "Fale com nosso construtor legalizado e solicite seu orçamento de obra ou reforma.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getPrivacyPolicyMetadata(): PageMetadata {
  return {
    title: `Política de Privacidade | ${BUSINESS_DATA.name}`,
    description: "Saiba como tratamos suas informações e dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).",
    canonical: buildCanonicalUrl("/politica-de-privacidade"),
    ogTitle: `Política de Privacidade | ${BUSINESS_DATA.name}`,
    ogDescription: "Privacidade e proteção de dados pessoais.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getTermsOfUseMetadata(): PageMetadata {
  return {
    title: `Termos de Uso | ${BUSINESS_DATA.name}`,
    description: "Termos e condições de uso do site, da calculadora de obra e das simulações de construção e reformas.",
    canonical: buildCanonicalUrl("/termos-de-uso"),
    ogTitle: `Termos de Uso | ${BUSINESS_DATA.name}`,
    ogDescription: "Termos e condições de uso dos serviços e simulações do site.",
    ogImage: APP_CONFIG.defaultOgImage,
  };
}

export function getNotFoundMetadata(): PageMetadata {
  return {
    title: "Página não encontrada (404) | Construção e Reformas em São Pedro da Aldeia RJ",
    description: "A página que você tentou acessar não foi encontrada. Navegue pelos nossos serviços de construção e reformas ou solicite seu orçamento.",
    canonical: buildCanonicalUrl("/404"),
    ogTitle: "Página não encontrada (404)",
    ogDescription: "A página solicitada não foi localizada.",
    ogImage: APP_CONFIG.defaultOgImage,
    noindex: true,
  };
}

/**
 * Atualiza sincronicamente o <head> do documento com a Canonical URL e meta tags.
 * Evita o erro de páginas secundárias manterem a tag canonical apontando para a Home.
 */
export function updateDocumentMeta(meta: PageMetadata) {
  if (typeof document === "undefined") return;

  // 1. Título do Documento
  document.title = meta.title;

  // 2. Função auxiliar para definir ou criar meta tags
  const setMeta = (attrName: "name" | "property", attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  // 3. Meta Description
  setMeta("name", "description", meta.description);

  // 4. Tag Canonical - Busca por tag existente ou cria nova
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    document.head.appendChild(linkCanonical);
  }
  // Atribui a URL canônica dinâmica da página ativa
  linkCanonical.setAttribute("href", meta.canonical);

  // 5. Meta Robots (controle de indexação)
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (meta.noindex) {
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", "noindex, nofollow");
  } else if (robotsTag) {
    robotsTag.remove();
  }

  // 6. OpenGraph tags
  setMeta("property", "og:type", meta.ogType || "website");
  setMeta("property", "og:url", meta.canonical);
  setMeta("property", "og:title", meta.ogTitle || meta.title);
  setMeta("property", "og:description", meta.ogDescription || meta.description);
  setMeta("property", "og:site_name", BUSINESS_DATA.name);
  setMeta("property", "og:image", meta.ogImage || APP_CONFIG.defaultOgImage);

  // 7. Twitter Card tags
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:url", meta.canonical);
  setMeta("name", "twitter:title", meta.twitterTitle || meta.ogTitle || meta.title);
  setMeta("name", "twitter:description", meta.twitterDescription || meta.ogDescription || meta.description);
  setMeta("name", "twitter:image", meta.twitterImage || meta.ogImage || APP_CONFIG.defaultOgImage);
}
