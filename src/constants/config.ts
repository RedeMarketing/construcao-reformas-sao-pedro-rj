/**
 * Configurações Globais do Site
 * Domínio Oficial Definitivo: https://construcaoreformasemsaopedro.com
 */

export const SITE_DOMAIN = "construcaoreformasemsaopedro.com";
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || "https://construcaoreformasemsaopedro.com";

export const APP_CONFIG = {
  domain: SITE_DOMAIN,
  siteUrl: SITE_URL,
  name: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ",
  contactEmail: "redemarketingblog@gmail.com",
  phone: "5522920127037",
  phoneFormatted: "(22) 92012-7037",
  whatsappNumber: "5522920127037",
  whatsappFormatted: "(22) 92012-7037",
  whatsappUrl: "https://wa.me/5522920127037",
  sitemapUrl: `${SITE_URL}/sitemap.xml`,
  robotsUrl: `${SITE_URL}/robots.txt`,
  defaultOgImage: `${SITE_URL}/og-image.jpg`,
} as const;
