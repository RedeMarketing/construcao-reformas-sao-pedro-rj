import React, { useEffect } from "react";
import { buildCanonicalUrl, updateDocumentMeta, PageMetadata } from "../../seo/metadata";
import { APP_CONFIG } from "../../constants/config";
import { BUSINESS_DATA } from "../../data/business";

export interface SEOProps {
  /** Título da página (exibido na aba do navegador e no Google SERP) */
  title: string;
  /** Descrição atrativa para motores de busca (120 a 160 caracteres) */
  description: string;
  /** 
   * Caminho relativo da página atual (ex: "/cabo-frio", "/servicos/construcao-de-casas-e-obras-do-zero/").
   * Se omitido, usará o pathname atual do navegador.
   */
  path?: string;
  /** URL canônica explícita opcional (caso deseje sobrescrever a geração automática) */
  canonical?: string;
  /** Imagem de compartilhamento social (OpenGraph e Twitter) */
  ogImage?: string;
  /** Tipo OpenGraph (padrão: "website") */
  ogType?: "website" | "article";
  /** Impede a indexação nos mecanismos de busca caso necessário (ex: 404) */
  noindex?: boolean;
  /** Dados estruturados Schema.org em formato JSON-LD (objeto único ou array) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Componente Reutilizável de SEO Técnico
 * 
 * Responsabilidades:
 * 1. Constrói e injeta a tag <link rel="canonical" href="..." /> dinâmica e padronizada.
 * 2. Atualiza <title>, <meta name="description">, tags OpenGraph e Twitter Cards.
 * 3. Suporta injeção de dados estruturados Schema.org (JSON-LD).
 * 4. Evita conflitos de canonical para a Home em páginas secundárias ou variações com/sem barra final.
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  canonical,
  ogImage = APP_CONFIG.defaultOgImage,
  ogType = "website",
  noindex = false,
  jsonLd,
}) => {
  // Constrói a URL canônica dinâmica garantindo a padronização oficial do domínio
  const canonicalUrl = canonical || buildCanonicalUrl(path);

  useEffect(() => {
    const metaPayload: PageMetadata = {
      title,
      description,
      canonical: canonicalUrl,
      ogTitle: title,
      ogDescription: description,
      ogImage,
      ogType: ogType as "website" | "article",
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: ogImage,
      noindex,
    };

    // Atualiza sincronicamente o head do documento no cliente
    updateDocumentMeta(metaPayload);
  }, [title, description, canonicalUrl, ogImage, ogType, noindex]);

  return (
    <>
      {/* React 19 Document Metadata Hoisting */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* OpenGraph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={BUSINESS_DATA.name} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Dados Estruturados Schema.org (JSON-LD) */}
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((schemaItem, index) => (
            <script
              key={`jsonld-schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )
      )}
    </>
  );
};
